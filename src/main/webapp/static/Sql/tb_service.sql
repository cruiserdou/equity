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
  indclass1 character varying(20), -- 行业一级分类
  indclass2 character varying(20), -- 行业二级分类
  indclass3 character varying(20), -- 行业三级分类
  indclass4 character varying(20), -- 行业四级分类
  csrc_type1 character varying(20), -- 证监会行业分类
  csrc_type2 character varying(20), -- 证监会行业分类2
  csrc_type3 character varying(20), -- 证监会行业分类3
  csrc_type4 character varying(20), -- 证监会行业分类4

  type_enterp boolean DEFAULT true, -- 一般企业
  type_server boolean DEFAULT false, -- 服务机构
  type_investors boolean DEFAULT false, -- 投资人
  type_govermt boolean DEFAULT false, -- 政府机构
  demand_rz boolean DEFAULT false, -- 融资需求
  demand_px boolean DEFAULT false, -- 培训需求
  demand_rl boolean DEFAULT false, -- 人力需求
  inputdt timestamp without time zone, -- 录入时间





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

COMMENT ON COLUMN work.tb_enterprise.indclass1 IS '行业一级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass2 IS '行业二级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass3 IS '行业三级分类';
COMMENT ON COLUMN work.tb_enterprise.indclass4 IS '行业四级分类';
COMMENT ON COLUMN work.tb_enterprise.csrc_type1 IS '证监会行业分类';
COMMENT ON COLUMN work.tb_enterprise.csrc_type2 IS '证监会行业分类2';
COMMENT ON COLUMN work.tb_enterprise.csrc_type3 IS '证监会行业分类3';
COMMENT ON COLUMN work.tb_enterprise.csrc_type4 IS '证监会行业分类4';

COMMENT ON COLUMN work.tb_enterprise.type_enterp IS '一般企业';
COMMENT ON COLUMN work.tb_enterprise.type_server IS '服务机构';
COMMENT ON COLUMN work.tb_enterprise.type_investors IS '投资人';
COMMENT ON COLUMN work.tb_enterprise.type_govermt IS '政府机构';
COMMENT ON COLUMN work.tb_enterprise.demand_rz IS '融资需求';
COMMENT ON COLUMN work.tb_enterprise.demand_px IS '培训需求';
COMMENT ON COLUMN work.tb_enterprise.demand_rl IS '人力需求';
COMMENT ON COLUMN work.tb_enterprise.inputdt IS '录入时间';



