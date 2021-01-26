module.exports = {
  siteMetadata: {
    title: 'Dev.Wig Portfolio',
    siteUrl: 'https://devwig.com'
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-174582659-1",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
            "Ubuntu",
            "Spectral",
            "Pacifico",
        ],
        display: "swap"
      },
    },
    // {
    //   resolve: "gatsby-plugin-prefetch-google-fonts",
    //   options: {
    //     fonts: [
    //       {
    //         family: "Ubuntu",
    //         variants: ["300", "400", "400i", "700"]
    //       },
    //       {
    //         family: "Spectral",
    //         variants: ["400", "700", "700i", "800"]
    //       },
    //       {
    //         family: "Pacifico"
    //       }
    //     ],
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Dev.Wig Portfolio",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/icon.png"
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: "./src/components/",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
  ],
};
