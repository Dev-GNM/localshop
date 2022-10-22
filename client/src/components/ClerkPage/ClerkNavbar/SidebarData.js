import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: < AiIcons.AiFillHome / > ,
        cName: 'nav-text'
    },
    {
        title: 'Add items+',
        path: '/addItems',
        icon: < IoIcons.IoIosPaper / > ,
        cName: 'nav-text'
    },
    {
        title: 'Request Items+',
        path: '/addRequests',
        icon: < IoIcons.IoIosPaper / > ,
        cName: 'nav-text'
    },

    {/* {
        title: 'Inventory',
        path: '/oldPage',
        icon: < FaIcons.FaCartPlus / > ,
        cName: 'nav-text'
    } */}
];