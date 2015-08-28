function Dsy() {
    this.Items = {};
}
Dsy.prototype.add = function (id, iArray) {
    this.Items[id] = iArray;
}
Dsy.prototype.Exists = function (id) {
    if (typeof(this.Items[id]) == "undefined") return false;
    return true;
}

var dsy_zjh = new Dsy();

dsy_zjh.add("0_0", ["农业", "林业", "畜牧业", "渔业", "农、林、牧、渔服务业"]);
dsy_zjh.add("0_1", ["煤炭开采和洗选业", "石油和天然气开采业", "黑色金属矿采选业", "有色金属矿采选业", "非金属矿采选业", "开采辅助活动", "其他采矿业"]);
dsy_zjh.add("0_2", ["食品制造业", "酒、饮料和精制茶制造业", "烟草制品业", "纺织业", "纺织服装、服饰业", "皮革、毛皮、羽毛及其制品和制鞋业", "木材加工和木、竹、藤、棕、草制品业", "家具制造业", "造纸和纸制品业", "印刷和记录媒介复制业", "文教、工美、体育和娱乐用品制造业", "石油加工、炼焦和核燃料加工业", "化学原料和化学制品制造业", "医药制造业", "化学纤维制造业", "橡胶和塑料制品业", "非金属矿物制品业", "黑色金属冶炼和压延加工业", "有色金属冶炼和压延加工业", "金属制品业", "通用设备制造业", "专用设备制造业", "汽车制造业", "铁路、船舶、航空航天和其他运输设备制造业", "电气机械和器材制造业", "计算机、通信和其他电子设备制造业", "仪器仪表制造业", "其他制造业", "废弃资源综合利用业", "金属制品、机械和设备修理业"]);
dsy_zjh.add("0_3", ["电力、热力生产和供应业", "燃气生产和供应业", "水的生产和供应业"]);
dsy_zjh.add("0_4", ["房屋建筑业", "土木工程建筑业", "建筑安装业", "建筑装饰和其他建筑业"]);
dsy_zjh.add("0_5", ["批发业", "零售业"]);
dsy_zjh.add("0_6", ["铁路运输业", "道路运输业", "水上运输业", "航空运输业", "管道运输业", "装卸搬运和运输代理业", "仓储业", "邮政业"]);
dsy_zjh.add("0_7", ["住宿业", "餐饮业"]);
dsy_zjh.add("0_8", ["电信、广播电视和卫星传输服务", "互联网和相关服务", "软件和信息技术服务业"]);
dsy_zjh.add("0_9", ["货币金融服务", "资本市场服务", "保险业", "其他金融业"]);
dsy_zjh.add("0_10", ["房地产业"]);
dsy_zjh.add("0_11", ["租赁业", "商务服务业"]);
dsy_zjh.add("0_12", ["研究和试验发展", "专业技术服务业", "科技推广和应用服务业"]);
dsy_zjh.add("0_13", ["水利管理业", "生态保护和环境治理业", "公共设施管理业"]);
dsy_zjh.add("0_14", ["居民服务业", "机动车、电子产品和日用产品修理业", "其他服务业"]);
dsy_zjh.add("0_15", ["教育"]);
dsy_zjh.add("0_16", ["卫生", "社会工作"]);
dsy_zjh.add("0_17", ["新闻和出版业", "广播、电视、电影和影视录音制作业", "文化艺术业", "体育", "娱乐业"]);
dsy_zjh.add("0_18", ["综合"]);

dsy_zjh.add("0", ["农、林、牧、渔业", "采矿业", "制造业", "电力、热力、燃气及水生产和供应业", "建筑业", "批发和零售业", "交通运输、仓储和邮政业", "住宿和餐饮业", "信息传输、软件和信息技术服务业", "金融业", "房地产业", "租赁和商务服务业", "科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业", "综合"]);

var zjh = ["csrc_type1", "csrc_type2"];


function change_zjh(v) {
    var str = "0";
    for (i = 0; i < v; i++) {
        str += ("_" + (document.getElementById(zjh[i]).selectedIndex - 1));
    }

    var ss = document.getElementById(zjh[v]);
    with (ss) {
        length = 0;
        options[0] = new Option(opt_zjh[v], opt_zjh[v]);
        if (v && document.getElementById(zjh[v - 1]).selectedIndex > 0 || !v) {
            if (dsy_zjh.Exists(str)) {
                ar = dsy_zjh.Items[str];
                for (i = 0; i < ar.length; i++)options[length] = new Option(ar[i], ar[i]);
                if (v)options[0].selected = true;
            }
        }
        if (++v < zjh.length) {
            change_zjh(v);
        }
    }
}
function type_zjh(p_key) {
    var index;

    var provinces = new Array("农、林、牧、渔业", "采矿业", "制造业", "电力、热力、燃气及水生产和供应业", "建筑业", "批发和零售业", "交通运输、仓储和邮政业", "住宿和餐饮业", "信息传输、软件和信息技术服务业", "金融业", "房地产业", "租赁和商务服务业", "科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业", "综合");

    var cnt = provinces.length;
    //alert(cnt);
    for (i = 0; i < cnt; i++) {
        if (p_key == provinces[i]) {
            index = i;
            break;
        }
    }
    if (index < provinces.length) {
        document.getElementById(zjh[0]).selectedIndex = index + 1;
        change_zjh(1);
    }
}

var opt_zjh = ["行业第1级分类", "行业第2级分类"];
function setup_zjh() {
    for (i = 0; i < zjh.length - 1; i++)
        document.getElementById(zjh[i]).onchange = new Function("change_zjh(" + (i + 1) + ");");
    change_zjh(0);
}


var zjh_investors = ["inv_indclass1", "inv_indclass2"];

function change_zjh_investors(v) {
    var str = "0";
    for (i = 0; i < v; i++) {
        str += ("_" + (document.getElementById(zjh_investors[i]).selectedIndex - 1));
    }

    var ss = document.getElementById(zjh_investors[v]);
    with (ss) {
        length = 0;
        options[0] = new Option(opt_zjh[v], opt_zjh[v]);
        if (v && document.getElementById(zjh_investors[v - 1]).selectedIndex > 0 || !v) {
            if (dsy_zjh.Exists(str)) {
                ar = dsy_zjh.Items[str];
                for (i = 0; i < ar.length; i++)options[length] = new Option(ar[i], ar[i]);
                if (v)options[0].selected = true;
            }
        }
        if (++v < zjh_investors.length) {
            change_zjh_investors(v);
        }
    }
}
function type_zjh_investors(p_key) {
    var index;
    var provinces = new Array("农、林、牧、渔业", "采矿业", "制造业", "电力、热力、燃气及水生产和供应业", "建筑业", "批发和零售业", "交通运输、仓储和邮政业", "住宿和餐饮业", "信息传输、软件和信息技术服务业", "金融业", "房地产业", "租赁和商务服务业", "科学研究和技术服务业", "水利、环境和公共设施管理业", "居民服务、修理和其他服务业", "教育", "卫生和社会工作", "文化、体育和娱乐业", "综合");

    var cnt = provinces.length;
    //alert(cnt);
    for (i = 0; i < cnt; i++) {
        if (p_key == provinces[i]) {
            index = i;
            break;
        }
    }
    if (index < provinces.length) {
        document.getElementById(zjh_investors[0]).selectedIndex = index + 1;
        change_zjh_investors(1);
    }
}

function setup_zjh_investors() {
    for (i = 0; i < zjh_investors.length - 1; i++)
        document.getElementById(zjh_investors[i]).onchange = new Function("change_zjh_investors(" + (i + 1) + ");");
    change_zjh_investors(0);
}