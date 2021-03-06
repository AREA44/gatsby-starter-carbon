import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop
      that to display your site's build time: {buildTime}
    </p>
    <p>
      By importing the <strong>Footer</strong> component from
      gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.com/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
  ],
  secondCol: [
    { href: 'https://gatsby.carbondesignsystem.com/', linkText: 'Gatsby theme Carbon' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
