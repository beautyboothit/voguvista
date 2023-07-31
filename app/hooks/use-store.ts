import { create } from "zustand";

interface CartItem {
  id: number;
  product_name: string;
  product_thumbnail_image: string;
  price: number;
  slug: string;
  quantity: number;
  product_id: number;
}

interface CartSummary {
  sub_total: number;
  shipping_cost: number;
  discount: number;
  grand_total: number;
  coupon_code: string | null;
  coupon_applied: boolean;
  free: any[];
}

interface CartStore {
  items: CartItem[];
  summary: CartSummary;
  setCart: (items: CartItem[]) => void;
}

const cartStore = create<CartStore>((set) => ({
  items: [],
  summary: {
    sub_total: 0,
    shipping_cost: 0,
    discount: 0,
    grand_total: 0,
    coupon_applied: false,
    coupon_code: "",
    free: [],
  },
  setCart: (items) => {
    return set((state) => ({ ...state, items: items }));
  },
}));

export default cartStore;
