export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    const response = await fetch('https://66fcc665c3a184a84d17f003.mockapi.io/App');
    const data = await response.json();
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
};

export const deleteJob = (id) => async (dispatch) => {
  dispatch({ type: 'DELETE_JOB_REQUEST', payload: id });
  try {
    await fetch(`https://66fcc665c3a184a84d17f003.mockapi.io/App/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: 'DELETE_JOB_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_JOB_FAILURE', error: error.message });
  }
};