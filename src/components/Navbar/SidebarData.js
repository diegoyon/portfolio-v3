import React from 'react';
import { AiFillHome, AiFillFolder } from 'react-icons/ai';
import { GoTools } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { TiContacts } from 'react-icons/ti';

export const SidebarData = [
  {
    title: 'Home',
    path: '#home',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '#about',
    icon: <CgProfile />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '#projects',
    icon: <AiFillFolder />,
    cName: 'nav-text',
  },

  {
    title: 'Skills',
    path: '#skills',
    icon: <GoTools />,
    cName: 'nav-text',
  },

  {
    title: 'Contact',
    path: '#contact',
    icon: <TiContacts />,
    cName: 'nav-text',
  },
];
