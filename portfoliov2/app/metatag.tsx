import constants from './lib/constants';

const MetaTag = () => {
  return (
    <head>
      <meta name="theme-color" content={constants.site.meta.themeColor} />
      <meta name="robots" content={constants.site.meta.robots} />
      <meta name="author" content={constants.site.meta.author} />
      <meta name="publisher" content={constants.site.meta.author} />
      <meta name="type" content={constants.site.meta.type} />
      <meta
        name="description"
        content={constants.site.meta.description}
      />
      <meta
        name="keywords"
        content={constants.site.meta.keywords}
      />

      <meta
        property="og:title"
        content={constants.site.meta.socialTitle}
      />
      <meta
        property="og:description"
        content={constants.site.meta.description}
      />
      <meta property="og:url" content={constants.site.meta.url} />
      <meta property="og:image" content={constants.site.meta.image} />
      <meta property="og:image:type" content={constants.site.meta.imageType} />
      <meta
        property="og:image:alt"
        content={constants.site.meta.socialTitle}
      />
      <meta
        property="og:site_name"
        content={constants.site.meta.socialTitle}
      />
      <meta property="og:locale" content={constants.site.meta.locale} />

      <meta
        property="twitter:title"
        content={constants.site.meta.socialTitle}
      />
      <meta
        property="twitter:description"
        content={constants.site.meta.description}
      />
      <meta property="twitter:image" content={constants.site.meta.image} />
      <meta
        property="twitter:image:alt"
        content={constants.site.meta.socialTitle}
      />
      <meta property="twitter:site" content={constants.site.meta.twitterHandle} />
      <meta property="twitter:card" content={constants.site.meta.twitterCard} />
      <meta property="twitter:creator" content={constants.site.meta.twitterHandle} />
      <meta property="twitter:url" content={constants.site.meta.url} />
      <link rel="icon" type="image/svg" href={constants.site.meta.favicon} />
    </head>
  );
};

export default MetaTag;
