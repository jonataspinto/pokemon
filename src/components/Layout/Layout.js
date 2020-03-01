import React from 'react';
import PropTypes from 'prop-types';
import * as S from './LayoutStyled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <S.Container>
    <Header />
    <S.Main>
      {children}
    </S.Main>
    <Footer />
  </S.Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
