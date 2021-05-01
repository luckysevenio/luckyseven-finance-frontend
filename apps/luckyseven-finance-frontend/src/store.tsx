/* eslint-disable indent */
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  nameFilter: '',
  pageNumber: 0,
};

export type State = typeof initialState;

export enum ActionTypes {
  'CHANGE_FILTER' = 'CHANGE_FILTER',
  'CHANGE_PAGE_NUMBER' = 'CHANGE_PAGE_NUMBER',
}

type Action =
  | { type: ActionTypes.CHANGE_FILTER; payload: string }
  | { type: ActionTypes.CHANGE_PAGE_NUMBER; payload: number };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        nameFilter: action.payload,
      };
    }
    case ActionTypes.CHANGE_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.payload,
      };
    }
  }
  return state;
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, initialState, composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
