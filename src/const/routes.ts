export const routes = {
  project: {
    allProjects: {
      main: '/projects',
      create: '/projects/create',
      success: '/projects/create/success',
      edit: '/projects/edit',
      history: '/projects/history',
    },
    reports: {
      main: '/reports',
      create: '/reports/create',
    },
    notifications: '/notifications',
    settings: '/settings',
    dashboard: '/dashboard',
    profile: {
      main: '/cabinet',
      company: '/cabinet/company',
    },
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
    changeEmail: {
      main: '/change-email',
      confirm: '/change-email/confirm',
    },
  },
};
