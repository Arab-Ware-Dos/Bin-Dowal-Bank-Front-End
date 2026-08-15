export interface CheckRemittanceRequest {
  name: string;
}

export interface CheckRemittanceResponse {
  status: 'success' | 'not_found' | 'invalid_name' | 'invalid_input';
  found: boolean;
  message: string;
  matches_count?: number;
}