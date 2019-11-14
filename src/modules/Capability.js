import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getFontColorInBackground } from '../utils';
import {
  techLangs,
  minCodeStrength,
  getColorByCodeStrength,
} from 'shared/data';
import { Button, Link, ButtonGroup, Panel } from '../components';

const Capability = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-6">
            <Panel
              theme="danger"
              title="Highlight: As a Senior Developer and Technical Lead"
            >
              <p>- <span>Sharp eyes on root cause of technical issues</span></p>
              <p>- <span>Good communication skills with maximized information sharing</span></p>
              <p>- <span>Well understanding on needs from customers, managers and developers</span></p>
              <p>- <span>Able to implement requirement in detail</span></p>
              <p>- <span>Make things happen by actively asking correct questions</span></p>
              <p>- <span>Able to interview and train new developers</span></p>
              <p>- <span>Willing to take challenges and higher responsibilities</span></p>
              <p>- <span>Able to provide comprehensive technical consultation & solution</span></p>
            </Panel>

            <Panel
              id="Achievement"
              theme="info"
              title="Technical Achievement"
            >
              <p>- <span>Convert a traditional website to Node.js site from scratch</span></p>
              <ul>
                <li>Examples</li>
                <ul>
                  <li>
                        Old site: 
                    <Link href="http://www.scientrans.com/~jzhao/">
                          http://www.scientrans.com/~jzhao/
                    </Link>
                  </li>
                  <li>Node.js site: 
                    <Link href="http://zhao.scientrans.com/">
                          http://zhao.scientrans.com/
                    </Link>
                  </li>
                </ul>
              </ul>
              <p>- <span>Website optimization and Google performance score improvement</span></p>
              <ul>
                <li>Procedures</li>
                <ul>
                  <li>Enable gzip compression</li>
                  <li>Enable cache control</li>
                  <li>Optimize render-blocking css and js files</li>
                  <li>Optimize pictures</li>
                </ul>
                <li>Examples</li>
                <ul>
                  <li>https://www.aucwine.com</li>
                  <li>https://www.slibuy.com</li>
                </ul>
              </ul>
              <p>- <span>MySQL connection encryption with API development</span></p>
              <ul>
                <li>Target</li>
                <ul>
                  <li>protect clear text password stored in configuration files</li>
                  <li>restrict access to live database to the server</li>
                  <li>separate critical files from code repository and database access</li>
                </ul>
                <li>Solutions</li>
                <ul>
                  <li>Fetch encrypted password from API server based on clear text password</li>
                  <li>Establish MySQL connection based on the encrypted password</li>
                  <li>Pass MySQL connection to app.js with restored clear text password</li>
                  <li>Allow code repository to run without encryption locally</li>
                  <li>Binarize encryption source files</li>
                </ul>
                <li>Modules:
                  <ul>
                    <li>Mysql</li>
                    <li>MD5</li>
                    <li>NEXE</li>
                  </ul>
                </li>
              </ul>

              <p>- <span>Node modules customization</span></p>
              <ul>
                <li>Pagination</li>
                <li>Mysql</li>
                <li>Forever</li>
              </ul>
            </Panel>


          </div>
          <div className="col-md-6">
            <Panel
              theme="danger"
              title="Natural Language"
            >
              <p>
                - 
                <span>
                  Proficient both in written and spoken English
                </span>
              </p>
              <p>
                - 
                <span>
                  Expert in technical writing with more than 5 years of technical translation/editing experience in English
                </span>
              </p>
              <p>
                - 
                <span>
                  Good literal communication skills: deliver key points with simple words
                </span>
              </p>
            </Panel>
        
            <Panel
              theme="danger"
              title="Programming Language"
            >
              <ButtonGroup>
                {techLangs.map((item, index) => {
                  const value = item.value !== undefined ? item.value : minCodeStrength;
                  const backgroundColor = getColorByCodeStrength(value);
                  const color = getFontColorInBackground(backgroundColor);
                  const strength = item.value !== undefined ? `${item.value}+ lines` : '';
                  return (
                    <Button
                      key={index}
                      random
                      style={{ color, backgroundColor }}
                      data-tip={strength}
                    >
                      {item.content}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </Panel>

            <Panel
              id="Utilities"
              theme="info"
              title="Skill Set"
            >
              <p>- <span>AWS</span></p>
              <ul>
                <li>S3 bucket</li>
                <li>Security Group</li>
                <li>Monitoring</li>
                <li>RDS</li>
                <li>Autoscaling</li>
              </ul>
              <p>- <span>Version Control</span></p>
              <ul>
                <li>Git</li>
                <li>SVN</li>
                <li>Assembla</li>
              </ul>
              <p>- <span>Ubuntu Linux</span></p>
              <p>- <span>Mysql</span></p>
              <p>- <span>Server Deployment</span></p>
              <ul>
                <li>Deployment of Node.js site on Windows</li>
                <li>Deployment of Node.js site on Ubuntu</li>
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Capability.displayName = "Capability";
Capability.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Capability.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Capability;
