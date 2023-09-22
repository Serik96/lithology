export type TProject = {
  folder_id: number;
  title: string;
  content?: string;
  lat?: number;
  lng?: number;
  industry?: string;
  location?: string;
};

export type TFolder = {
  id?: number;
  company_id: number;
  slug: string;
  name: string;
  description: string | null;
  parent: number;
  level_num: number;
  order_num: number;
  visible: number;
  top: number;
  created_at: string;
  /* @todo Тут поля которых не хватает  */
  project_images: Nullable<string[]>;
  project_info: {
    grain: Nullable<number>;
    area: Nullable<number>;
    orientation: Nullable<number>;
    point: Nullable<number>;
  };
};
