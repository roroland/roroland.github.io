module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
};

module.exports.config = {
  dir: {
    includes: "_includes",
    output: "_site",
  },
  htmlTemplateEngine: "njk",
};
