export const LOADING = 'LOADING'

const reducer = (state = { loading: false }, { payload, type }) => {
  switch (type) {
    case LOADING: {
      return {
        loading: payload
      }
    }
  }
}

export default reducer

export const loadingState = payload => dispatch => {
  dispatch({ type: LOADING, payload })
}
