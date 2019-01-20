import {
  RETRIEVING_ITEMS_LIST,
  RETRIEVED_ITEMS_LIST,
  RETRIEVING_ITEMS_DESCRIPTION,
  RETRIEVED_ITEMS_DESCRIPTION,
  ERROR,
} from '../actions';

const initialState = {
  itemsList: [],
  itemsDesciption: [],
  retrievingLists: false,
  retrievedLists: false,
  retrievingDesc: false,
  retrievedDesc: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVING_ITEMS_LIST:
      return { ...state, retrievingLists: true, retrievedLists: false };

    case RETRIEVED_ITEMS_LIST: {
      console.log('RETRIEVED ITEMS: ', action.payload);

      return {
        ...state,
        retrievedLists: true,
        retrievingLists: false,
        itemsList: Object.keys(action.payload),
      };
    }

    case RETRIEVING_ITEMS_DESCRIPTION:
      return { ...state, retrievingDesc: true, retrievedDesc: false };

    case RETRIEVED_ITEMS_DESCRIPTION: {
      return {
        ...state,
        retrievedDesc: true,
        retrievingDesc: false,
        itemsDesciption: action.payload,
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
