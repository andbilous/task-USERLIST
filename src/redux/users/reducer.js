import types from './types'

const initialValues = {
  users: [],
  selectedUsers:[],
  currentUser:{},
  isLoading: false,
  error: ''
}

const usersReducer = (state = initialValues, action) => {
  switch (action.type) {
      case types.LOAD_USERS: 
      return {
          ...state,
          isLoading: true
      }
      case types.RECEIVE_USERS:
        return {
          ...state,
          users: [...state.users,...action.payload],
          isLoading: false
        }
        case types.LOAD_USERS_FAILURE: 
      return {
          ...state,
          isLoading: false
      }
      case types.SELECT_USER: 
      return {
          ...state,
          users: state.users.map(item=>item.login.uuid===action.payload.id ?
             Object.assign(item,{addingTime:action.payload.addingTime}) : item ),
          selectedUsers: [...state.selectedUsers,
            {addingTime:action.payload.addingTime,...state.users.filter
                (item=>item.login.uuid===action.payload.id)[0]
            }
            ].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i),
          isLoading: false
      }
      case types.SET_CURRENT_USER: 
      return {
          ...state,
          currentUser: state.users.filter(user=>user.login.uuid===action.payload)[0]
      }
    default:
      return state
  }
}

export default usersReducer;