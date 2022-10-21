import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: < AiIcons.AiFillHome / > ,
        cName: 'nav-text'
    },
    {
        title: 'Add items+',
        path: '/items',
        icon: < IoIcons.IoIosPaper / > ,
        cName: 'nav-text'
    },
    {
        title: 'Request Items+',
        path: '/orders',
        icon: < IoIcons.IoIosPaper / > ,
        cName: 'nav-text'
    },

    {
        title: 'Inventory',
        path: '/inventory',
        icon: < FaIcons.FaCartPlus / > ,
        cName: 'nav-text'
    }
];