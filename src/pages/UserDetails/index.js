import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const UserDetailsPage =({currentUser,selectedUsers})=>{
    const history = useHistory();
   const handleClick = () => {
    history.push('/')
   }
return (
    <>
        <Header selectedUsersCount={selectedUsers.length}/>
    <Grid container item xs={12} direction="column"
    justify="center"
    alignItems="center"
  >
   <h1>Info About {currentUser.name.first} {currentUser.name.last}</h1>
    <Button variant="contained" onClick={handleClick} color='primary'>Back</Button>
        <List>
            <ListItem>
                <ListItemText><img src={currentUser.picture.medium} alt='avatar'/></ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>Address :  </ListItemText>
<ListItemText>{currentUser.location.street.name} {currentUser.location.street.number}</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>Gender :  </ListItemText>
                <ListItemText>{currentUser.gender}</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>Date of birth:  </ListItemText>
                <ListItemText>{currentUser.dob.date}</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>Phone :  </ListItemText>
                <ListItemText>{currentUser.phone}</ListItemText>
            </ListItem>
        </List>

</Grid>
<Footer/>
</>
) 
}


const UserDetailsContainer = connect(
    (state) => ({
      currentUser: state.usersReducer.currentUser,
      selectedUsers: state.usersReducer.selectedUsers,
    }))(UserDetailsPage)

  export default UserDetailsContainer;

