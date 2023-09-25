export const tempData = {
  user: {
    id: 1,
    company_id: 2,
    email: 'test@gmail.com',
    phone: '77074660324',
    first_name: 'Anastasya',
    last_name: 'Litvinenko',
    position: 'test',
    avatar: '/temp/avatar.png',
    description: 'test test test test',
    price_plan_id: 3,
  },
  folderImg: '/temp/folder-image.png',
  notifications: {
    count: 41,
  },
  folders: [
    {
      id: 1,
      folder_id: 1,
      name: 'Kamchatka',
      company_id: 1,
      slug: 'test',
      description: 'test test test',
      parent: 2,
      level_num: 1,
      order_num: 2,
      visible: 0,
      top: 1,
      created_at: '2023-09-22T15:53:14.266Z',
      project_images: ['/temp/test-folder.png'],
      project_info: {
        grain: 1.25,
        area: 1.5,
        orientation: 2,
        point: 1,
      },
    },
    {
      id: 2,
      folder_id: 2,
      name: 'Kamchatka 2',
      company_id: 2,
      slug: 'test2',
      description: 'test test test',
      parent: 2,
      level_num: 1,
      order_num: 2,
      visible: 0,
      top: 1,
      created_at: '2023-09-22T15:53:14.266Z',
      project_images: ['/temp/test-folder.png'],
      project_info: {
        grain: 1.25,
        area: 1.5,
        orientation: 2,
        point: 1,
      },
    },
  ],
};
