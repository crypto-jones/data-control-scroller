import {
  RETRIEVING_ITEMS_LIST,
  RETRIEVED_ITEMS_LIST,
  RETRIEVING_ITEMS_DESCRIPTION,
  RETRIEVED_ITEMS_DESCRIPTION,
  ERROR,
} from '../actions';

const initialState = {
  itemsList: [],
  itemsDescription: [],
  retrievingLists: false,
  retrievedLists: false,
  retrievingDesc: false,
  retrievedDesc: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVING_ITEMS_LIST:
      return { ...state, retrievingLists: true, retrievedLists: false };

    case RETRIEVED_ITEMS_LIST: {
      return {
        ...state,
        retrievedLists: true,
        retrievingLists: false,
        itemsList: action.payload,
      };
    }

    case RETRIEVING_ITEMS_DESCRIPTION:
      return { ...state, retrievingDesc: true, retrievedDesc: false };

    case RETRIEVED_ITEMS_DESCRIPTION: {
      return {
        ...state,
        retrievedDesc: true,
        retrievingDesc: false,
        itemsDescription: action.payload,
      };
    }

    case ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
