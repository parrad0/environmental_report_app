export interface cardDtoArgs {
  color: "inherit" | "default" | "primary" | "secondary";
  cod?: number;
  name?: string;
  text?: string;
}
export interface cardDtoProps {
  text: string;
  cod: number;
}
