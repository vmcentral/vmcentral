import React from 'react';
import Caution from '@theme-original/Admonition/Type/Caution';
import type CautionType from '@theme/Admonition/Type/Caution';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CautionType>;

export default function CautionWrapper(props: Props): JSX.Element {
  return (
    <>
      <Caution {...props} />
    </>
  );
}
