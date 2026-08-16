/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://novadigital.com.tr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.9,
};
