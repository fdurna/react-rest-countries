import * as actions from "../constants/CardConstants";

const initialState = {
  cards: [],
  searchResults: [],
  page: 1,
  cardDetail: [],
};

export const CardReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload.data,
        searchResults: action.payload.data,
      };
    case actions.FETCH_CARD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SORT_CARD_ASC:
      const sortAsc = action.payload.sort((a, b) =>
        a.name < b.name ? 1 : a.name > b.name ? -1 : 0
      );
      return {
        ...state,
        cards: sortAsc,
      };
    case actions.SORT_CARD_DESC:
      const sortDesc = action.payload.sort((a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      );
      return {
        ...state,
        cards: sortDesc,
      };
    case actions.SEARCH_CARDS:
      return {
        ...state,
        cards: action.payload,
        page: 1,
      };
    case actions.FETCH_CARD_FILTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_CARD_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload.data,
        searchResults: action.payload.data,
      };
    case actions.FETCH_CARD_FILTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.FETCH_CARD_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_CARD_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cardDetail: action.payload.data,
      };
    case actions.FETCH_CARD_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
