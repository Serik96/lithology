export type TUser = {
  id: number;
  company_id: number;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  position: string;
  avatar: Nullable<string>;
  description: string;
  price_plan_id: number;
};
