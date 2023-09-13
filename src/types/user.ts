export type TUser = {
  id: number;
  company_id: number;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  position: string;
  avatar: string | null;
  description: string;
  price_plan_id: number;
};
