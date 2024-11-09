import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <section>
        <h2>Extra section</h2>
        <p>This is an extra section that appears above the original footer</p>
      </section>
      <footer className={"myFooter"}>
        <h1>This is my custom site footer</h1>
        <p>And it is very different from the original</p>
      </footer>
    </>
  );
}
    /*<>
      <Footer {...props} />
    </>
  );
}*/
