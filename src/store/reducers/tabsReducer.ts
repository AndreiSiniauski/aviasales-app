interface TabsState {
  ticketSort: string;
}

const defaultState: TabsState = {
  ticketSort: 'cheap',
};

function tabsReducer(state: TabsState = defaultState, action: { type: string, payload: string }) {
  if (action.type === 'SELECT_SORT') {
    return {
      ...state,
      ticketSort: action.payload,
    };
  }
  return state;
}

export default tabsReducer;
