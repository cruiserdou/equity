package com.springapp.mvc.enterprise;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/import_enterprise_xls")
public class ImportXlsEnterprise {
    private static final int BUFFER_SIZE = 16 * 1024;

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
                           @RequestParam(value = "file", required = false) MultipartFile file
    ) throws Exception {
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);

        Connection conn = null;
        PreparedStatement pst = null;
        String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/");
        String src_file = null;
        if (!file.isEmpty()) {

            file.transferTo(new File(projectPath + "/" + file.getOriginalFilename()));
        }
       src_file=projectPath+'/'+file.getOriginalFilename();
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try{
            FileInputStream fin=new FileInputStream(src_file);
            HSSFWorkbook workbook=new HSSFWorkbook(fin);
            HSSFSheet sheet=workbook.getSheetAt(0);
            HSSFRow row=null;
            HSSFCell cell=null;

            int totalRow=sheet.getLastRowNum();

            String buslicno = "";
            String name = "";
            String unit = "";
            String nature = "";
            String regaddr = "";
            String listcode = "";
            String legrep = "";
            String region = "";
            String nos = "";
            String postal = "";

            conn = DriverManager.getConnection(url, user, password);
            String sql = "INSERT INTO work.tb_enterprise(buslicno, name, unit, legrep, region, nos, postal, nature, \n" +
                    "        listcode, regaddr )"+
                    " values(?,?,?,?,?,?,?,?,?,?)";
            for(int i=1;i<=totalRow;i++){
                row = sheet.getRow(i);
                 cell = row.getCell(2);
                buslicno=cell.getRichStringCellValue().toString();
                cell = row.getCell(3);
                name = cell.getRichStringCellValue().toString();
                cell = row.getCell(2);
                unit = cell.getRichStringCellValue().toString();
                cell = row.getCell(5);
                legrep = cell.getRichStringCellValue().toString();
                cell = row.getCell(6);
                region = cell.getRichStringCellValue().toString();
                cell = row.getCell(7);
                nos = cell.getRichStringCellValue().toString();
                cell = row.getCell(8);
                postal = cell.getRichStringCellValue().toString();
                cell = row.getCell(9);
                nature = cell.getRichStringCellValue().toString();
                cell = row.getCell(10);
                regaddr =  cell.getRichStringCellValue().toString();
                cell = row.getCell(11);
                listcode = cell.getRichStringCellValue().toString();

                pst=conn.prepareStatement(sql);
                pst.setString(1, buslicno);
                pst.setString(2,name);
                pst.setString(3, unit);
                pst.setString(4,legrep);
                pst.setString(5,region);
                pst.setString(6,nos);
                pst.setString(7,postal);
                pst.setString(8,nature);
                pst.setString(9, regaddr);
                pst.setString(10, listcode);
                pst.executeUpdate();
           }

        } catch (FileNotFoundException e) {

            e.printStackTrace();
        } catch(IOException ex){
            ex.printStackTrace();
        } catch(SQLException exx){
            exx.printStackTrace();
        } finally{
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return dataShop;
    }
}
