import {
  useContext,
} from "react";
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios';

const baseURL = 'https://api.github.com/users/'


const useGitHub = () => {
  const {
    state,
    dispatch,
  } = useContext(GlobalContext)

  const getProfile = () => {
    dispatch({
      type: 'SEARCHING'
    })

    const profileName = state.profileToSearch
    axios.get(`${baseURL}${profileName}`)
      .then(res => {
        dispatch({
          type: 'RESULT_IS_PROFILE',
          payload: res.data,
        })
        axios.get(`${baseURL}${profileName}/repos`)
          .then(res => {
            dispatch({
              type: 'RESULT_OF_REPOS',
              payload: res.data,
            })
                
          })
          .catch(err => {
            dispatch({
              type: 'REPOS_ERROR'
            })    
          })
      })
      .catch(err => {
        dispatch({
          type: 'RESULT_IS_ERROR'
        })    
      })
  }

  return {
    getProfile,
  }
}

export default useGitHub;