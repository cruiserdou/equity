id serial NOT NULL, -- 消息ID
buslicno character varying(100), -- 营业执照号码
name character varying(100), -- 企业名称
unit character varying(100), -- 单位类别
legrep character varying(100), -- 法定代表人
region character varying(100), -- 地域
nos character varying(100), -- 公司简称
postal character varying(100), -- 邮政编码
nature character varying(100), -- 企业性质
regcap character varying(100), -- 注册资本（万元）
bustermfdt date, -- 营业期限自
bustremtdt date, -- 营业期限至
regdt date, -- 注册日期
listcode character varying(100), -- 挂牌代码
regaddr character varying(100), -- 注册地址
offaddr character varying(100), -- 办公地址
listprice character varying(100), -- 挂牌价格
staffnum character varying(100), -- 员工人数
scope text, -- 经营范围
mbus text, -- 主营业务
eprofile text, -- 企业简介
phoinf character varying(100), -- 企业照片资料
post character varying(100), -- 职务
doctype character varying(100), -- 证件类型
contact character varying(20), -- 姓名
docnum character varying(20), -- 证件号码
phone character varying(20), -- 手机
fax character varying(20), -- 传真
email character varying(20), -- E-mail
qq character varying(20), -- QQ
indclass1 character varying(20), -- 行业一级分类
indclass2 character varying(20), -- 行业二级分类
indclass3 character varying(20), -- 行业三级分类
indclass4 character varying(20), -- 行业四级分类
esource character varying(20), -- 企业来源
referee character varying(20), -- 推荐人
esourcedesc character varying(20), -- 企业来源详情
recomdt date, -- 推荐日期
emaint character varying(20), -- 企业维护人
trusteeship character varying(20), -- 托管状态
listst character varying(20), -- 挂牌状态
eclass character varying(20), -- 企业等级
maintain character varying(100), -- 企业维护状态
reserve character varying(20), -- 所属后备库
contacter character varying(20), -- 联系人
dept character varying(20), -- 部门
psotion character varying(100), -- 职务
edoctype character varying(20), -- 证件类型
edocnum character varying(50), -- 证件号码
etel character varying(20), -- 固定电话
ephone character varying(20), -- 手机号码
efax character varying(20), -- 传真
eemail character varying(100), -- E-mail
eqq character varying(20), -- QQ
remark text, -- 备注
province character varying(20), -- 省
city character varying(20), -- 市
county character varying(20), -- 县
inputdt timestamp without time zone, -- 时间
webchat character varying(100), -- 微信号
bz text, -- 联系人备注
refer character varying(100), -- 推荐人
channels character varying(100), -- 推荐渠道
listdt date, -- 挂牌日期
list_contrib character varying(100), -- 挂牌出资（元/元出资.股）
csrc_type character varying(100), -- 证监会行业分类
changer_id integer, -- 修改人
changer_dt timestamp without time zone, -- 修改日期
changer_ip character varying(20), -- 修改IP
regist_organ character varying(200), -- 登记机关
csrc_type2 character varying(20), -- 证监会行业分类2
csrc_type3 character varying(20), -- 证监会行业分类3
csrc_type4 character varying(20), -- 证监会行业分类4
rz_charge character varying(20), -- 融资负责人
wh_charge character varying(20), -- 维护负责人
list_area character varying(20), -- 挂牌区域
webchat_gr character varying(20), -- 个人微信号
tel_gr character varying(15), -- 联系人固话
bz_gr text, -- 备注（个人）
type_server boolean DEFAULT false, -- 服务机构
type_investors boolean DEFAULT false, -- 投资人
type_govermt boolean DEFAULT false, -- 政府机构
demand_rz boolean DEFAULT false, -- 融资需求
demand_px boolean DEFAULT false, -- 培训需求
demand_rl boolean DEFAULT false, -- 人力需求
type_enterp boolean DEFAULT true, -- 一般企业
id serial NOT NULL, -- ID
enterprise_id integer NOT NULL, -- 企业ID
start_time timestamp without time zone, -- 时间start
end_time timestamp without time zone, -- 时间end
st_money_fund numeric(10,2), -- 货币资金start
end_money_fund numeric(10,2), -- 货币资金end
st_jyxjr_assets numeric(10,2), -- 交易性金融资产start
end_jyxjr_assets numeric(10,2), -- 交易性金融资产end
st_ys_bill numeric(10,2), -- 应收票据start
end_ys_bill numeric(10,2), -- 应收票据end
st_ys_account numeric(10,2), -- 应收账款start
end_ys_account numeric(10,2), -- 应收账款end
st_yf_money numeric(10,2), -- 预付款项start
end_yf_money numeric(10,2), -- 预付款项end
st_ys_interest numeric(10,2), -- 应收利息start
end_ys_interest numeric(10,2), -- 应收利息end
st_ys_dividends numeric(10,2), -- 应收股利start
end_ys_dividends numeric(10,2), -- 应收股利end
st_other_ys_money numeric(10,2), -- 其他应收款start
end_other_ys_money numeric(10,2), -- 其他应收款end
st_inventory numeric(10,2), -- 存货start
end_inventory numeric(10,2), -- 存货end
st_ynndq_no_assets numeric(10,2), -- 一年内到期的非流动资产start
end_ynndq_no_assets numeric(10,2), -- 一年内到期的非流动资产end
st_other_assets numeric(10,2), -- 其他流动资产start
end_other_assets numeric(10,2), -- 其他流动资产end
st_hj_assets numeric(10,2), -- 流动资产合计start
end_hj_assets numeric(10,2), -- 流动资产合计end
st_kgcs_assets numeric(10,2), -- 可供出售金融资产start
end_kgcs_assets numeric(10,2), -- 可供出售金融资产end
st_cyzdq_investment numeric(10,2), -- 持有至到期投资start
end_cyzdq_investment numeric(10,2), -- 持有至到期投资end
st_long_ys_money numeric(10,2), -- 长期应收款start
end_long_ys_money numeric(10,2), -- 长期应收款end
st_long_gq_investment numeric(10,2), -- 长期股权投资start
end_long_gq_investment numeric(10,2), -- 长期股权投资end
st_invest_house numeric(10,2), -- 投资性房地产start
end_invest_house numeric(10,2), -- 投资性房地产end
st_gd_assets numeric(10,2), -- 固定资产start
end_gd_assets numeric(10,2), -- 固定资产end
st_accu_deprec numeric(10,2), -- 减：累计折旧start
end_accu_deprec numeric(10,2), -- 减：累计折旧end
st_gd_assets_jz numeric(10,2), -- 固定资产净值start
end_gd_assets_jz numeric(10,2), -- 固定资产净值end
st_gd_assets_ready numeric(10,2), -- 减：固定资产减值准备start
end_gd_assets_ready numeric(10,2), -- 减：固定资产减值准备end
st_gd_assets_je numeric(10,2), -- 固定资产净额start
end_gd_assets_je numeric(10,2), -- 固定资产净额end
st_now_project numeric(10,2), -- 在建工程start
end_now_project numeric(10,2), -- 在建工程end
st_project_material numeric(10,2), -- 工程物资start
end_project_material numeric(10,2), -- 工程物资end
st_gd_assets_ql numeric(10,2), -- 固定资产清理start
end_gd_assets_ql numeric(10,2), -- 固定资产清理end
st_scx_investment numeric(10,2), -- 生产性生物投资start
end_scx_investment numeric(10,2), -- 生产性生物投资end
st_wx_assets numeric(10,2), -- 无形资产start
end_wx_assets numeric(10,2), -- 无形资产end
st_goodwill numeric(10,2), -- 商誉start
end_goodwill numeric(10,2), -- 商誉end
st_cqdt_cost numeric(10,2), -- 长期待摊费用start
end_cqdt_cost numeric(10,2), -- 长期待摊费用end
st_dysds_assets numeric(10,2), -- 递延所得税资产start
end_dysds_assets numeric(10,2), -- 递延所得税资产end
st_other_no_assets numeric(10,2), -- 其他非流动资产start
end_other_no_assets numeric(10,2), -- 其他非流动资产end
st_hj_no_asset numeric(10,2), -- 非流动资产合计start
end_hj_no_asset numeric(10,2), -- 非流动资产合计end
st_hj_total_asset numeric(10,2), -- 资产总计start
end_hj_total_asset numeric(10,2), -- 资产总计end
st_short_borrow numeric(10,2), -- 短期借款start
end_short_borrow numeric(10,2), -- 短期借款end
st_jyx_finance_fz numeric(10,2), -- 交易性金融负债start
end_jyx_finance_fz numeric(10,2), -- 交易性金融负债end
st_yf_bill numeric(10,2), -- 应付票据start
end_yf_bill numeric(10,2), -- 应付票据end
st_yf_account numeric(10,2), -- 应付账款start
end_yf_account numeric(10,2), -- 应付账款end
st_ys_money numeric(10,2), -- 预收款项start
end_ys_money numeric(10,2), -- 预收款项end
st_yf_staff_pay numeric(10,2), -- 应付职工薪酬start
end_yf_staff_pay numeric(10,2), -- 应付职工薪酬end
st_yj_tax numeric(10,2), -- 应交税费start
end_yj_tax numeric(10,2), -- 应交税费end
st_yf_interest numeric(10,2), -- 应付利息start
end_yf_interest numeric(10,2), -- 应付利息end
st_yf_dividends numeric(10,2), -- 应付股利start
end_yf_dividends numeric(10,2), -- 应付股利end
st_other_yf_money numeric(10,2), -- 其他应付款start
end_other_yf_money numeric(10,2), -- 其他应付款end
st_ynndq_no_fz numeric(10,2), -- 一年内到期的非流动负债start
end_ynndq_no_fz numeric(10,2), -- 一年内到期的非流动负债end
st_other_fz numeric(10,2), -- 其他流动负债start
end_other_fz numeric(10,2), -- 其他流动负债end
st_hj_fz numeric(10,2), -- 流动负债合计start
end_hj_fz numeric(10,2), -- 流动负债合计end
st_long_borrow numeric(10,2), -- 长期借款start
end_long_borrow numeric(10,2), -- 长期借款end
st_yf_bond numeric(10,2), -- 应付债券start
end_yf_bond numeric(10,2), -- 应付债券end
st_long_yf_money numeric(10,2), -- 长期应付款start
end_long_yf_money numeric(10,2), -- 长期应付款end
st_zx_yf_money numeric(10,2), -- 专项应付款start
end_zx_yf_money numeric(10,2), -- 专项应付款end
st_yj_fz numeric(10,2), -- 预计负债start
end_yj_fz numeric(10,2), -- 预计负债end
st_dysds_fz numeric(10,2), -- 递延所得税负债start
end_dysds_fz numeric(10,2), -- 递延所得税负债end
st_other_no_fz numeric(10,2), -- 其他非流动负债start
end_other_no_fz numeric(10,2), -- 其他非流动负债end
st_hj_no_fz numeric(10,2), -- 非流动负债合计start
end_hj_no_fz numeric(10,2), -- 非流动负债合计end
st_hj_total_fz numeric(10,2), -- 负债合计start
end_hj_total_fz numeric(10,2), -- 负债合计end
st_paid_assets numeric(10,2), -- 实收资本（或股本）start
end_paid_assets numeric(10,2), -- 实收资本（或股本）end
st_zb_reserve numeric(10,2), -- 资本公积start
end_zb_reserve numeric(10,2), -- 资本公积end
st_kc_stock numeric(10,2), -- 减：库存股start
end_kc_stock numeric(10,2), -- 减：库存股end
st_zx_reserve numeric(10,2), -- 专项储备start
end_zx_reserve numeric(10,2), -- 专项储备end
st_yy_reserve numeric(10,2), -- 盈余公积start
end_yy_reserve numeric(10,2), -- 盈余公积end
st_wfp_profit numeric(10,2), -- 未分配利润start
end_wfp_profit numeric(10,2), -- 未分配利润end
st_hj_owner_right numeric(10,2), -- 所有者权益合计start
end_hj_owner_right numeric(10,2), -- 所有者权益合计end
st_hj_fz_owner_right numeric(10,2), -- 负债和所有者权益合计start
end_hj_fz_owner_right numeric(10,2), -- 负债和所有者权益合计end
id serial NOT NULL, -- 投资人ID
inv_nos character varying(20), -- 编号
inv_domain text, -- 投资领域
inv_csrc_type1 character varying(20), -- 证监会行业分类1
inv_csrc_type2 character varying(20), -- 证监会行业分类2
inv_csrc_type3 character varying(20), -- 证监会行业分类3
inv_csrc_type4 character varying(20), -- 证监会行业分类4
inv_indclass1 character varying(20), -- 行业一级分类
inv_indclass2 character varying(20), -- 行业二级分类
inv_indclass3 character varying(20), -- 行业三级分类
inv_indclass4 character varying(20), -- 行业四级分类
inv_contacter character varying(20), -- 联系人
inv_psotion character varying(100), -- 职务
inv_edoctype character varying(20), -- 证件类型
inv_edocnum character varying(50), -- 证件号码
inv_tel character varying(20), -- 固定电话
inv_ephone character varying(20), -- 手机号码
inv_efax character varying(20), -- 传真
inv_eemail character varying(100), -- E-mail
inv_eqq character varying(20), -- QQ
inv_webchat_gr character varying(20), -- 个人微信号
inv_remark text, -- 备注
enterprise_id integer, -- 企业ID
id serial NOT NULL, -- 服务机构ID
nos character varying(20), -- 编号
name character varying(50), -- 服务机构名称
type character varying(50), -- 服务机构类别
content text, -- 业务内容
levels character varying(50), -- 级别
descs text, -- 简介
domain text, -- 领域
penalty text, -- 惩罚记录
remark text, -- 备注
enterprise_id integer, -- 企业ID
b_examiner boolean, -- 专审委员
part_post character varying(50), -- 兼任职务