import path from "path";

const nextConfig = {
  transpilePackages: ["shared-ui"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { modules: true },
        },
        "sass-loader",
      ],
    });
    return config;
  },
};

export default nextConfig;
