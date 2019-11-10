import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import { Link, Panel, Badge } from '../components';
import { Img } from 'components/imgs';
import { nlpProjects } from 'shared/data';
import styles from './Nlp.styles';

const Nlp = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <div className="row">
          <div className="col-md-9">
            <Panel
              className="projects"
              theme="info"
              title="Natural Language Processing (NLP) Projects"
            >
              {nlpProjects.map((item, index) => (
                <p key={index} className={item.keywords.join(' ')}>
                  {item.period}
                  <span className="title">
                    {item.title}
                  </span>
                  <div className="keywords">
                    {item.keywords && item.keywords.map((keyword, i) =>
                      <Badge key={i} keyword={keyword} />
                    )}
                  </div>
                </p>
              ))}
            </Panel>
            <Panel
              theme="info"
              title="Products Demonstration"
            >
              <div className="text-center">    
                <div className="row">
                  <div className="col-sm-3"> 
                    <Link href="http://www.scidict.org/termtrans/">
                      <p>Text Analysis</p>
                    </Link>
                    <Link title="Text Analysis (NLP)" href="http://www.scidict.org/termtrans/">
                      <Img title="Text Analysis (NLP)" src="/img/textanalysis.jpg" />
                    </Link>
                  </div>
                  <div className="col-sm-3"> 
                    <Link href="/img/term_pair_check.png"><p>Translation Workbench</p></Link>
                    <Link title="Translation Workbench" href="/img/term_pair_check.png">
                      <Img title="Translation Workbench" src="/img/term_pair_check.png" />
                    </Link>
                  </div>
                  <div className="col-sm-3">
                    <Link href="/img/related_word.png"><p>Word Suggestion</p></Link>
                    <Link title="Word Suggestion" href="/img/related_word.png">
                      <Img title="Word Suggestion" src="/img/related_word.png" />
                    </Link>
                  </div>
                  <div className="col-sm-3">
                    <Link href="/img/find_replace.png"><p>Keyword Highlight in Bilingual Texts</p></Link>
                    <Link title="Keyword Highlight in Bilingual Texts" href="/img/find_replace.png">
                      <Img title="Keyword Highlight in Bilingual Texts" src="/img/find_replace.png" />
                    </Link>
                  </div>
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-md-3">
            <Panel
              theme="info"
              title="NLP Skill Set"
            >
              <ul>
                <li>Information retrieval
                  <ul>
                    <li>index building and compression</li>
                    <li>text classification and clustering</li>
                    <li>query search based on similarity</li>
                    <li>query expansion</li>
                    <li>web crawling</li>
                  </ul>
                </li>
                <li>Natural Language Processing
                  <ul>
                    <li>tokenization</li>
                    <li>stemmatization</li>
                    <li>lemmatization</li>
                    <li>sentence splitting</li>
                    <li>syntactic parsing</li>
                    <li>named entity extraction</li>
                    <li>Chinese word segmentation</li>
                    <li>phrase extraction</li>
                    <li>text chunking</li>
                  </ul>
                </li>
                <li>Computer-Aided Translation
                  <ul>
                    <li>spell check</li>
                    <li>grammatical check</li>
                    <li>phrase translation check</li>
                    <li>real-time alignment of sentence pairs</li>
                  </ul>
                </li>
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Nlp.displayName = "Nlp";
Nlp.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
};
Nlp.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
};

const NlpStyled = styled(Nlp)`${styles}`;

export default NlpStyled;
