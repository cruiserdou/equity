CREATE TABLE work.tb_enterprise
(
  id serial NOT NULL, -- 消息ID
  buslicno character varying(50), -- 营业执照号码
  name character varying(50), -- 企业名称
  unit character varying(20), -- 单位类别
  legrep character varying(20), -- 法定代表人
  region character varying(20), -- 地域
  nos character varying(20), -- 公司简称
  postal character varying(20), -- 邮政编码
  nature character varying(20), -- 企业性质
  regcap character varying(20), -- 注册资本（万元）
  bustermfdt date, -- 营业期限自
  bustremtdt date, -- 营业期限至
  regdt date, -- 注册日期
  listcode character varying(20), -- 挂牌代码
  regaddr character varying(20), -- 注册地址
  offaddr character varying(20), -- 办公地址
  listprice character varying(20), -- 挂牌价格
  staffnum character varying(20), -- 员工人数
  scope character varying(20), -- 经营范围
  mbus character varying(20), -- 主营业务
  eprofile character varying(20), -- 企业简介
  phoinf character varying(20), -- 企业照片资料
  post character varying(20), -- 职务
  doctype character varying(20), -- 证件类型
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
  maintain character varying(20), -- 企业维护状态
  reserve character varying(20), -- 所属后备库
  contacter character varying(20), -- 联系人
  dept character varying(20), -- 部门
  psotion character varying(20), -- 职务
  edoctype character varying(20), -- 证件类型
  edocnum character varying(20), -- 证件号码
  etel character varying(20), -- 固定电话
  ephone character varying(20), -- 手机号码
  efax character varying(20), -- 传真
  eemail character varying(20), -- E-mail
  eqq character varying(20), -- QQ
  remark text, -- 备注
  CONSTRAINT pk_enterprise PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE work.tb_enterprise
  OWNER TO postgres;
COMMENT ON TABLE work.tb_enterprise
  IS '企业信息表';
COMMENT ON COLUMN work.tb_enterprise.id IS '消息ID';
COMMENT ON COLUMN work.tb_enterprise.buslicno IS '营业执照号码';
COMMENT ON COLUMN work.tb_enterprise.name IS '企业名称';
COMMENT ON COLUMN work.tb_enterprise.unit IS '单位类别';
COMMENT ON COLUMN work.tb_enterprise.legrep IS '法定代表人';
COMMENT ON COLUMN work.tb_enterprise.region IS '地域';
COMMENT ON COLUMN work.tb_enterprise.nos IS '公司简称';
COMMENT ON COLUMN work.tb_enterprise.postal IS '邮政编码';
COMMENT ON COLUMN work.tb_enterprise.nature IS '企业性质';
COMMENT ON COLUMN work.tb_enterprise.regcap IS '注册资本（万元）';
COMMENT ON COLUMN work.tb_enterprise.bustermfdt IS '营业期限自';
COMMENT ON COLUMN work.tb_enterprise.bustremtdt IS '营业期限至';
COMMENT ON COLUMN work.tb_enterprise.regdt IS '注册日期';
COMMENT ON COLUMN work.tb_enterprise.listcode IS '挂牌代码';
COMMENT ON COLUMN work.tb_enterprise.regaddr IS '注册地址';
COMMENT ON COLUMN work.tb_enterprise.offaddr IS '办公地址';
COMMENT ON COLUMN work.tb_enterprise.listprice IS '挂牌价格';
COMMENT ON COLUMN work.tb_enterprise.staffnum IS '员工人数';
COMMENT ON COLUMN work.tb_enterprise.scope IS '经营范围';
COMMENT ON COLUMN work.tb_enterprise.mbus IS '主营业务';
COMMENT ON COLUMN work.tb_enterprise.eprofile IS '企业简介';
COMMENT ON COLUMN work.tb_enterprise.phoinf IS '企业照片资料';
COMMENT ON COLUMN work.tb_enterprise.post IS '职务';
COMMENT ON COLUMN work.tb_enterprise.doctype IS '证件类型';
COMMENT ON COLUMN work.tb_enterprise.contact IS '姓名';
COMMENT ON COLUMN work.tb_enterprise.docnum IS '证件号码';
COMMENT ON COLUMN work.tb_enterprise.phone IS '手机';
COMMENT ON COLUMN work.tb_enterprise.fax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.email IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.qq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.indclass1 IS '行业一级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass2 IS '行业二级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass3 IS '行业三级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass4 IS '行业四级分类';
COMMENT ON COLUMN work.tb_enterprise.esource IS '企业来源';
COMMENT ON COLUMN work.tb_enterprise.referee IS '推荐人';
COMMENT ON COLUMN work.tb_enterprise.esourcedesc IS '企业来源详情';
COMMENT ON COLUMN work.tb_enterprise.recomdt IS '推荐日期';
COMMENT ON COLUMN work.tb_enterprise.emaint IS '企业维护人';
COMMENT ON COLUMN work.tb_enterprise.trusteeship IS '托管状态';
COMMENT ON COLUMN work.tb_enterprise.listst IS '挂牌状态';
COMMENT ON COLUMN work.tb_enterprise.eclass IS '企业等级';
COMMENT ON COLUMN work.tb_enterprise.maintain IS '企业维护状态';
COMMENT ON COLUMN work.tb_enterprise.reserve IS '所属后备库';
COMMENT ON COLUMN work.tb_enterprise.contacter IS '联系人';
COMMENT ON COLUMN work.tb_enterprise.dept IS '部门';
COMMENT ON COLUMN work.tb_enterprise.psotion IS '职务';
COMMENT ON COLUMN work.tb_enterprise.edoctype IS '证件类型';
COMMENT ON COLUMN work.tb_enterprise.edocnum IS '证件号码';
COMMENT ON COLUMN work.tb_enterprise.etel IS '固定电话';
COMMENT ON COLUMN work.tb_enterprise.ephone IS '手机号码';
COMMENT ON COLUMN work.tb_enterprise.efax IS '传真';
COMMENT ON COLUMN work.tb_enterprise.eemail IS 'E-mail';
COMMENT ON COLUMN work.tb_enterprise.eqq IS 'QQ';
COMMENT ON COLUMN work.tb_enterprise.remark IS '备注';