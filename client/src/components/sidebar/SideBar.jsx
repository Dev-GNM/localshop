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


const SideBar = ({children}) => {

    let navigate = useNavigate()
    const drawerWidth = 240
    const sidebarItems=[

        {
          text: "Inventory",
          icon: <Inventory2OutlinedIcon color="secondary"/>,
          path: '/inventories'
        },
        {
            text: "Order Requests",
            icon: <ShoppingCartCheckoutOutlinedIcon color="secondary"/>,
            path: '/orders'
          },
        {
          text: "Analytics",
          icon: <TimelineOutlinedIcon color="secondary"/>,
          path: '/analytics'
        },
        {
            text: "Clerks",
            icon: <PeopleAltOutlinedIcon color="secondary"/>,
            path: '/clerks'
          },
        {
            text: "Logout",
            icon: <PowerSettingsNewOutlinedIcon color='secondary' />,
            path: "/logout"
        }
      ]
  return (
      <div>
          <Drawer
              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                      backgroundColor: '#101F33',
                      color: 'rgba(255,255,255, 0.7)'
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
                          <ListItemIcon sx={{color: 'rgba(255,255,255, 0.7)'}}>{item.icon}</ListItemIcon>
                          <ListItemText>{ item.text}</ListItemText>
                        </ListItem>
                  ))}
              </List>
      </Drawer>
    </div>
  )
}

export default SideBar