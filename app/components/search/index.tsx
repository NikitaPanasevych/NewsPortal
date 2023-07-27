import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toggleSearch } from '@/redux/features/search.slice';

export default function Search() {
   const isOpen = useSelector((state: RootState) => state.searchReducer.searchOpen);
   const dispatch = useDispatch();

   return (
      <Modal open={isOpen}>
         <Box className={styles.search}>
            <div className={styles.search_header}>
               <h1>
                  <a href="/">Timesprint</a>
               </h1>
               <button onClick={() => dispatch(toggleSearch())}>
                  <CloseIcon />
               </button>
            </div>
            <div className={styles.search_container}>
               <input type="text" placeholder="Search" />
               <button>
                  <SearchIcon />
               </button>
            </div>
         </Box>
      </Modal>
   );
}
