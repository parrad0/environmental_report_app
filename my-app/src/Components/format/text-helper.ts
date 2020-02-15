export default function sliceTextWithDots(a: string, b: number, c?: boolean) {
  console.log(a, b);
  return `${a.slice(0, b)}${c && a.length > b ? "..." : ""}`;
}
