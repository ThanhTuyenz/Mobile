const initialState = {
  data: [],
  loading: false,
  error: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'DELETE_JOB_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_JOB_SUCCESS':
      return { ...state, data: state.data.filter(item => item.id !== action.payload), loading: false };
    case 'DELETE_JOB_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default rootReducer;