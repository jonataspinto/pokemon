import React from 'react';
import PropTypes from 'prop-types';
import * as S from './LayoutStyled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, currentContainer }) => (
  <S.Container>
    <Header />
    <S.Main currentContainer={currentContainer}>
      {children}
    </S.Main>
    <Footer />
  </S.Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentContainer: PropTypes.string,
};

Layout.defaultProps = {
  currentContainer: 'home',
};

export default Layout;
