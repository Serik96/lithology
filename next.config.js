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
            sassOptions: {
              includePaths: [path.join(__dirname, 'src')],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
