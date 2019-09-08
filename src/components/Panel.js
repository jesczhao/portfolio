/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BOLD_FONT_COLOR, THEME_INFO, THEME_DANGER } from 'shared/styles';
import Link from './Link';

const PanelUnstyled = (props) => {
  const { id, theme, className, title, titleUrl, children } = props;
  return (
    <div id={id} className={`panel-group ${className}`}>
      <div className={`panel panel-${theme}`}>
        <div className="panel-heading">
          <h4 className="panel-title">
            {titleUrl && <Link to={titleUrl}>{title}</Link>}
            {!titleUrl && title}
          </h4>
        </div>
        <div>
          <div className={`panel-body`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
PanelUnstyled.displayName = "PanelUnstyled";
PanelUnstyled.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  titleUrl: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
PanelUnstyled.defaultProps = {
  theme: '',
  title: '',
  titleUrl: '',
  className: '',
};

const Panel = styled(PanelUnstyled)`
  margin-bottom: 20px;
  .panel {
    margin-bottom: 0;
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.35);
  }

  .panel-heading {
    padding: 3px 10px;
    background-color:#F2F3F4 !important;
    border-bottom: 0;

    ${props => {
      let color = '';
      switch (props.theme) {
        case "info":
          color = THEME_INFO;
          break;
        case "danger":
          color = THEME_DANGER;
          break;
        default:
          break;
      }
      return `color: ${color};`;
    }};
  }

  .panel-title {
    font-size: 16px;
    a {
      text-decoration: underline;
    }
  }

  .panel-body {
    padding: 15px;

    ul.list-group {
      margin-bottom:0;
    }
  }

  p > span {
    font-weight: bold;
    padding: 20px;
    color: ${BOLD_FONT_COLOR};
  }

  p span.badge {
    margin-left: 10px;
    margin-bottom: 2px;
  }
`;

export default Panel;