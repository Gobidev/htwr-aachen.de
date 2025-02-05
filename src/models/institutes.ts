export enum Institutes {
  HTWR = 0,
  SYSCOM,
  ES,
  SCIL,
  WSI,
  SIBD,
  CIGOL,
  __LENGTH,
}

export type StringInstitutes =
  | "htwr"
  | "syscom"
  | "es"
  | "scil"
  | "wsi"
  | "sibd"
  | "cigol";

export const InstitutesMap = {
  HTWR: 0,
  SYSCOM: 1,
  ES: 2,
  SCIL: 3,
  WSI: 4,
  SIBD: 5,
  CIGOL: 6,
};
export const INSTITUTES_LENGTH = Object.keys(InstitutesMap).length;

export type Institute = {
  name: string;
  subject: string;
  professor: string;
  fullName: string;
  href: string;
  icon?: string;
  banner?: string;
  description?: string;
};
