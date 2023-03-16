import { Action } from 'redux';

export interface SetKaySearchAction extends Action {
  type: 'SET_SEARCH_ID',
  payload: string,
}

export interface SetTicketsListAction extends Action {
  type: 'SET_TICKETS',
  payload: any[],
}

export interface MoreTicketsAction extends Action {
  type: 'SET_COUNT_TICKETS',
  payload: number,
}

export interface LoadErrorAction extends Action {
  type: 'ERROR',
}

export const setKaySearch = (id: string): SetKaySearchAction => ({ type: 'SET_SEARCH_ID', payload: id });

export const setTicketsList = (tickets: any[]): SetTicketsListAction => ({ type: 'SET_TICKETS', payload: tickets });

export const moreTickets = (count: number): MoreTicketsAction => ({ type: 'SET_COUNT_TICKETS', payload: count });

export const loadError = (): LoadErrorAction => ({ type: 'ERROR' });