/* eslint-disable indent */
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  month: 0,
  year: 0,
  transaction: null,
};

export type State = typeof initialState;

export enum ActionTypes {
  'STORE_MONTH' = 'STORE_MONTH',
  'STORE_YEAR' = 'STORE_YEAER',
  'STORE_TRANSACTION' = 'STORE_TRANSACTION',
}

type Action =
  | { type: ActionTypes.STORE_MONTH; payload: number }
  | { type: ActionTypes.STORE_YEAR; payload: number }
  | { type: ActionTypes.STORE_TRANSACTION; payload: any };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.STORE_MONTH: {
      return {
        ...state,
        month: action.payload,
      };
    }
    case ActionTypes.STORE_YEAR: {
      return {
        ...state,
        year: action.payload,
      };
    }
    case ActionTypes.STORE_TRANSACTION: {
      return {
        ...state,
        year: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, initialState, composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
