import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CopyrightType>;

export default function CopyrightWrapper(props: Props): JSX.Element {
  return (
    <>
      <Copyright {...props} />
    </>
  );
}
