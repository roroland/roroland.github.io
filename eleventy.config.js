module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  // Fechas del blog: se formatean siempre en UTC para que un
  // `date: 2026-11-10` no retroceda un día según la zona horaria.
  eleventyConfig.addFilter("readableDate", (value) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(value)),
  );

  eleventyConfig.addFilter("htmlDateString", (value) =>
    new Date(value).toISOString().slice(0, 10),
  );

  return {};
};

module.exports.config = {
  dir: {
    includes: "_includes",
    output: "_site",
  },
  htmlTemplateEngine: "njk",
};
