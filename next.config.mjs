/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },

      width: {
        'icone-default': '82px',
      },
      spacing: {
        'icone-default': '82px',
      }
};

export default nextConfig;
