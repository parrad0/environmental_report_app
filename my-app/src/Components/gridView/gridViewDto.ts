import cardDto from "entities/card";

export interface gridViewDto {
  countries: string[];
  provinces: string[];
  types: string[];
  countryPosition?: string;
  provincePosition?: string;
  typePosition?: string;
  cards?: cardDto[];
}
export interface valueExample {
  value: string[];
}
