import React from 'react';
import Tip from '@theme-original/Admonition/Type/Tip';
import type TipType from '@theme/Admonition/Type/Tip';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TipType>;

export default function TipWrapper(props: Props): JSX.Element {
  return (
    <>
      <Tip {...props} />
    </>
  );
}
