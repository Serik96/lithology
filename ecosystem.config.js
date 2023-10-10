module.exports = {
  apps: [
    {
      name: 'litholog-frontend',
      script: './node_modules/.bin/next',
      args: 'start -p 9520',
      instances: 1,
      autorestart: true,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_stage: {
        NODE_ENV: 'development',
        TARGET_ENV: 'stage',
      },
      env_production: {
        NODE_ENV: 'production',
        TARGET_ENV: 'production',
      },
    },
  ],

  deploy: {
    stage: {
      user: 'root',
      host: 'stage.lithologai.com',
      ref: 'origin/stage',
      // ref: 'v0.0.7',
      repo: 'git@litholog-fe:entrinecom/litholog-frontend.git',
      path: '/opt/litholog-frontend',
      'post-deploy':
        'yarn install && ./node_modules/.bin/next build && pm2 startOrReload ecosystem.config.js --env stage',
    },

    production: {
      user: 'dev',
      host: 'lithologai.com',
      ref: 'origin/master',
      repo: 'git@github.com:entrinecom/litholog-frontend.git',
      path: '/var/www/litholog.com',
      'post-deploy':
        'yarn install && ./node_modules/.bin/next build && pm2 startOrReload ecosystem.config.js --env production',
    },
  },
};
