CREATE TABLE work.tb_service
(
  id serial NOT NULL, -- 服务机构ID
  nos character varying(20), -- 编号
  name character varying(50), -- 发送人
  type character varying(50), -- 服务机构类别 
  content text, -- 业务内容
  levels character varying(50), -- 安全级别
  descs text, -- 简介
  domain text, -- 领域  
  penalty text, --惩罚记录  
  remark text, -- 备注  
  CONSTRAINT pk_service PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE work.tb_service
  OWNER TO postgres;
COMMENT ON TABLE work.tb_service
  IS '服务机构表';
COMMENT ON COLUMN work.tb_service.id IS '服务机构ID';
COMMENT ON COLUMN work.tb_service.nos IS '编号';
COMMENT ON COLUMN work.tb_service.name IS '服务机构名称';
COMMENT ON COLUMN work.tb_service.type IS '服务机构类别';
COMMENT ON COLUMN work.tb_service.content IS '业务内容';
COMMENT ON COLUMN work.tb_service.levels IS ' 级别';
COMMENT ON COLUMN work.tb_service.descs IS '简介';
COMMENT ON COLUMN work.tb_service.domain IS '领域';
COMMENT ON COLUMN work.tb_service.penalty IS '惩罚记录';
COMMENT ON COLUMN work.tb_service.remark IS '备注';



CREATE TABLE work.tb_financ
(
  id serial NOT NULL, -- 融资需求ID
  famount numeric(10,2), -- 融资金额
  fmode character varying(200), -- 融资方式
  fuse text, -- 融资用途
  ftermdt timestamp without time zone, -- 融资期限
  fcosts numeric(10,2), -- 融资成本
  payment_pl text, -- 偿付计划
  payment_gt text, -- 偿付保障
  supply_sd character varying(200), -- 资金供给方
  supply_md character varying(200), -- 供给方式
  costs numeric(10,2), -- 成本
  CONSTRAINT pk_financ PRIMARY KEY (id)
)
WITH (
OIDS=FALSE
);
ALTER TABLE work.tb_financ
OWNER TO postgres;
COMMENT ON TABLE work.tb_financ
IS '融资需求表';
COMMENT ON COLUMN work.tb_financ.id IS '融资需求ID';
COMMENT ON COLUMN work.tb_financ.famount IS '融资金额';
COMMENT ON COLUMN work.tb_financ.fmode IS '融资方式';
COMMENT ON COLUMN work.tb_financ.fuse IS '融资用途';
COMMENT ON COLUMN work.tb_financ.ftermdt IS '融资期限';
COMMENT ON COLUMN work.tb_financ.fcosts IS '融资成本';
COMMENT ON COLUMN work.tb_financ.payment_pl IS '偿付计划';
COMMENT ON COLUMN work.tb_financ.payment_gt IS '偿付保障';
COMMENT ON COLUMN work.tb_financ.supply_sd IS '资金供给方';
COMMENT ON COLUMN work.tb_financ.supply_md IS '供给方式';
COMMENT ON COLUMN work.tb_financ.costs IS '成本';