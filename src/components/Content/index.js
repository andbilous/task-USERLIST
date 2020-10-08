import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import UserList from '../../components/UserList';
import { useHistory } from 'react-router-dom'

  
  const TabPanel = (props)=> {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <span>{children}</span>
          </Box>
        )}
      </div>
    );
  }



const Content =({users,loadUsers,selectUser,selectedUsers,setCurrentUser,isLoading})=>{
    const [value, setValue] = useState(0);
    const history = useHistory()

    const handleChange = (_e, newValue) => {
      setValue(newValue);
    };

   const handleUserClick=(id)=>{
     setCurrentUser(id)
    history.push(`/user/${id}`)
    }

    const handleUserCheck=(id)=>{
        selectUser(id,new Date().toLocaleString())
    }
    
    const handleLoadMore=()=>{
        loadUsers()
    }   
    
    return (
        <div>
        <AppBar position="static">
        <Tabs 
        value={value}
          onChange={handleChange}
          aria-label="simple tabs example">
          <Tab label="Loaded"  />
          <Tab label="Selected"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {!isLoading ?  
        <UserList
           selectedUsers={selectedUsers}
           users={users}
            handleUserCheck={handleUserCheck}
            handleUserClick={handleUserClick}
            handleLoadMore={handleLoadMore}
            >

          
          </UserList>:  
          <CircularProgress color="inherit" />
          }
           
      </TabPanel>
      <TabPanel value={value} index={1}>
      <UserList  users={selectedUsers} selected={true} />
      </TabPanel>
        </div>
    )
} 

export default Content;