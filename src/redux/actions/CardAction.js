import * as actions from "../constants/CardConstants";
import axios from "../../utils/axios";

export const fetchCards = () => async (dispatch) => {
  dispatch({ type: actions.FETCH_CARD_REQUEST });
  try {
    const data = await axios.get("/all");
    dispatch({
      type: actions.FETCH_CARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actions.FETCH_CARD_FAILED, payload: error.message });
  }
};

export const fetchDetailCard = (query) => async (dispatch) => {
  dispatch({ type: actions.FETCH_CARD_DETAIL_REQUEST });
  try {
    const data = await axios.get(`alpha/${query}`);
    dispatch({
      type: actions.FETCH_CARD_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.FETCH_CARD_DETAIL_FAILED,
      payload: error.message,
    });
  }
};

export const filterFetchCards = (query) => async (dispatch) => {
  if (query !== "all") {
    dispatch({ type: actions.FETCH_CARD_FILTER_REQUEST });
    try {
      const data = await axios.get(`region/${query}`);
      dispatch({
        type: actions.FETCH_CARD_FILTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actions.FETCH_CARD_FILTER_FAILED,
        payload: error.message,
      });
    }
  } else {
    dispatch(fetchCards());
  }
};

export const searchCards = (query) => async (dispatch, getState) => {
  const { CardReducers } = getState();
  const searchResults = CardReducers.searchResults.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );
  dispatch({
    type: actions.SEARCH_CARDS,
    payload: searchResults,
  });
};


export const sortCardAsc = () => (dispatch,getState) => {
  const {CardReducers} = getState();
  dispatch({
      type:actions.SORT_CARD_ASC,
      payload:CardReducers.cards
  })
}

export const sortCardDesc = () => (dispatch,getState) => {
  const {CardReducers} = getState();
  dispatch({
      type:actions.SORT_CARD_DESC,
      payload:CardReducers.cards
  })
}