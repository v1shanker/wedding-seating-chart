import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import Typography from '@mui/joy/Autocomplete';
//import Input from '@mui/joy/Input';

const name_table_map = [
  { name: 'Name 1', id: 1 },
  { name: 'Name 2', id: 2 },
];


export default function App() {
  return  <Autocomplete
            options={name_table_map}
            getOptionLabel={option => option.name}
            onChange={(event, value) => console.log(value)} // prints the selected value
            renderinput={params => (
                <Typography {...params} color="success" level="title-lg" variant="solid" />
                //<TextField {...params} label="Label" variant="outlined" fullWidth />
            )}
          />;

}

