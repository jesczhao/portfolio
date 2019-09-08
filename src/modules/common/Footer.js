import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { version } from 'root/package.json'; 

const FooterUnstyled = (props) => {
  const { className } = props;
  return (
    <footer className={className}>
      <p>Portfolio of Juanjuan Zhao, Version {version}</p>
      <p>2017 &copy; All Rights Reserved.</p>
    </footer>
  );
};

FooterUnstyled.displayName = "FooterUnstyled";
FooterUnstyled.propTypes = {
  className: PropTypes.string,
};
FooterUnstyled.defaultProps = {
  className: "",
};

const Footer = styled(FooterUnstyled)`
  background-color: #FAFAFA;
  padding: 15px;
  padding-top:30px;
  text-align: center;
`;

export default Footer;
