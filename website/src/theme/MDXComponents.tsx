import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/HomepageFeatures/card'
import CardBody from '@site/src/components/HomepageFeatures/card/CardBody';
import CardFooter from '@site/src/components/HomepageFeatures/card/CardFooter';
import CardHeader from '@site/src/components/HomepageFeatures/card/CardHeader';
import CardImage from '@site/src/components/HomepageFeatures/card/CardImg';
export default {
  // Reusing the default mapping
  ...MDXComponents,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  CardImage, 
};