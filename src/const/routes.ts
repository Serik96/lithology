export const routes = {
  project: {
    allProjects: {
      main: '/projects',
      create: '/projects/create',
    },
    reports: {
      main: '/reports',
      create: '/reports/create',
    },
    notifications: '/notifications',
    settings: '/settings',
    cabinet: '/dashboard',
    personal: '/personal',
    subscription: {
      main: '/subscription',
      purchase: '/subscription/purchase',
    },
  },
  public: {
    main: '/',
    news: '/news',
    support: '/support',
    notFound: '/not-found',
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
