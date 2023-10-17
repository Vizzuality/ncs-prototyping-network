import React from 'react';

import Head from 'next/head';

import { MetaTagsProps } from './types';

export const MetaTags: React.FC<MetaTagsProps> = ({
  name,
  title,
  description,
  url,
  type,
  publisher,
  section,
  tag,
  imageURL,
  imageWidth,
  imageHeight,
}: MetaTagsProps) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=600"></meta>
      {name && <meta property="og:site_name" content={name} key="name" />}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} key="title" />}
      {url && <meta property="og:url" content={url} key="url" />}
      {type && <meta property="og:type" content={type} key="type" />}
      {publisher && <meta property="article:publisher" content={publisher} key="publisher" />}
      {section && <meta property="article:section" content={section} key="section" />}
      {tag && <meta property="article:tag" content={tag} key="tag" />}
      <meta property="og:image" content="images/social-media/share-image.png" key="image" />
      {imageURL && <meta property="og:image:secure_url" content={imageURL} key="imageURL" />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} key="imageWidth" />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} key="imageHeight" />}
    </Head>
  );
};

export default MetaTags;
