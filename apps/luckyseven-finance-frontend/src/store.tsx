/* eslint-disable indent */
import axios from 'axios';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCharacter } from './app/utils/endpoints';

const initialState = {
  year: 0,
  month: 0,
  transactions: null
};

export type State = typeof initialState;

export enum ActionTypes {
  'STORE_YEAR'='STORE_YEAR',
  'STORE_MONTH'='STORE_MONTH',
  'STORE_TRANSACTION' = 'STORE_TRANSACTION'
}

type Action =
  | { type: ActionTypes.STORE_YEAR; payload: number }
  | { type: ActionTypes.STORE_MONTH; payload: number }
  | { type: ActionTypes.STORE_TRANSACTION; payload: any };


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
    default: {
      return state;
    }
  }
}

export const getTransactions =(month,year)=>async(dispatch, getState)=>{
  try {
      const res = await axios.get(`http://localhost:1337/withdraws/${year}/${month}`);
      dispatch({
          type: ActionTypes.STORE_TRANSACTION,
          payload: res.data
      })
  } catch (error) {
      console.log(error);   
  }
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, initialState, composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
