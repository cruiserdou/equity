CREATE TABLE work.tb_enterprise_sh
(
  id serial NOT NULL, -- ID
  enterprise_id integer NOT NULL, -- 企业ID
  shtype character varying(50), -- 股东类型
  shname character varying(50), -- 股东
  shdoctype character varying(20), -- 证照/证件类型
  shdocnum character varying(20), -- 证照/证件号码
  shareholdnum character varying(20), -- 持股数量
  currencynum character varying(20), -- 流通数量
  freezenum character varying(20), -- 冻结数量
  remark text, -- 详情
  CONSTRAINT pk_enterprise_sh PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE work.tb_enterprise_sh
  OWNER TO postgres;
COMMENT ON TABLE work.tb_enterprise_sh
  IS '企业股东信息表';
COMMENT ON COLUMN work.tb_enterprise_sh.id IS 'ID';
COMMENT ON COLUMN work.tb_enterprise_sh.enterprise_id IS '企业ID';
COMMENT ON COLUMN work.tb_enterprise_sh.shtype IS '股东类型';
COMMENT ON COLUMN work.tb_enterprise_sh.shname IS '股东';
COMMENT ON COLUMN work.tb_enterprise_sh.shdoctype IS '证照/证件类型';
COMMENT ON COLUMN work.tb_enterprise_sh.shdocnum IS '证照/证件号码';
COMMENT ON COLUMN work.tb_enterprise_sh.shareholdnum IS '持股数量';
COMMENT ON COLUMN work.tb_enterprise_sh.currencynum IS '流通数量';
COMMENT ON COLUMN work.tb_enterprise_sh.freezenum IS '冻结数量';
COMMENT ON COLUMN work.tb_enterprise_sh.remark IS '详情';
