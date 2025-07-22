export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  date: Date;
  total: number;
  items: OrderItem[];
}
