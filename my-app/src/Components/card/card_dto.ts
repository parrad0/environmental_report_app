export interface cardDtoArgs {
  color: "inherit" | "default" | "primary" | "secondary";
  cod: number;
  title: string;
  text: string;
  img: string;
  avatar: string;
  date: string;
}
export interface cardDtoProps {
  text: string;
  cod: number;
  onClick(a: any, b: any): any;
  img: string;
  title: string;
  avatar: string;
  date: string;
}
