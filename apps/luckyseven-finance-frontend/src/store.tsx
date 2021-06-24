/* eslint-disable indent */
import axios from 'axios';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCharacter } from './app/utils/endpoints';

const initialState = {
  year: 2021,
  month: 0,
  transactions: null,
  lastresult: null
};

export type State = typeof initialState;

export enum ActionTypes {
  'STORE_YEAR'='STORE_YEAR',
  'STORE_MONTH'='STORE_MONTH',
  'STORE_TRANSACTION' = 'STORE_TRANSACTION',
  'STORE_LAST_RESULT'='STORE_LAST_RESULT'
}

type Action =
  | { type: ActionTypes.STORE_YEAR; payload: number }
  | { type: ActionTypes.STORE_MONTH; payload: number }
  | { type: ActionTypes.STORE_TRANSACTION; payload: any }
  | { type: ActionTypes.STORE_LAST_RESULT; payload: any };


export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.STORE_YEAR: {
      return {
        ...state,
        year: action.payload,
      };
    }
    case ActionTypes.STORE_MONTH: {
      return {
        ...state,
        month: action.payload,
      };
    }
    case ActionTypes.STORE_TRANSACTION:{
      return{
        ...state,
        transactions: action.payload,
      };
    }
    case ActionTypes.STORE_LAST_RESULT:{
      return{
        ...state,
        lastresult: action.payload,
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
