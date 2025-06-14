import { CategoriesResponse } from "./category";





export type ResponseType = {
  result: CategoriesResponse | null;
  loading: boolean;
  error: string | null;
};
