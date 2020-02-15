import { ADD_ARTICLE } from "./constants/constants";

export function changeName(payload: string) {
  return { type: ADD_ARTICLE, text: payload };
}
