const reduceObject = (state, payload = null) => ({
  'REINITIALICE': {
    ...state,
    profileToSearch: '',
  },
  'CLEAR_ERROR_RESULT': {
    ...state,
    loading: false,
    error: false,
  },
  'CLEAR_PROFILE_RESULT': {
    ...state,
    loading: false,
    profile: null,
    repos: null,
  },
  'ROLLBACK_PROFILE_TO_SEARCH': {
    ...state,
    loading: false,
    error: false,
    profileToSearch: state.oldProfileToSearch,
  },
  'WRITE_PROFILE_TO_SEARCH': {
    ...state,
    profileToSearch: payload,
  },
  'SEARCHING': {
    ...state,
    firstRun: false,
    loading: true,
  },
  'RESULT_IS_ERROR': {
    ...state,
    loading: false,
    error: true,
    profile: null,
    oldProfileToSearch: state.profileToSearch,
    repos: null,
  },
  'RESULT_IS_PROFILE': {
    ...state,
    error: false,
    profile: payload,
    oldProfileToSearch: state.profileToSearch,
  },
  'RESULT_OF_REPOS': {
    ...state,
    loading: false,
    error: false,
    repos: payload,
  },
  'REPOS_ERROR': {
    ...state,
    loading: false,
    error: false,
    repos: null,
  },
})


export const reducer = (state, action) => (reduceObject(state, action.payload)[action.type] || state);
