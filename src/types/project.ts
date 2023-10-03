import { ESortDirection } from '@/enums';

export type TProject = {
  folder_id: number;
  title: string;
  content?: string;
  lat?: number;
  lng?: number;
  industry?: string;
  location?: string;
  /* @todo Тут поля которых не хватает  */
  archived: boolean;
  created_at: string;
  slug: string;
  top: boolean;
  reportsCount: number;
  project_info: {
    grain: Nullable<number>;
    area: Nullable<number>;
    orientation: Nullable<number>;
    point: Nullable<number>;
  };
};

export type TFolder = {
  id: number;
  company_id: number;
  slug: string;
  name: string;
  description: string | null;
  parent: number;
  level_num: number;
  order_num: number;
  visible: number;
  top: boolean;
  created_at: string;
  /* @todo Тут поля которых не хватает  */
  archived: boolean;
  project_images: string[];
  project_info: {
    grain: Nullable<number>;
    area: Nullable<number>;
    orientation: Nullable<number>;
    point: Nullable<number>;
  };
};

export type TProjectSortField = {
  label: string;
  name: string;
  direction: ESortDirection;
};

export type TReport = {
  /* @todo Нет такого типа  */
  id: number;
  company_id: number;
  slug: string;
  name: string;
  description: string | null;
  parent: number;
  level_num: number;
  order_num: number;
  visible: number;
  top: boolean;
  created_at: string;
  archived: boolean;
  project_images: string[];
  project_info: {
    grain: Nullable<number>;
    area: Nullable<number>;
    orientation: Nullable<number>;
    point: Nullable<number>;
  };
};
