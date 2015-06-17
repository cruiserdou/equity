-- Table: work.tb_enterprise

-- DROP TABLE work.tb_enterprise;

CREATE TABLE work.tb_enterprise
(
  id serial NOT NULL, -- 企业ID
  buslicno character varying(100), -- 营业执照号码
  name character varying(200), -- 企业名称
  unit character varying(100), -- 单位类别
  legrep character varying(100), -- 法定代表人
  province character varying(20), -- 省
  city character varying(20), -- 市
  county character varying(20), -- 县
  nos character varying(100), -- 公司简称
  postal character varying(100), -- 邮政编码
  nature character varying(100), -- 企业性质
  regcap character varying(100), -- 注册资本（万元）
  bustermfdt date, -- 营业期限自
  bustremtdt date, -- 营业期限至
  regdt date, -- 注册日期
  list_area character varying(20), -- 挂牌区域
  listcode character varying(100), -- 挂牌代码
  listprice character varying(100), -- 挂牌出资（元/元出资.股）
  listdt date, -- 挂牌日期
  channels character varying(100), -- 推荐单位
  webchat character varying(100), -- 微信号
  staffnum character varying(100), -- 员工人数
  regist_organ character varying(200), -- 登记机关
  regaddr text, -- 注册地址
  offaddr text, -- 办公地址
  scope text, -- 经营范围
  mbus text, -- 主营业务
  eprofile text, -- 企业简介
  phoinf character varying(100), -- 企业照片资料
  remark text, -- 备注
  gr_contact character varying(20), -- 姓名
  gr_psotion character varying(50), -- 职务
  gr_edoctype character varying(20), -- 证件类型
  gr_edocnum character varying(50), -- 证件号码
  gr_ephone character varying(20), -- 手机号码
  gr_efax character varying(20), -- 传真
  gr_eemail character varying(100), -- E-mail
  gr_eqq character varying(20), -- QQ
  gr_webchat character varying(20), -- 个人微信号
  gr_tel character varying(20), -- 联系人固话
  gr_bz text, -- 备注（个人）
  indclass1 character varying(20), -- 行业一级分类
  indclass2 character varying(20), -- 行业二级分类
  indclass3 character varying(20), -- 行业三级分类
  indclass4 character varying(20), -- 行业四级分类
  csrc_type1 character varying(20), -- 证监会行业分类
  csrc_type2 character varying(20), -- 证监会行业分类2
  csrc_type3 character varying(20), -- 证监会行业分类3
  csrc_type4 character varying(20), -- 证监会行业分类4
  changer_id integer, -- 更新人
  changer_dt timestamp without time zone, -- 更新日期
  changer_dept character varying(200), -- 更新单位
  recomdt date, -- 推荐日期
  trusteeship character varying(20), -- 托管状态
  listst character varying(20), -- 挂牌状态
  eclass character varying(20), -- 企业等级
  maintain character varying(20), -- 企业维护状态
  reserve character varying(20), -- 所属后备库
  emaint character varying(20), -- 企业接待人
  dept character varying(20), -- 部门
  post character varying(100), -- 职务
  tel character varying(20), -- 固定电话
  phone character varying(20), -- 手机
  fax character varying(20), -- 传真
  email character varying(20), -- E-mail
  qq character varying(20), -- QQ
  webchat_wh character varying(100), -- 微信号
  bz_wh text, -- 联系人备注
  type_enterp boolean DEFAULT true, -- 一般企业
  type_server boolean DEFAULT false, -- 服务机构
  type_investors boolean DEFAULT false, -- 投资人
  type_govermt boolean DEFAULT false, -- 政府机构
  demand_rz boolean DEFAULT false, -- 融资需求
  demand_px boolean DEFAULT false, -- 培训需求
  demand_rl boolean DEFAULT false, -- 人力需求
  inputdt timestamp without time zone, -- 录入时间
  start_time date, -- 时间start
  end_time date, -- 时间end
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
  server_name character varying(200), -- 服务机构名称
  server_type character varying(100), -- 服务机构类别
  server_content text, -- 业务内容
  server_levels character varying(50), -- 级别
  server_domain text, -- 专属领域
  server_penalty text, -- 惩罚记录
  server_examiner boolean, -- 专审委员
  server_post character varying(50), -- 兼任职务
  server_descs text, -- 简介
  server_remark text, -- 备注
  inv_domain text, -- 投资领域
  inv_csrc_type1 character varying(20), -- 证监会行业分类1
  inv_csrc_type2 character varying(20), -- 证监会行业分类2
  inv_csrc_type3 character varying(20), -- 证监会行业分类3
  inv_csrc_type4 character varying(20), -- 证监会行业分类4
  inv_indclass1 character varying(20), -- 行业一级分类
  inv_indclass2 character varying(20), -- 行业二级分类
  inv_indclass3 character varying(20), -- 行业三级分类
  inv_indclass4 character varying(20), -- 行业四级分类
  inv_contact character varying(20), -- 联系人
  inv_psotion character varying(100), -- 职务
  inv_doctype character varying(20), -- 证件类型
  inv_docnum character varying(50), -- 证件号码
  inv_phone character varying(20), -- 手机号码
  inv_fax character varying(20), -- 传真
  inv_email character varying(100), -- E-mail
  inv_qq character varying(20), -- QQ
  inv_webchat character varying(20), -- 个人微信号
  inv_tel character varying(20), -- 固定电话
  inv_remark text, -- 备注
  gov_domain text, -- 单位名称
  gov_office character varying(20), -- 处/室
  gov_desc text, -- 职能介绍
  gov_contact character varying(20), -- 联系人
  gov_psotion character varying(100), -- 职务
  gov_doctype character varying(20), -- 证件类型
  gov_docnum character varying(50), -- 证件号码
  gov_phone character varying(20), -- 手机号码
  gov_fax character varying(20), -- 传真
  gov_email character varying(100), -- E-mail
  gov_qq character varying(20), -- QQ
  gov_webchat character varying(20), -- 个人微信号
  gov_tel character varying(20), -- 固定电话
  gov_remark text, -- 备注
  rz_amounts numeric(10,2), -- 融资金额
  rz_use text, -- 融资用途
  rz_financ numeric(10,2), -- 股份融资/债券融资
  rz_security text, -- 偿付保障
  rz_acc_cost numeric(10,2), -- 可接受成本（%/年）
  rz_deadline date, -- 融资期限
  rz_desc text, -- 融资用途详细说明
  px_mode character varying(50), -- 培训方式
  px_content text, -- 培训内容
  px_acc_cost numeric(10,2), -- 可接受成本
  px_dt date, -- 有效时间
  px_requests text, -- 详细要求
  hr_post character varying(50), -- 需求职位
  hr_num integer, -- 职位人数
  hr_salary numeric(10,2), -- 职位薪金
  hr_sex_req text, -- 性别要求
  hr_age_req character varying(20), -- 年龄要求
  hr_requests text, -- 经验要求
  CONSTRAINT pk_enterprise PRIMARY KEY (id)
)
WITH (
OIDS=FALSE
);
ALTER TABLE work.tb_enterprise
OWNER TO postgres;
COMMENT ON TABLE work.tb_enterprise
IS '企业信息表';
COMMENT ON COLUMN work.tb_enterprise.id IS '企业ID';
COMMENT ON COLUMN work.tb_enterprise.buslicno IS '营业执照号码';
COMMENT ON COLUMN work.tb_enterprise.name IS '企业名称';
COMMENT ON COLUMN work.tb_enterprise.unit IS '单位类别';
COMMENT ON COLUMN work.tb_enterprise.legrep IS '法定代表人';
COMMENT ON COLUMN work.tb_enterprise.province IS '省';
COMMENT ON COLUMN work.tb_enterprise.city IS '市';
COMMENT ON COLUMN work.tb_enterprise.county IS '县';
COMMENT ON COLUMN work.tb_enterprise.nos IS '公司简称';
COMMENT ON COLUMN work.tb_enterprise.postal IS '邮政编码';
COMMENT ON COLUMN work.tb_enterprise.nature IS '企业性质';
COMMENT ON COLUMN work.tb_enterprise.regcap IS '注册资本（万元）';
COMMENT ON COLUMN work.tb_enterprise.bustermfdt IS '营业期限自';
COMMENT ON COLUMN work.tb_enterprise.bustremtdt IS '营业期限至';
COMMENT ON COLUMN work.tb_enterprise.regdt IS '注册日期';
COMMENT ON COLUMN work.tb_enterprise.list_area IS '挂牌区域';
COMMENT ON COLUMN work.tb_enterprise.listcode IS '挂牌代码';
COMMENT ON COLUMN work.tb_enterprise.listprice IS '挂牌出资（元/元出资.股）';
COMMENT ON COLUMN work.tb_enterprise.listdt IS '挂牌日期';
COMMENT ON COLUMN work.tb_enterprise.channels IS '推荐单位';
COMMENT ON COLUMN work.tb_enterprise.webchat IS '微信号';
COMMENT ON COLUMN work.tb_enterprise.staffnum IS '员工人数';
COMMENT ON COLUMN work.tb_enterprise.regist_organ IS '登记机关';
COMMENT ON COLUMN work.tb_enterprise.regaddr IS '注册地址';
COMMENT ON COLUMN work.tb_enterprise.offaddr IS '办公地址';
COMMENT ON COLUMN work.tb_enterprise.scope IS '经营范围';
COMMENT ON COLUMN work.tb_enterprise.mbus IS '主营业务';
COMMENT ON COLUMN work.tb_enterprise.eprofile IS '企业简介';
COMMENT ON COLUMN work.tb_enterprise.phoinf IS '企业照片资料';
COMMENT ON COLUMN work.tb_enterprise.remark IS '备注';
COMMENT ON COLUMN work.tb_enterprise.gr_contact IS '姓名';
COMMENT ON COLUMN work.tb_enterprise.gr_psotion IS '职务';
COMMENT ON COLUMN work.tb_enterprise.gr_edoctype IS '证件类型';
COMMENT ON COLUMN work.tb_enterprise.gr_edocnum IS '证件号码';
COMMENT ON COLUMN work.tb_enterprise.gr_ephone IS '手机号码';
COMMENT ON COLUMN work.tb_enterprise.gr_efax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.gr_eemail IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.gr_eqq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.gr_webchat IS '个人微信号';
COMMENT ON COLUMN work.tb_enterprise.gr_tel IS '联系人固话';
COMMENT ON COLUMN work.tb_enterprise.gr_bz IS '备注（个人）';
COMMENT ON COLUMN work.tb_enterprise.indclass1 IS '行业一级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass2 IS '行业二级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass3 IS '行业三级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass4 IS '行业四级分类';
COMMENT ON COLUMN work.tb_enterprise.csrc_type1 IS '证监会行业分类';
COMMENT ON COLUMN work.tb_enterprise.csrc_type2 IS '证监会行业分类2';
COMMENT ON COLUMN work.tb_enterprise.csrc_type3 IS '证监会行业分类3';
COMMENT ON COLUMN work.tb_enterprise.csrc_type4 IS '证监会行业分类4';
COMMENT ON COLUMN work.tb_enterprise.changer_id IS '更新人';
COMMENT ON COLUMN work.tb_enterprise.changer_dt IS '更新日期';
COMMENT ON COLUMN work.tb_enterprise.changer_dept IS '更新单位';
COMMENT ON COLUMN work.tb_enterprise.recomdt IS '推荐日期';
COMMENT ON COLUMN work.tb_enterprise.trusteeship IS '托管状态';
COMMENT ON COLUMN work.tb_enterprise.listst IS '挂牌状态';
COMMENT ON COLUMN work.tb_enterprise.eclass IS '企业等级';
COMMENT ON COLUMN work.tb_enterprise.maintain IS '企业维护状态';
COMMENT ON COLUMN work.tb_enterprise.reserve IS '所属后备库';
COMMENT ON COLUMN work.tb_enterprise.emaint IS '企业接待人';
COMMENT ON COLUMN work.tb_enterprise.dept IS '部门';
COMMENT ON COLUMN work.tb_enterprise.post IS '职务';
COMMENT ON COLUMN work.tb_enterprise.tel IS '固定电话';
COMMENT ON COLUMN work.tb_enterprise.phone IS '手机';
COMMENT ON COLUMN work.tb_enterprise.fax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.email IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.qq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.webchat_wh IS '微信号';
COMMENT ON COLUMN work.tb_enterprise.bz_wh IS '联系人备注';
COMMENT ON COLUMN work.tb_enterprise.type_enterp IS '一般企业';
COMMENT ON COLUMN work.tb_enterprise.type_server IS '服务机构';
COMMENT ON COLUMN work.tb_enterprise.type_investors IS '投资人';
COMMENT ON COLUMN work.tb_enterprise.type_govermt IS '政府机构';
COMMENT ON COLUMN work.tb_enterprise.demand_rz IS '融资需求';
COMMENT ON COLUMN work.tb_enterprise.demand_px IS '培训需求';
COMMENT ON COLUMN work.tb_enterprise.demand_rl IS '人力需求';
COMMENT ON COLUMN work.tb_enterprise.inputdt IS '录入时间';
COMMENT ON COLUMN work.tb_enterprise.start_time IS '时间start';
COMMENT ON COLUMN work.tb_enterprise.end_time IS '时间end';
COMMENT ON COLUMN work.tb_enterprise.st_money_fund IS '货币资金start';
COMMENT ON COLUMN work.tb_enterprise.end_money_fund IS '货币资金end';
COMMENT ON COLUMN work.tb_enterprise.st_jyxjr_assets IS '交易性金融资产start';
COMMENT ON COLUMN work.tb_enterprise.end_jyxjr_assets IS '交易性金融资产end';
COMMENT ON COLUMN work.tb_enterprise.st_ys_bill IS '应收票据start';
COMMENT ON COLUMN work.tb_enterprise.end_ys_bill IS '应收票据end';
COMMENT ON COLUMN work.tb_enterprise.st_ys_account IS '应收账款start';
COMMENT ON COLUMN work.tb_enterprise.end_ys_account IS '应收账款end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_money IS '预付款项start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_money IS '预付款项end';
COMMENT ON COLUMN work.tb_enterprise.st_ys_interest IS '应收利息start';
COMMENT ON COLUMN work.tb_enterprise.end_ys_interest IS '应收利息end';
COMMENT ON COLUMN work.tb_enterprise.st_ys_dividends IS '应收股利start';
COMMENT ON COLUMN work.tb_enterprise.end_ys_dividends IS '应收股利end';
COMMENT ON COLUMN work.tb_enterprise.st_other_ys_money IS '其他应收款start';
COMMENT ON COLUMN work.tb_enterprise.end_other_ys_money IS '其他应收款end';
COMMENT ON COLUMN work.tb_enterprise.st_inventory IS '存货start';
COMMENT ON COLUMN work.tb_enterprise.end_inventory IS '存货end';
COMMENT ON COLUMN work.tb_enterprise.st_ynndq_no_assets IS '一年内到期的非流动资产start';
COMMENT ON COLUMN work.tb_enterprise.end_ynndq_no_assets IS '一年内到期的非流动资产end';
COMMENT ON COLUMN work.tb_enterprise.st_other_assets IS '其他流动资产start';
COMMENT ON COLUMN work.tb_enterprise.end_other_assets IS '其他流动资产end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_assets IS '流动资产合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_assets IS '流动资产合计end';
COMMENT ON COLUMN work.tb_enterprise.st_kgcs_assets IS '可供出售金融资产start';
COMMENT ON COLUMN work.tb_enterprise.end_kgcs_assets IS '可供出售金融资产end';
COMMENT ON COLUMN work.tb_enterprise.st_cyzdq_investment IS '持有至到期投资start';
COMMENT ON COLUMN work.tb_enterprise.end_cyzdq_investment IS '持有至到期投资end';
COMMENT ON COLUMN work.tb_enterprise.st_long_ys_money IS '长期应收款start';
COMMENT ON COLUMN work.tb_enterprise.end_long_ys_money IS '长期应收款end';
COMMENT ON COLUMN work.tb_enterprise.st_long_gq_investment IS '长期股权投资start';
COMMENT ON COLUMN work.tb_enterprise.end_long_gq_investment IS '长期股权投资end';
COMMENT ON COLUMN work.tb_enterprise.st_invest_house IS '投资性房地产start';
COMMENT ON COLUMN work.tb_enterprise.end_invest_house IS '投资性房地产end';
COMMENT ON COLUMN work.tb_enterprise.st_gd_assets IS '固定资产start';
COMMENT ON COLUMN work.tb_enterprise.end_gd_assets IS '固定资产end';
COMMENT ON COLUMN work.tb_enterprise.st_accu_deprec IS '减：累计折旧start';
COMMENT ON COLUMN work.tb_enterprise.end_accu_deprec IS '减：累计折旧end';
COMMENT ON COLUMN work.tb_enterprise.st_gd_assets_jz IS '固定资产净值start';
COMMENT ON COLUMN work.tb_enterprise.end_gd_assets_jz IS '固定资产净值end';
COMMENT ON COLUMN work.tb_enterprise.st_gd_assets_ready IS '减：固定资产减值准备start';
COMMENT ON COLUMN work.tb_enterprise.end_gd_assets_ready IS '减：固定资产减值准备end';
COMMENT ON COLUMN work.tb_enterprise.st_gd_assets_je IS '固定资产净额start';
COMMENT ON COLUMN work.tb_enterprise.end_gd_assets_je IS '固定资产净额end';
COMMENT ON COLUMN work.tb_enterprise.st_now_project IS '在建工程start';
COMMENT ON COLUMN work.tb_enterprise.end_now_project IS '在建工程end';
COMMENT ON COLUMN work.tb_enterprise.st_project_material IS '工程物资start';
COMMENT ON COLUMN work.tb_enterprise.end_project_material IS '工程物资end';
COMMENT ON COLUMN work.tb_enterprise.st_gd_assets_ql IS '固定资产清理start';
COMMENT ON COLUMN work.tb_enterprise.end_gd_assets_ql IS '固定资产清理end';
COMMENT ON COLUMN work.tb_enterprise.st_scx_investment IS '生产性生物投资start';
COMMENT ON COLUMN work.tb_enterprise.end_scx_investment IS '生产性生物投资end';
COMMENT ON COLUMN work.tb_enterprise.st_wx_assets IS '无形资产start';
COMMENT ON COLUMN work.tb_enterprise.end_wx_assets IS '无形资产end';
COMMENT ON COLUMN work.tb_enterprise.st_goodwill IS '商誉start';
COMMENT ON COLUMN work.tb_enterprise.end_goodwill IS '商誉end';
COMMENT ON COLUMN work.tb_enterprise.st_cqdt_cost IS '长期待摊费用start';
COMMENT ON COLUMN work.tb_enterprise.end_cqdt_cost IS '长期待摊费用end';
COMMENT ON COLUMN work.tb_enterprise.st_dysds_assets IS '递延所得税资产start';
COMMENT ON COLUMN work.tb_enterprise.end_dysds_assets IS '递延所得税资产end';
COMMENT ON COLUMN work.tb_enterprise.st_other_no_assets IS '其他非流动资产start';
COMMENT ON COLUMN work.tb_enterprise.end_other_no_assets IS '其他非流动资产end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_no_asset IS '非流动资产合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_no_asset IS '非流动资产合计end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_total_asset IS '资产总计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_total_asset IS '资产总计end';
COMMENT ON COLUMN work.tb_enterprise.st_short_borrow IS '短期借款start';
COMMENT ON COLUMN work.tb_enterprise.end_short_borrow IS '短期借款end';
COMMENT ON COLUMN work.tb_enterprise.st_jyx_finance_fz IS '交易性金融负债start';
COMMENT ON COLUMN work.tb_enterprise.end_jyx_finance_fz IS '交易性金融负债end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_bill IS '应付票据start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_bill IS '应付票据end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_account IS '应付账款start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_account IS '应付账款end';
COMMENT ON COLUMN work.tb_enterprise.st_ys_money IS '预收款项start';
COMMENT ON COLUMN work.tb_enterprise.end_ys_money IS '预收款项end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_staff_pay IS '应付职工薪酬start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_staff_pay IS '应付职工薪酬end';
COMMENT ON COLUMN work.tb_enterprise.st_yj_tax IS '应交税费start';
COMMENT ON COLUMN work.tb_enterprise.end_yj_tax IS '应交税费end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_interest IS '应付利息start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_interest IS '应付利息end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_dividends IS '应付股利start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_dividends IS '应付股利end';
COMMENT ON COLUMN work.tb_enterprise.st_other_yf_money IS '其他应付款start';
COMMENT ON COLUMN work.tb_enterprise.end_other_yf_money IS '其他应付款end';
COMMENT ON COLUMN work.tb_enterprise.st_ynndq_no_fz IS '一年内到期的非流动负债start';
COMMENT ON COLUMN work.tb_enterprise.end_ynndq_no_fz IS '一年内到期的非流动负债end';
COMMENT ON COLUMN work.tb_enterprise.st_other_fz IS '其他流动负债start';
COMMENT ON COLUMN work.tb_enterprise.end_other_fz IS '其他流动负债end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_fz IS '流动负债合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_fz IS '流动负债合计end';
COMMENT ON COLUMN work.tb_enterprise.st_long_borrow IS '长期借款start';
COMMENT ON COLUMN work.tb_enterprise.end_long_borrow IS '长期借款end';
COMMENT ON COLUMN work.tb_enterprise.st_yf_bond IS '应付债券start';
COMMENT ON COLUMN work.tb_enterprise.end_yf_bond IS '应付债券end';
COMMENT ON COLUMN work.tb_enterprise.st_long_yf_money IS '长期应付款start';
COMMENT ON COLUMN work.tb_enterprise.end_long_yf_money IS '长期应付款end';
COMMENT ON COLUMN work.tb_enterprise.st_zx_yf_money IS '专项应付款start';
COMMENT ON COLUMN work.tb_enterprise.end_zx_yf_money IS '专项应付款end';
COMMENT ON COLUMN work.tb_enterprise.st_yj_fz IS '预计负债start';
COMMENT ON COLUMN work.tb_enterprise.end_yj_fz IS '预计负债end';
COMMENT ON COLUMN work.tb_enterprise.st_dysds_fz IS '递延所得税负债start';
COMMENT ON COLUMN work.tb_enterprise.end_dysds_fz IS '递延所得税负债end';
COMMENT ON COLUMN work.tb_enterprise.st_other_no_fz IS '其他非流动负债start';
COMMENT ON COLUMN work.tb_enterprise.end_other_no_fz IS '其他非流动负债end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_no_fz IS '非流动负债合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_no_fz IS '非流动负债合计end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_total_fz IS '负债合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_total_fz IS '负债合计end';
COMMENT ON COLUMN work.tb_enterprise.st_paid_assets IS '实收资本（或股本）start';
COMMENT ON COLUMN work.tb_enterprise.end_paid_assets IS '实收资本（或股本）end';
COMMENT ON COLUMN work.tb_enterprise.st_zb_reserve IS '资本公积start';
COMMENT ON COLUMN work.tb_enterprise.end_zb_reserve IS '资本公积end';
COMMENT ON COLUMN work.tb_enterprise.st_kc_stock IS '减：库存股start';
COMMENT ON COLUMN work.tb_enterprise.end_kc_stock IS '减：库存股end';
COMMENT ON COLUMN work.tb_enterprise.st_zx_reserve IS '专项储备start';
COMMENT ON COLUMN work.tb_enterprise.end_zx_reserve IS '专项储备end';
COMMENT ON COLUMN work.tb_enterprise.st_yy_reserve IS '盈余公积start';
COMMENT ON COLUMN work.tb_enterprise.end_yy_reserve IS '盈余公积end';
COMMENT ON COLUMN work.tb_enterprise.st_wfp_profit IS '未分配利润start';
COMMENT ON COLUMN work.tb_enterprise.end_wfp_profit IS '未分配利润end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_owner_right IS '所有者权益合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_owner_right IS '所有者权益合计end';
COMMENT ON COLUMN work.tb_enterprise.st_hj_fz_owner_right IS '负债和所有者权益合计start';
COMMENT ON COLUMN work.tb_enterprise.end_hj_fz_owner_right IS '负债和所有者权益合计end';
COMMENT ON COLUMN work.tb_enterprise.server_name IS '服务机构名称';
COMMENT ON COLUMN work.tb_enterprise.server_type IS '服务机构类别';
COMMENT ON COLUMN work.tb_enterprise.server_content IS '业务内容';
COMMENT ON COLUMN work.tb_enterprise.server_levels IS '级别';
COMMENT ON COLUMN work.tb_enterprise.server_domain IS '专属领域';
COMMENT ON COLUMN work.tb_enterprise.server_penalty IS '惩罚记录';
COMMENT ON COLUMN work.tb_enterprise.server_examiner IS '专审委员';
COMMENT ON COLUMN work.tb_enterprise.server_post IS '兼任职务';
COMMENT ON COLUMN work.tb_enterprise.server_descs IS '简介';
COMMENT ON COLUMN work.tb_enterprise.server_remark IS '备注 ';
COMMENT ON COLUMN work.tb_enterprise.inv_domain IS '投资领域';
COMMENT ON COLUMN work.tb_enterprise.inv_csrc_type1 IS '证监会行业分类1';
COMMENT ON COLUMN work.tb_enterprise.inv_csrc_type2 IS '证监会行业分类2';
COMMENT ON COLUMN work.tb_enterprise.inv_csrc_type3 IS '证监会行业分类3';
COMMENT ON COLUMN work.tb_enterprise.inv_csrc_type4 IS '证监会行业分类4';
COMMENT ON COLUMN work.tb_enterprise.inv_indclass1 IS '行业一级分类';
COMMENT ON COLUMN work.tb_enterprise.inv_indclass2 IS '行业二级分类';
COMMENT ON COLUMN work.tb_enterprise.inv_indclass3 IS '行业三级分类';
COMMENT ON COLUMN work.tb_enterprise.inv_indclass4 IS '行业四级分类';
COMMENT ON COLUMN work.tb_enterprise.inv_contact IS '联系人';
COMMENT ON COLUMN work.tb_enterprise.inv_psotion IS '职务';
COMMENT ON COLUMN work.tb_enterprise.inv_doctype IS '证件类型';
COMMENT ON COLUMN work.tb_enterprise.inv_docnum IS '证件号码';
COMMENT ON COLUMN work.tb_enterprise.inv_phone IS '手机号码';
COMMENT ON COLUMN work.tb_enterprise.inv_fax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.inv_email IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.inv_qq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.inv_webchat IS '个人微信号';
COMMENT ON COLUMN work.tb_enterprise.inv_tel IS '固定电话';
COMMENT ON COLUMN work.tb_enterprise.inv_remark IS '备注';
COMMENT ON COLUMN work.tb_enterprise.gov_domain IS '单位名称';
COMMENT ON COLUMN work.tb_enterprise.gov_office IS '处/室';
COMMENT ON COLUMN work.tb_enterprise.gov_desc IS '职能介绍';
COMMENT ON COLUMN work.tb_enterprise.gov_contact IS '联系人';
COMMENT ON COLUMN work.tb_enterprise.gov_psotion IS '职务';
COMMENT ON COLUMN work.tb_enterprise.gov_doctype IS '证件类型';
COMMENT ON COLUMN work.tb_enterprise.gov_docnum IS '证件号码';
COMMENT ON COLUMN work.tb_enterprise.gov_phone IS '手机号码';
COMMENT ON COLUMN work.tb_enterprise.gov_fax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.gov_email IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.gov_qq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.gov_webchat IS '个人微信号';
COMMENT ON COLUMN work.tb_enterprise.gov_tel IS '固定电话';
COMMENT ON COLUMN work.tb_enterprise.gov_remark IS '备注';
COMMENT ON COLUMN work.tb_enterprise.rz_amounts IS '融资金额';
COMMENT ON COLUMN work.tb_enterprise.rz_use IS '融资用途';
COMMENT ON COLUMN work.tb_enterprise.rz_financ IS '股份融资/债券融资';
COMMENT ON COLUMN work.tb_enterprise.rz_security IS '偿付保障';
COMMENT ON COLUMN work.tb_enterprise.rz_acc_cost IS '可接受成本（%/年）';
COMMENT ON COLUMN work.tb_enterprise.rz_deadline IS '融资期限';
COMMENT ON COLUMN work.tb_enterprise.rz_desc IS '融资用途详细说明';
COMMENT ON COLUMN work.tb_enterprise.px_mode IS '培训方式';
COMMENT ON COLUMN work.tb_enterprise.px_content IS '培训内容';
COMMENT ON COLUMN work.tb_enterprise.px_acc_cost IS '可接受成本';
COMMENT ON COLUMN work.tb_enterprise.px_dt IS '有效时间';
COMMENT ON COLUMN work.tb_enterprise.px_requests IS '详细要求';
COMMENT ON COLUMN work.tb_enterprise.hr_post IS '需求职位';
COMMENT ON COLUMN work.tb_enterprise.hr_num IS '职位人数';
COMMENT ON COLUMN work.tb_enterprise.hr_salary IS '职位薪金';
COMMENT ON COLUMN work.tb_enterprise.hr_sex_req IS '性别要求';
COMMENT ON COLUMN work.tb_enterprise.hr_age_req IS '年龄要求';
COMMENT ON COLUMN work.tb_enterprise.hr_requests IS '经验要求';

