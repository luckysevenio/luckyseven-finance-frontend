/* eslint-disable indent */
import axios from 'axios';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  year: 2021,
  month: 0,
  transactions: null,
  lastresult: [],
  user: null,
  user_balances: 0,
  dolar: 0,
  net_worth:[],
  payment:null,
  regexes:[]
};

export type State = typeof initialState;

export enum ActionTypes {
  'STORE_YEAR'='STORE_YEAR',
  'STORE_MONTH'='STORE_MONTH',
  'STORE_TRANSACTION' = 'STORE_TRANSACTION',
  'STORE_LAST_RESULT'='STORE_LAST_RESULT',
  'STORE_USER'='STORE_USER',
  'STORE_BALANCES'='STORE_BALANCES',
  'STORE_DOLAR'='STORE_DOLAR',
  'STORE_NW'='STORE_NW',
  'STORE_PAYMENT'='STORE_PAYMENT',
  'STORE_REGEX'='STORE_REGEX'
}

type Action =
  | { type: ActionTypes.STORE_YEAR; payload: number }
  | { type: ActionTypes.STORE_MONTH; payload: number }
  | { type: ActionTypes.STORE_TRANSACTION; payload: any }
  | { type: ActionTypes.STORE_LAST_RESULT; payload: any }
  | { type: ActionTypes.STORE_USER; payload: any }
  | { type: ActionTypes.STORE_BALANCES; payload: number }
  | { type: ActionTypes.STORE_DOLAR; payload: number }
  | { type: ActionTypes.STORE_NW; payload: any }
  | { type: ActionTypes.STORE_PAYMENT; payload: any }
  | { type: ActionTypes.STORE_REGEX; payload: any }


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
    case ActionTypes.STORE_USER:{
      return{
        ...state,
        user:action.payload,
      }
    }
    case ActionTypes.STORE_BALANCES:{
      return{
        ...state,
        user_balances:action.payload,
      }
    }
    case ActionTypes.STORE_DOLAR:{
      return{
        ...state,
        dolar: action.payload
      }
    }
    case ActionTypes.STORE_NW:{
      return{
        ...state,
        net_worth: action.payload
      }
    }
    case ActionTypes.STORE_PAYMENT:{
      return{
        ...state,
        payment: action.payload
      }
    }
    case ActionTypes.STORE_REGEX:{
      return{
        ...state,
        regexes: action.payload
      }
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
