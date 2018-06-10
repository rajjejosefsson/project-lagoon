/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const repoUrl = "https://github.com/rajjejosefsson/project-lagoon";

const siteConfig = {
  title: "Lagoon" /* title for your website */,
  tagline: "A site for you",
  url: "https://lagoon.netlify.com" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "project-lagoon",
  organizationName: "trivago",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  editUrl: repoUrl + "/edit/master/docs/",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "motivation", label: "Docs" },
    { blog: true, label: "Blog" },
    { search: true },
    { href: repoUrl, label: "GitHub" }
  ],

  algolia: {
    appId: "V9HNS3KDX1",
    apiKey: "645bf93e468e075d12c8ac69cecc23f8", // public search key
    indexName: "trv-lagoon",
    debug: false,
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  /* path to images for header/footer */
  headerIcon: "img/narwhal.png",
  footerIcon: "img/narwhal.png",
  favicon: "img/favicon.png",

  /* colors for website */
  colors: {
    primaryColor: "#809ADF",
    secondaryColor: "#BEBEBE"
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Lagoon",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "atom-one-dark"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ["https://buttons.github.io/buttons.js"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/narwhal.png",
  twitterImage: "img/narwhal.png"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
