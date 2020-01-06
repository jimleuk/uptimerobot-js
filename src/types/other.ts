export interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

export interface TimeRange {
  start: Date;
  end?: Date;
}
