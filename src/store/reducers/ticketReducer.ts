interface DefaultState {
  ticketsList: any[];
  searchId: number | null;
  loading: boolean;
  error: boolean;
  loadingAll: boolean;
  countDispalayTicket: number;
  progressLoading: number;
}

interface SetTicketsAction {
  type: 'SET_TICKETS';
  payload: { stop: boolean; tickets: any[] };
}

interface SetSearchIdAction {
  type: 'SET_SEARCH_ID';
  payload: number;
}

interface SetCountTicketsAction {
  type: 'SET_COUNT_TICKETS';
  payload: number;
}

interface LoadErrorAction {
  type: 'ERROR';
}

type Action = SetTicketsAction | SetSearchIdAction | SetCountTicketsAction | LoadErrorAction;

const defaultState: DefaultState = {
  ticketsList: [],
  searchId: null,
  loading: true,
  error: false,
  loadingAll: false,
  countDispalayTicket: 5,
  progressLoading: 0,
};

function ticketReducer(state = defaultState, action: Action): DefaultState {
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        loading: false,
        error: false,
        progressLoading: state.progressLoading + 8,
        loadingAll: action.payload.stop,
        ticketsList: [...state.ticketsList, ...action.payload.tickets],
      };

    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };

    case 'SET_COUNT_TICKETS':
      return {
        ...state,
        countDispalayTicket: action.payload,
      };

    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}

export default ticketReducer;
