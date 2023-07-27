export interface ProductProps {
  name: string;
  thumbnail_image: string;
  slug: string;
  has_discount?: boolean;
  stroked_price: number;
  main_price: number;
}
