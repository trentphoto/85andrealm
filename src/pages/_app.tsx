import { fetchProducts } from '@/lib/fetchProducts';
import { setProducts } from '@/lib/productsReducer';
import store from '@/lib/store';
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { CustomPageContext } from '@/types/customTypes';
import '@/styles/globals.css'
import { Product } from '@/types/types';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

    return (
      <>
          <Component {...pageProps} />
      </>
    )
}
