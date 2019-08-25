import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'modules/common/Navigation';
import Footer from 'modules/common/Footer';
import Home from 'modules/Home';
import Education from 'modules/Education';
import Experience from 'modules/Experience';
import Product from 'modules/Product';
import Capability from 'modules/Capability';
import Solution from 'modules/Solution';
import Nlp from 'modules/Nlp';
import AboutMe from 'modules/AboutMe';
import Paths from 'shared/routePaths';
import metaData from 'shared/metaData';
import { Body } from 'components';

const Router = () => {
  return (
    <>
      <Navigation />
      <Body>
        <Switch>
          <Route exact path={Paths.ROOT} render={(props) =>
            <Home
              {...metaData.ROOT}
              {...props}
            />} />
          <Route path={[`${Paths.HOME}/:activedemo`, Paths.HOME]} render={(props) =>
            <Home
              {...metaData.HOME}
              {...props}
            />} />
          <Route path={[`${Paths.EDUCATION}/:subject`, Paths.EDUCATION]} render={(props) =>
            <Education
              {...metaData.EDUCATION}
              {...props}
            />} />
          <Route path={Paths.EXPERIENCE} render={(props) =>
            <Experience
              {...metaData.EXPERIENCE}
              {...props}
            />} />
          <Route path={[
            `${Paths.PRODUCT}/:subject/:activedemo`,
            `${Paths.PRODUCT}/:subject`,
            Paths.PRODUCT
          ]} render={(props) =>
            <Product
              {...metaData.PRODUCT}
              {...props}
            />} />
          <Route path={Paths.CAPABILITY} render={(props) =>
            <Capability
              {...metaData.CAPABILITY}
              {...props}
            />} />
          <Route path={Paths.SOLUTION} render={(props) =>
            <Solution
              {...metaData.SOLUTION}
              {...props}
            />} />
          <Route path={Paths.NLP} render={(props) =>
            <Nlp
              {...metaData.NLP}
              {...props}
            />} />
          <Route path={Paths.ABOUTME} render={(props) =>
            <AboutMe
              {...metaData.ABOUTME}
              {...props}
            />} />
          <Route path="*" />
        </Switch>
      </Body>
      <Footer />
    </>
  );
};

export default Router;