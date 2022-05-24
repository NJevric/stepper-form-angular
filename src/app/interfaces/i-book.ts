
import { ISubgenre } from "./i-subgenre";

export interface IBook {
  title: string,
  author: number,
  isbn: string,
  publisher: number,
  date: string,
  pageNum: number,
  format: number,
  edition: string,
  lang: number,
  description?: string,
  genre: Object,
  subgenres: Array<ISubgenre>
}
