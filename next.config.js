/** @type {import('next').NextConfig} */
const path = require('path');

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

module.exports = withNextIntl(nextConfig);
