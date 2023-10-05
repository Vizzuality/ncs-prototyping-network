import { type ParsedUrlQuery } from 'querystring';

export interface PageQuery extends ParsedUrlQuery {
  pid: string;
}
