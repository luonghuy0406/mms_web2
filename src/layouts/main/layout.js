import { useCallback, useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { TopNav } from './top-nav';
import Footer from './footer';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%'
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

export const Layout = (props) => {
    const { children } = props
    const {products} = children.props
    return (
      <>
        <TopNav products={products}/>
        <LayoutRoot>
          <LayoutContainer>
            {children}
          </LayoutContainer>
        </LayoutRoot>
        <Footer/>
      </>
    );
  }
