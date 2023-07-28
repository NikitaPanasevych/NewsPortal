import { data } from '@/app/data/aside.data';
import { toggleDrawer } from '@/redux/features/drawer-slice';
import { RootState } from '@/redux/store';
import { Drawer } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

export default function Aside() {
   const isDrawerOpened = useSelector((state: RootState) => state.drawerReducer.drawerOpen);
   const dispatch = useDispatch();
   const anchor = 'left';

   return (
      <nav className={styles.aside}>
         <Drawer anchor={anchor} open={isDrawerOpened} onClose={() => dispatch(toggleDrawer())}>
            <ul className={styles.aside_list}>
               {data.map((e, index) => (
                  <li key={index}>
                     <a href="/">{e.title}</a>
                  </li>
               ))}
            </ul>
         </Drawer>
      </nav>
   );
}
