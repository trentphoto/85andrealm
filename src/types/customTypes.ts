import { NextPageContext } from 'next';
import { Store } from 'redux';
import { RootState } from '../lib/redux';

export interface CustomPageContext extends NextPageContext {
  store: Store<RootState>;
}
