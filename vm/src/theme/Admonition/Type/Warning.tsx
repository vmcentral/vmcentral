import React from 'react';
import Warning from '@theme-original/Admonition/Type/Warning';
import type WarningType from '@theme/Admonition/Type/Warning';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof WarningType>;

export default function WarningWrapper(props: Props): JSX.Element {
  return (
    <>
      <Warning {...props} />
    </>
  );
}
