import axios from 'axios';

export const RETRIEVING_ITEMS_LIST = 'RETRIEVING_ITEMS_LIST';
export const RETRIEVED_ITEMS_LIST = 'RETRIEVED_ITEMS_LIST';
export const RETRIEVING_ITEMS_DESCRIPTION = 'RETRIEVING_ITEMS_DESCRIPTION';
export const RETRIEVED_ITEMS_DESCRIPTION = 'RETRIEVED_ITEMS_DESCRIPTION';
export const ERROR = 'ERROR';

const descriptionRoute =
  'https://s3­us­west­2.amazonaws.com/frontend.codex/challenge2/items_description.json';

export const getList = () => {
  const promise = axios.get();
  return dispatch => {
    dispatch({ type: RETRIEVING_ITEMS_LIST });
    promise
      .then(({ res }) =>
        dispatch({ type: RETRIEVED_ITEMS_LIST, payload: res.payload })
      )
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const getDescription = () => {
  const promise = axios.get(descriptionRoute);
  return dispatch => {
    dispatch({ type: RETRIEVING_ITEMS_DESCRIPTION });
    promise
      .then(res =>
        dispatch({ type: RETRIEVED_ITEMS_DESCRIPTION, payload: res.data })
      )
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
