/** @type {import('next').NextConfig} */
const path = require('path');

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.join(__dirname, 'src')],
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
