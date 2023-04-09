import { Product } from '@/types/types';
import { Action, Reducer } from 'redux';

export type ProductsState = Product[];

const initialState: ProductsState = [];

interface SetProductsAction extends Action {
  type: 'SET_PRODUCTS';
  payload: ProductsState;
}

export type ProductsActions = SetProductsAction;

export const setProducts = (products: ProductsState): SetProductsAction => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

const productsReducer: Reducer<ProductsState, ProductsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
