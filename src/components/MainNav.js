//hecho en MaterialUI
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import './MainNav.css'


export default function SimpleBottomNavigation() {
const [value, setValue] = React.useState(0);

//inline styling con el sx, más styling en el MainNav.css
return (
    <Box className='muiBox' sx={{ 
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100, }}>
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    >
        <BottomNavigationAction className='muiIcons' label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction className='muiIcons' label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction className='muiIcons' label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction className='muiIcons' label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
    </Box>
    );
}