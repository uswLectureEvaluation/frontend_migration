export interface APIErrorResponse {
  code: string;
  error: string;
  exception: string;
  message: string;
  status: number;
}

export interface MajorTypeResponse {
  data: string[];
  statusCode: number | null;
  message: string | null;
}
