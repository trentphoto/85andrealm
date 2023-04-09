import { NextPageContext } from 'next';
import { Store } from 'redux';
import { RootState } from '../lib/store';

export interface CustomPageContext extends NextPageContext {
  store: Store<RootState>;
}
