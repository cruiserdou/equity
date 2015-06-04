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

function change_cl(v) {
    var str = "0";
    for (i = 0; i < v; i++) { str += ("_" + (document.getElementById(cl[i]).selectedIndex - 1));}

    var ss = document.getElementById(cl[v]);
    with (ss) {
        length = 0;
        options[0] = new Option(opt_cl[v], opt_cl[v]);
        if (v && document.getElementById(cl[v - 1]).selectedIndex > 0 || !v) {
            if (dsy_cl.Exists(str)) {
                ar = dsy_cl.Items[str];
                for (i = 0; i < ar.length; i++)options[length] = new Option(ar[i], ar[i]);
                if (v)options[0].selected = true;
            }
        }
        if (++v < cl.length) {change_cl(v);}
    }
}
function preselect_cl(p_key) {
    //alert(p_key);
    var index;

    var provinces = new Array("农、林、牧、渔业", "采矿业","制造业");
    var cnt = provinces.length;
    //alert(cnt);
    for (i = 0; i < cnt; i++) {
        if (p_key == provinces[i]) {
            index = i;
            break;
        }
    }
    if (index < provinces.length) {
        document.getElementById(cl[0]).selectedIndex = index + 1;
        change_cl(1);
    }
}

var dsy_cl = new Dsy();
dsy_cl.add("0_0", ["农业", "林业", "畜牧业","渔业","农、林、牧、渔服务业"]);
dsy_cl.add("0_0_0", ["谷物及其他作物的种植", "蔬菜、园艺作物的种植", "水果、坚果、饮料和香料作物的种植", "中药材的种植"]);
dsy_cl.add("0_0_0_0",["谷物的种植"," 薯类的种植","油料的种植","豆类的种植","棉花的种植","麻类的种植","糖料的种植","烟草的种植","其他作物的种植"]);
dsy_cl.add("0_0_0_1", ["蔬菜的种植", "花卉的种植", "其他园艺作物的种植"]);
dsy_cl.add("0_0_0_2", ["水果、坚果的种植","茶及其他饮料作物的种植","香料作物的种植"]);
dsy_cl.add("0_0_1", ["林木的培育和种植", "木材和竹材的采运", "林产品的采集"]);
dsy_cl.add("0_0_1_0",["育种和育苗","造林","林木的抚育和管理"]);
dsy_cl.add("0_0_1_1",["木材的采运","竹材的采运"]);
dsy_cl.add("0_0_2", ["牲畜的饲养","猪的饲养","家禽的饲养","狩猎和捕捉动物","其他畜牧业"]);
dsy_cl.add("0_0_3", ["海洋渔业","内陆渔业"]);
dsy_cl.add("0_0_3_0",["海水养殖","海洋捕捞"]);
dsy_cl.add("0_0_3_1",["内陆养殖","内陆捕捞"]);
dsy_cl.add("0_0_4", ["农业服务业","林业服务业","畜牧服务业","渔业服务业"]);
dsy_cl.add("0_0_4_0",["灌溉服务","农产品初加工服务","其他农业服务"]);
dsy_cl.add("0_0_4_2",["兽医服务","其他畜牧服务"]);

dsy_cl.add("0_1_0", ["烟煤和无烟煤的开采洗选", "其他煤炭采选"]);
dsy_cl.add("0_1_1", ["天然原油和天然气开采", "与石油和天然气开采有关的服务活动"]);
dsy_cl.add("0_1", ["煤炭开采和洗选业", "石油和天然气开采业"]);

dsy_cl.add("0_2_0", ["谷物磨制", "饲料加工","植物油加工"]);
dsy_cl.add("0_2_0_0", ["食用植物油加工","非食用植物油加工"]);
dsy_cl.add("0_2_1", ["天然原油和天然气开采", "与石油和天然气开采有关的服务活动"]);
dsy_cl.add("0_2_2", ["天然原油和天然气开采", "与石油和天然气开采有关的服务活动"]);
dsy_cl.add("0_2", ["农副食品加工业", "食品制造业","制造业"]);






dsy_cl.add("0", ["农、林、牧、渔业", "采矿业","制造业"]);

var cl = ["cl1", "cl2", "cl3","cl4"];
var opt_cl = ["行业第1级分类", "行业第2级分类", "行业第3级分类", "行业第4级分类"];
function setup_cl() {
    for (i = 0; i < cl.length - 1; i++)
        document.getElementById(cl[i]).onchange = new Function("change_cl(" + (i + 1) + ");");
    change_cl(0);
}
