import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {loadUsers,selectUser,setCurrentUser} from '../../redux/users/actions'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Content from '../../components/Content'


const HomePage =({loadUsers,users,selectUser,selectedUsers,setCurrentUser,isLoading})=>{
    useEffect(()=>{
        loadUsers()
    },[])

    return (
    <>
        <Header selectedUsersCount ={selectedUsers.length}/>
        <Content 
        selectedUsers={selectedUsers} 
        selectUser={selectUser} 
        loadUsers={loadUsers}  
        setCurrentUser={setCurrentUser}
        users={users}
        isLoading={isLoading}
        />
        <Footer/>
    </>)
} 


const HomePageContainer = connect(
    (state) => ({
      users: state.usersReducer.users,
      selectedUsers: state.usersReducer.selectedUsers,
      isLoading: state.usersReducer.isLoading
    }), (dispatch) => ({
        loadUsers: () => dispatch(loadUsers()),
        setCurrentUser: (id)=>dispatch(setCurrentUser(id)),
        selectUser: (id,addingTime)=>dispatch(selectUser(id,addingTime))
    })
  )(HomePage)

  export default HomePageContainer;


