'use client'

import React from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function Header() {

  const drawer = useSelector((state:any) => state.drawerReducer.drawerOpen);
  console.log(drawer);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_links}>
          <div className={styles.header_links_icon}>
            <MenuIcon sx={{color: 'white'}} />
          </div>
          <div className={styles.header_links_icon}>
            <SearchIcon sx={{color: 'white'}}  />
          </div>
        </div>
        <div className={styles.header_center}>
          <Link href='/'>Timesprint</Link>
        </div>
        <div className={styles.header_btns}>
          <button className={styles.header_btns_signin}>Sign In</button>
          <button className={styles.header_btns_signup}>Sign Up</button>
        </div>
      </header>
    </div>
  )
}
