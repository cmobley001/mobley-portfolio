import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    qualities: [75, 90],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as needed
});

export default withMDX(nextConfig);
