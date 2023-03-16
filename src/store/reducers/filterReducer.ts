interface FilterState {
  transfersNot: boolean;
  transfersOne: boolean;
  transfersTwo: boolean;
  transfersThree: boolean;
}

const defaultState: FilterState = {
  transfersNot: true,
  transfersOne: true,
  transfersTwo: true,
  transfersThree: true,
};

type FilterAction =
  | { type: 'SELECT_ALL' }
  | { type: 'SELECT_ALL_OFF' }
  | { type: 'SELECT_NOT' }
  | { type: 'SELECT_ONE' }
  | { type: 'SELECT_TWO' }
  | { type: 'SELECT_THREE' };

function filterReducer(state = defaultState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SELECT_ALL':
      return {
        ...state,
        transfersNot: true,
        transfersOne: true,
        transfersTwo: true,
        transfersThree: true,
      };
    case 'SELECT_ALL_OFF':
      return {
        transfersNot: false,
        transfersOne: false,
        transfersTwo: false,
        transfersThree: false,
      };
    case 'SELECT_NOT':
      return {
        ...state,
        transfersNot: !state.transfersNot,
      };
    case 'SELECT_ONE':
      return {
        ...state,
        transfersOne: !state.transfersOne,
      };
    case 'SELECT_TWO':
      return {
        ...state,
        transfersTwo: !state.transfersTwo,
      };
    case 'SELECT_THREE':
      return {
        ...state,
        transfersThree: !state.transfersThree,
      };
    default:
      return state;
  }
}

export default filterReducer;