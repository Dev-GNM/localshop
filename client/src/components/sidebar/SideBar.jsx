import React from 'react'
import Drawer  from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { useNavigate } from 'react-router-dom';
// import Inventory from '../inventory/Inventory';


const SideBar = ({children, setAdminuser}) => {

    let navigate = useNavigate();

    const drawerWidth = 240
    const sidebarItems=[
       
        {
          text: "Inventory",
          icon: <Inventory2OutlinedIcon color="#ffff"/>,
          path: '/inventories'
        },
        {
            text: "Order Requests",
            icon: <ShoppingCartCheckoutOutlinedIcon color="#ffff"/>,
            path: '/orders'
          },
        {
          text: "Analytics",
          icon: <TimelineOutlinedIcon color="#ffff"/>,
          path: '/analytics'
        },
        {
            text: "Clerks",
            icon: <PeopleAltOutlinedIcon color="#ffff"/>,
            path: '/clerks'
          }
       
      ]



      //logout button

      function handleLogoutClick() {
    fetch("admin/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setAdminuser(null);
        navigate("/alog-in")
      }
    });


  }
  return (
      <div>
          <Drawer
              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                      backgroundColor: '#060b26',
                      color: '#fff',
                      cursor:'pointer'
                  }
              }}
              variant="permanent" 
              anchor='left'>
              <Typography variant='h5' sx={{marginTop:"15px"}}>
                  <SpeedOutlinedIcon/> Admin Dashboard
              </Typography>
              <List>
                  {sidebarItems.map((item) => (
                      <ListItem
                          key={item.text}
                          onClick={()=>navigate(item.path)}
                          button>
                          <ListItemIcon sx={{color: '#ffffff'}}>{item.icon}</ListItemIcon>
                          <ListItemText>{ item.text}</ListItemText>
                         
                        </ListItem>
                        
                  ))}
                   <ListItem onClick={handleLogoutClick}>
                          <ListItemIcon sx={{color: '#ffffff'}}><PowerSettingsNewOutlinedIcon color='#ffffff' /></ListItemIcon>
                          <ListItemText>Logout</ListItemText>
                         
                        </ListItem>
                   
              </List>
      </Drawer>
    </div>
  )
}

export default SideBar
