import axios from 'axios';

export const RETRIEVING_ITEMS_LIST = 'RETRIEVING_ITEMS_LIST';
export const RETRIEVED_ITEMS_LIST = 'RETRIEVED_ITEMS_LIST';
export const RETRIEVING_ITEMS_DESCRIPTION = 'RETRIEVING_ITEMS_DESCRIPTION';
export const RETRIEVED_ITEMS_DESCRIPTION = 'RETRIEVED_ITEMS_DESCRIPTION';
export const ERROR = 'ERROR';

export const getList = () => {
  const path = process.env.REACT_APP_LIST_ROUTE || 'http://localhost:5000/list';
  const promise = axios.get(path);
  return dispatch => {
    dispatch({ type: RETRIEVING_ITEMS_LIST });
    promise
      .then(({ data }) =>
        dispatch({ type: RETRIEVED_ITEMS_LIST, payload: data.payload })
      )
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const getDescription = () => {
  const path =
    process.env.REACT_APP_DETAILS_ROUTE || 'http://localhost:5000/details';
  const promise = axios.get(path);
  return dispatch => {
    dispatch({ type: RETRIEVING_ITEMS_DESCRIPTION });
    promise
      .then(({ data }) =>
        dispatch({ type: RETRIEVED_ITEMS_DESCRIPTION, payload: data.payload })
      )
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
