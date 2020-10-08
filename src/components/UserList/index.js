import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import useFilter from '../../hooks/useFilter'


const UserList = ({users,handleUserCheck,selected,selectedUsers,handleUserClick,handleLoadMore})=>{
    const {searchResults,handleSearch,searchTerm} = useFilter(users);

    const values = searchResults.length ? searchResults: users;
    const checkIfItemIsAlreadyChosen =(id)=> !!selectedUsers.find(user=>user.login.uuid===id)
    if(!values.length){
        return (
            <Typography>No DATA</Typography>
        )
    }
    return(
    <>
     <TextField value={searchTerm}
      onChange={handleSearch} 
      id="standard-basic" label="Search" 
      />
    <List component="nav" aria-label="secondary mailbox folders">
          {values.map((item)=>{
              return ( 
              <ListItem 
                   key={JSON.stringify(item)}
                   role={1} button>
                       {!selected && (<ListItemText>
                           <Button variant="contained" 
                            color={checkIfItemIsAlreadyChosen(item.login.uuid)
                                 ?'primary':'secondary'}
                             onClick={()=>handleUserCheck(item.login.uuid)}>Check</Button>
                             </ListItemText>)}
                             {item.addingTime
                              &&(<ListItemText>{item.addingTime}</ListItemText>)}
                              <ListItemText><img src={item.picture.medium} alt='avatar'/>
                              </ListItemText>
                       <ListItemText>{item.login.uuid}</ListItemText>
                       <ListItemText>{item.name.first}</ListItemText>
                       <ListItemText>{item.name.last}</ListItemText>
                       {!selected && (<Button 
                            color='primary'
                            onClick={()=>handleUserClick(item.login.uuid)}>Details</Button>)}
                       
                      </ListItem>
                
                      )
                      
          })}
      </List>
      <ListItemText><Button variant="contained" 
      onClick={handleLoadMore}>Load More</Button>
      </ListItemText>
      </>
      )}



export default UserList;
