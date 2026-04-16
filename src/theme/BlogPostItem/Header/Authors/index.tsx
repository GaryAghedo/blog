import React from 'react';
import Authors from '@theme-original/BlogPostItem/Header/Authors';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function AuthorsWrapper(props: any) {
  //const {isBlogPostPage} = useBlogPost();
  
  // If we are on the article list page (NOT the individual post), hide the author
 // if (!isBlogPostPage) {
   // return null;
 // }
  
  // Otherwise, show the author normally
 // return <Authors {...props} />;
 return null;
}
