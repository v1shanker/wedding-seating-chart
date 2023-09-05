import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Autocomplete from '@mui/joy/Autocomplete';
import Typography from '@mui/joy/Typography';

const name_table_map = [
  { name: 'Name 1', id: 1 },
  { name: 'Name 2', id: 2 },
];

const titletheme =  extendTheme({
  typography: {
    fontFamily: 'Serathine',
  },
  titleheader: {
    flexGrow: 1,
    alignItems: 'center',
    background: "#000000",
    typography: {
      fontFamily: 'Serathine',
    },
  },
});


export default function App() {
  return  <div className="wrapper">
           <div className="titulo">
            <CssVarsProvider theme={titletheme}>
            <TitleHeader />
            </CssVarsProvider>
           </div>
           <div className="main">
            <DropDown />
            <TableNumber />
          </div>
         </div>
}

export function TitleHeader() {
    return <Typography level="h1" align="center" sx={{ fontFamily: 'Serathine' }}
              className = {titletheme.titleheader}
           >Seating Chart</Typography>
}

export function DropDown() {
  return  <Autocomplete
            className = '_dropdown'
            placeholder = "Enter your name"
            options={name_table_map}
            getOptionLabel={option => option.name}
            onChange={(event, value) =>
                document.getElementById('_tableNumber').innerHTML= value?.id || ''}
          />;
}

export function TableNumber() {
    return (<Typography
             id = '_tableNumber'
            >
           </Typography>
           )
}
