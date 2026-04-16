import React from 'react';
import Header from '@theme-original/BlogPostItem/Header';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HeaderWrapper(props: any) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {frontMatter, assets} = metadata; 
  
  const bundledImage = typeof assets?.image === 'object' ? assets?.image?.default : assets?.image;
  
  const rawImage = bundledImage ?? (frontMatter.image as string | undefined);
  
  const imageUrl = useBaseUrl(rawImage);

  return (
    <>
      <Header {...props} />

      {!isBlogPostPage && imageUrl && (
        <Link 
          to={metadata.permalink} 
          style={{
            display: 'block', 
            marginTop: '1.2rem',
            marginBottom: '1rem' 
          }}
        >
          <img 
            src={imageUrl} 
            alt={metadata.title} 
            style={{
              width: '100%',       
              maxWidth: 'none',   
              height: 'auto',     
              maxHeight: '300px',  
              objectFit: 'cover', 
              borderRadius: '12px', 
              border: '1px solid var(--ifm-color-emphasis-200)' 
            }} 
          />
        </Link>
      )}
    </>
  );
}