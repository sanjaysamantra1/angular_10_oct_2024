export interface stockHistory {
  ticker_symbol: string;
  trading_date: Date;
  open_price: number;
  high_price: number;
  low_price: number;
  volume: number;
  dividends: number;
  close_price: number;
}
