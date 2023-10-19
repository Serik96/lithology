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

export type TSpecimen = {
  id?: number;
  well_id: number;
  user_id: number;
  slug: string;
  title: string;
  content: string;
  /**
   * in meters, float
   */
  depth?: number;
  pic1: string;
  pic2: string;
  /**
   * data returned from neural network
   * @todo ask to return from backend parsed as object
   */
  analyzed_content?: string;
  order_num: number;
  visible: boolean;
  top: boolean;
  created_at: string;
  updated_at: string;
};

export type TNotification = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: Nullable<string>;
  description: string;
  created_at: string;
};
