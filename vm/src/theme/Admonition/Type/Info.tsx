import React from 'react';
import Info from '@theme-original/Admonition/Type/Info';
import type InfoType from '@theme/Admonition/Type/Info';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof InfoType>;

export default function InfoWrapper(props: Props): JSX.Element {
  return (
    <>
      <Info {...props} />
    </>
  );
}
