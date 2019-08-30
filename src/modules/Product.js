import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getVideoURL } from '../utils';
import {
  Badge,
  Link,
  Modal,
} from '../components';
import { Img } from 'components/imgs';
import { products } from 'shared/data';
import { productNavs } from 'shared/navigation';
import styles from './Product.styles';

const Product = (props) => {
  const meta = getMetaData(props);
  const { subject = 'all', activedemo = '' } = props.match.params;
  const [modelData, setModelData] = useState(null);

  const matchedProducts = subject !== 'all' ?
    products.filter(item => item.keywords.includes(subject)) :
    products;
  
  useEffect(() => {
    if (activedemo) {
      const foundProduct = products.find(product => product.id === activedemo);
      if (foundProduct) {
        const url = getVideoURL(foundProduct.id) || undefined;
        const modalData = {url};
        setModelData(modalData);
      }
    }
  }, [activedemo]);

  const getActiveClassName = (key) => {
    return key === subject ? "active" : "";
  };

  const isNavigable = (keyword) => {
    return !!productNavs.find(item => item.name === keyword);
  };

  return (
    <DocumentMeta {...meta}>
      <div className={`product-view ${props.className}`}>
        <div id="myBtnContainer">
          {productNavs.map((item, index) => (
            <Link
              key={index}
              className={`btn btn-secondary ${getActiveClassName(item.name)}`}
              to={`/product/${item.name}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="demos container-fluid bg-3 text-center works">
          <div className="row">
            {matchedProducts.map((item, key) => {
              const id = item.demo ? item.id : "";
              const demoLink = item.demo ? `/product/${subject}/${id}` : undefined;
              const showDemoIcon = item.demo || !!item.url;
              const url = item.url || undefined;
              const caption = item.caption || item.title;
              const imgUrl = item.img;
              const imgFullUrl = item.imgFull || item.img;
              const demoIconUrl = showDemoIcon ? imgFullUrl : undefined;
              const externalUrl = !item.demo ? url || imgFullUrl : undefined ;

              return (
                <div key={key} className={`col-sm-3 ${item.keywords.join(' ')}`}>
                  <div className="content">
                    {showDemoIcon && <p className="title">{item.title}</p>}
                    <Link className={id} href={demoIconUrl} title={item.title}>
                      {showDemoIcon && <p className="demo"><i className="material-icons">image</i></p>}
                      {!showDemoIcon && <p className="title">{item.title}</p>}
                    </Link>
                    {item.demo && <Link id={id} to={demoLink} title={caption}>
                      <Img src={imgUrl} />
                    </Link>}
                    {!item.demo && <Link href={externalUrl} title={caption}>
                      <Img src={imgUrl} />
                    </Link>}
                    <div className="tags">
                      {item.keywords.map((keyword, key) =>
                        <Badge
                          key={key}
                          keyword={keyword}
                          to={isNavigable(keyword) ? `/product/${keyword}` : undefined}
                        ></Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid bg-3 works">
          <h4>Functional Modules</h4>
          <div className="inlinelist">
            <ul>
              <li>Email Notifications</li>
              <li>Pricing System</li>
              <li>File Upload/Download</li>
              <li>Automatic Webpage Content Updating</li>
              <li>MS Word Content Extraction and Generation</li>
              <li>MS PPT Content Extraction and Generation</li>
              <li>Real-time Spell Check</li>
              <li>Sentence Alignment</li>
              <li>File Management</li>
              <li>Corpus Management System</li>
              <li>Text Classification</li>
              <li>Text Clustering</li>
            </ul>
          </div>
        </div>
      </div>
      {modelData && <Modal
        visible={!!modelData}
        onClose={() => setModelData(null)}
        url={modelData && modelData.url}
      />}
    </DocumentMeta>
  );
};

Product.displayName = "Product";
Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  match: PropTypes.object,
  className: PropTypes.string,
};
Product.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  match: {},
  className: "",
};

export default styled(Product)`${styles}`;
