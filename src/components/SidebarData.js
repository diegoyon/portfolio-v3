import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '#home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '#about',
    icon: <GiIcons.GiWeightLiftingUp />,
    cName: 'nav-text',
  },
  {
    title: 'Skills',
    path: '#skills',
    icon: <MdIcons.MdSchedule />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '#contact',
    icon: <MdIcons.MdLeaderboard />,
    cName: 'nav-text',
  },
];
