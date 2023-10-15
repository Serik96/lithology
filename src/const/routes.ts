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
    dashboard: '/dashboard',
    profile: {
      main: '/cabinet',
      company: {
        main: '/cabinet/company',
        members: {
          main: '/cabinet/company/members',
          add: '/cabinet/company/members/add'
        }
      }
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
      main: '/cabinet/change-password',
      confirm: '/cabinet/change-password/confirm',
    },
    changeEmail: {
      main: '/cabinet/change-email',
      confirm: '/cabinet/change-email/confirm',
    },
  },
};
