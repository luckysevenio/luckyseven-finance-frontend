/* eslint-disable indent */
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  nameFilter: '',
};

export type State = typeof initialState;

export enum ActionTypes {
  'CHANGE_FILTER' = 'CHANGE_FILTER',
}

type Action = { type: ActionTypes.CHANGE_FILTER; payload: string };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        nameFilter: action.payload,
      };
    }
  }
  return state;
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, initialState, composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
