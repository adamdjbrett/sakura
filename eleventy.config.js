import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Add custom filters
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(dateObj));
  });

  eleventyConfig.addFilter("dateToRfc822", (dateObj) => {
    return new Date(dateObj).toUTCString();
  });

  eleventyConfig.addFilter("jsonify", (variable) => {
    return JSON.stringify(variable);
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("dateToRfc3339", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Add collections
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("blog/**/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

  // Ignore index.html
  eleventyConfig.ignores.add("index.html");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
