import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import Typography from '@mui/joy/Typography';

const name_table_map = [
  { name: 'Name 1', id: 1 },
  { name: 'Name 2', id: 2 },
];


export default function App() {
  return  <React.Fragment >
            <DropDown />
            <TableNumber />
          </React.Fragment >
}

export function DropDown() {
  return  <Autocomplete
            className = '_dropdown'
            options={name_table_map}
            getOptionLabel={option => option.name}
            onChange={(event, value) =>
                document.getElementById('_tableNumber').innerHTML= value?.id || 'Please select name'}
          />;
}

export function TableNumber() {
    return (<Typography
             id = '_tableNumber'
            >
           </Typography>
           )
}
