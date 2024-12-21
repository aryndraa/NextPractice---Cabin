/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bywqvxccsnhwyffbpgwp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**", // Corrected
      },
    ],
  },

  // output: "export",
};

export default nextConfig;
