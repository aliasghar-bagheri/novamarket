export type T_UserRole = 'USER' | 'ADMIN';

export interface I_ProductCart {
  _id: string;
  productId: string;
  quantity: number;
}

export interface I_OTP {
  code: number;
  expiresIn: string;
}

export interface I_CategoryIcon {
  sm: string | null;
  lg: string | null;
}

export interface I_UserCart extends Pick<I_Cart, '_id' | 'coupon'> {
  products: I_ProductCart[];
}

export interface I_User {
  _id: string;
  name?: string;
  email?: string;
  otp: I_OTP;
  cart: I_UserCart;
  biography: string | null;
  likedProducts: string[];
  phoneNumber: string;
  resetLink: string | null;
  isVerifiedPhoneNumber: boolean;
  isActive: boolean;
  Products: I_Product[];
  role: T_UserRole;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string | null;
}

export enum E_CategoryType {
  'product',
  'comment',
  'post',
  'ticket',
}

export interface I_Category {
  _id: string;
  icon: I_CategoryIcon;
  title: string;
  englishTitle: string;
  description: string;
  type: E_CategoryType;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface I_Product {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: Pick<I_Category, '_id' | 'title' | 'englishTitle' | 'icon'>;
  imageLink: string;
  price: number;
  offPrice: number;
  discount: number;
  brand: string;
  tags: string[];
  rating: number;
  numReviews: number;
  countInStock: number;
  likes: string[];
  likesCount: number;
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface I_Order {
  price: number;
  product: string;
}

export interface I_PaymentDetailCart {
  totalOffAmount: number;
  totalPrice: number;
  totalGrossPrice: number;
  orderItems: I_Order[];
  productIds: string[];
  description: string;
}

export interface I_ProductDetailCart {
  _id: string;
  title: string;
  slug: string;
  imageLink: string;
  price: number;
  offPrice: number;
  discount: number;
  quantity: number;
}

export interface I_Cart {
  _id: string;
  coupon: string | null;
  payDetail: I_PaymentDetailCart;
  productDetail: I_ProductDetailCart[];
}

export enum E_PaymnetType {
  'UNCOMPLETED' = 'UNCOMPLETED',
  'CANCELLED' = 'CANCELLED',
  'COMPLETED' = 'COMPLETED',
  'PENDING' = 'PENDING',
  'PROCESSED' = 'PROCESSED',
  'PAID' = 'PAID',
}

export enum E_PaymnetMethod {
  'ZARINPAL',
  'ZIBAL',
  'IDPAY',
  'PAYPING',
  'VENDAR',
}

export type T_UserPayment = Pick<I_User, '_id' | 'phoneNumber' | 'email' | 'name' | 'avatarUrl'>;

export interface I_Payment {
  _id: string;
  invoiceNumber: string;
  paymentMethod: E_PaymnetMethod;
  amount: number;
  description: string;
  status: E_PaymnetType;
  isPaid: boolean;
  authority: string;
  user: T_UserPayment;
  paymentDate: string;
  cart: I_Cart;
  createdAt: string;
  updatedAt: string;
}

export enum E_CouponType {
  'fixedProduct',
  'percent',
}

export type T_ProductCoupon = Pick<I_Product, '_id' | 'title' | 'slug'>;

export interface I_Coupon {
  _id: string;
  code: string;
  type: E_CouponType;
  amount: number;
  expireDate: string;
  isActive: boolean;
  usageCount: number;
  usageLimit: number;
  productIds: T_ProductCoupon[];
  createdAt: string;
  updatedAt: string;
}

export interface I_CommonPropsFormField {
  className?: string;
  name?: string;
  isRequired?: boolean;
  label?: string;
  error?: string;
  description?: string;
  layout?: 'vertical' | 'horizontal';
  borderless?: boolean;
}
