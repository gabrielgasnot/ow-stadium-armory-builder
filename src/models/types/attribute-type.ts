export type AttributeType =
  | "AR"
  | "HP"
  | "SH"
  | "WP"
  | "WPLS"
  | "AP"
  | "ALS"
  | "AS"
  | "RS"
  | "MS"
  | "CR"
  | "CD"
  | "KR"
  | "MA"
  | "CHS"
  | "CHA"
  | "description";

export type AttributeTypeMap = {
  [key in AttributeType]: string;
};
