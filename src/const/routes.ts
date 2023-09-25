export const routes = {
  project: {
    create: '/create-report',
    allProjects: {
      main: '/projects',
      archived: '/projects/archived',
      create: '/projects/create',
      favourites: '/projects/favourites',
    },
    notifications: '/notifications',
    folders: '/folders',
    settings: '/settings',
    price: '/price',
    cabinet: '/cabinet',
  },
  subscription: {
    main: '/subscription',
    purchase: '/subscription/purchase',
  },
  public: {
    main: '/',
    news: '/news',
    support: '/support',
  },
  auth: {
    signIn: '/sign-in',
    registration: '/registration',
    resetPassword: {
      main: '/reset-password',
      confirm: '/reset-password/confirm',
    },
    changePassword: {
      main: '/change-password',
      confirm: '/change-password/confirm',
    },
  },
};
