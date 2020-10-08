import types from './types';

  
  export const loadUsers = () => ({
    type: types.LOAD_USERS,
  });
  

  
  export const loadUsersFailure = (error) => ({
    type: types.LOAD_USERS_FAILURE,
    payload: error,
  });
  

  export const receiveUsers = (data) => ({
    type: types.RECEIVE_USERS,
    payload: data,
  });

  export const selectUser = (id,addingTime) => ({
    type: types.SELECT_USER,
    payload: {id,addingTime},
  });

  export const setCurrentUser = (id) => ({
    type: types.SET_CURRENT_USER,
    payload: id
  })