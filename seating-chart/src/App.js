import logo from './logo.svg';
import './App.css';
import sctemplate from './sctemplate.svg';

import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Autocomplete from '@mui/joy/Autocomplete';
import Typography from '@mui/joy/Typography';

const name_table_map = [
{name: 'Malik Ismail', id: 19},
{name: 'Suleman Tejpar', id: 19},
{name: 'Daulat Tejpar', id: 19},
{name: 'Subzali Tejpar', id: 19},
{name: 'Dilshad Ismail', id: 19},
{name: 'Murad Ali Ismail', id: 19},
{name: 'Gulbanu Valiani', id: 19},
{name: 'Taufiq Valiani', id: 19},
{name: 'Nazneen Tejpar', id: 19},
{name: 'Azraa Janmohamed', id: 19},
{name: 'Vikram Shanker', id: 18},
{name: 'Sepehr Ebadi', id: 18},
{name: 'Neel Kawale', id: 18},
{name: 'Mika Castaldo', id: 18},
{name: 'Cecilia Bermeo', id: 18},
{name: 'Melissa Argiros', id: 18},
{name: 'Anna Mueller', id: 18},
{name: 'Amyna Ismail', id: 18},
{name: 'Zarif Badruddin', id: 30},
{name: 'Nasreen Badruddin', id: 30},
{name: 'Daulat Janmohamed', id: 30},
{name: 'Munira Janmohamed', id: 30},
{name: 'Zahir Janmohamed', id: 30},
{name: 'Dr. Amir Janmohamed', id: 30},
{name: 'Zahida Janmohamed', id: 30},
{name: 'Mumtaz Ladak', id: 30},
{name: 'Mohammad Pirani', id: 30},
{name: 'Shamim Pirani', id: 30},
{name: 'Sadiq Shamji', id: 29},
{name: 'Aqib Khan', id: 29},
{name: 'James Godfrey', id: 29},
{name: 'Alyf Janmohamed', id: 29},
{name: 'Dr. Denisha Puvitharan', id: 29},
{name: 'Dr. Alexandra Basden', id: 29},
{name: 'Dr. Khatija Anjum', id: 29},
{name: 'Alisha Adam', id: 29},
{name: 'Mohsin Saleh', id: 1},
{name: 'Maryam Saleh', id: 1},
{name: 'Esha Karim', id: 1},
{name: 'Fahim Karim', id: 1},
{name: 'Dr. Meera Saleh', id: 1},
{name: 'Dr. Mehboob Saleh', id: 1},
{name: 'Aziz Saleh', id: 1},
{name: 'Karima Saleh', id: 1},
{name: 'Faizaan Saleh', id: 1},
{name: 'Sadiq Saleh', id: 1},
{name: 'Mehdi Kanji', id: 2},
{name: 'Shenaz Jivraj', id: 2},
{name: 'Amin Jivraj', id: 2},
{name: 'Kherunissa Husein', id: 2},
{name: 'Muhammed Husein', id: 2},
{name: 'Sikander Mehrani', id: 2},
{name: 'Kamar Mehrani', id: 2},
{name: 'Nissa Husein', id: 2},
{name: 'Akbar Husein', id: 2},
{name: 'Laila Kanji', id: 2},
{name: 'Dr. Jalal Khimani', id: 3},
{name: 'Husseinally Hasham', id: 3},
{name: 'Suleman Chunara', id: 3},
{name: 'Gulzar Chunara', id: 3},
{name: 'Neima Hasham', id: 3},
{name: 'Shamsa Jiwani', id: 3},
{name: 'Hassan Hasham', id: 3},
{name: 'Rahil Dawood', id: 3},
{name: 'Amynah Hasham Khimani', id: 3},
{name: 'Hamida Bhimani', id: 4},
{name: 'Murad Bhimani', id: 4},
{name: 'Farida Nensi', id: 4},
{name: 'Nazir Nensi', id: 4},
{name: 'Mumtaz Adatia', id: 4},
{name: 'Hafiza Adatia', id: 4},
{name: 'Salim Pradhan', id: 4},
{name: 'Nazlin Pradhan', id: 4},
{name: 'Shams Kassamali', id: 4},
{name: 'Farida Kassamali', id: 4},
{name: 'Joe Eilers', id: 5},
{name: 'Min Jae Yoo', id: 5},
{name: 'Min Jung Kim', id: 5},
{name: 'Julia Jacobson', id: 7},
{name: 'Anna Morales', id: 5},
{name: 'Rick Brubaker', id: 5},
{name: 'Eric Persky', id: 5},
{name: 'Sasha Pines', id: 5},
{name: 'Ryan Manucha', id: 6},
{name: 'Jesse Shulman', id: 6},
{name: 'Terry Baggett', id: 6},
{name: 'Roya Rahnejat', id: 6},
{name: 'Nick Gowland', id: 6},
{name: 'Rahul Chandan', id: 6},
{name: 'Henry Zhang', id: 6},
{name: 'Nandana Yadla', id: 6},
{name: 'Shubhi Jain', id: 6},
{name: 'Madeleine Reed', id: 6},
{name: 'Aayush Goel', id: 7},
{name: 'Nicole Miles', id: 7},
{name: 'Stephanie Yi', id: 7},
{name: 'Dr. Byron Song', id: 7},
{name: 'Grace Jin', id: 7},
{name: 'John Kim', id: 7},
{name: 'Jean Marc Wilkie', id: 7},
{name: 'Shloka Sharan', id: 7},
{name: 'Div Mehra', id: 7},
{name: 'Zafar Shariff', id: 8},
{name: 'Farhad Shariff', id: 8},
{name: 'Ali Juma', id: 8},
{name: 'Liyana Jaffer', id: 8},
{name: 'Ali Jaffer', id: 8},
{name: 'Ashraf Shariff', id: 8},
{name: 'Samira Jaffer', id: 8},
{name: 'Nafisa Juma', id: 8},
{name: 'Kamran Shariff', id: 8},
{name: 'Nissa Shariff', id: 8},
{name: 'Nirmeen Valiani', id: 9},
{name: 'Aly Valiani', id: 9},
{name: 'Dr. Zolfa Valiani-Merchant', id: 9},
{name: 'Arshad Merchant', id: 9},
{name: 'Tariq Merchant', id: 9},
{name: 'Farhan Merchant', id: 9},
{name: 'Reza Merchant', id: 9},
{name: 'Amal Ismail-Ladak', id: 9},
{name: 'Elaheh Valiani', id: 9},
{name: 'Sinan Valiani', id: 9},
{name: 'Dr. Yasmin Juma', id: 10},
{name: 'Sakina Mohamed Ismail', id: 10},
{name: 'Firoz Shariff', id: 10},
{name: 'Amina Shariff', id: 10},
{name: 'Shirin Shariff', id: 10},
{name: 'Dr. Nizar Ramzan', id: 10},
{name: 'Amynah Ramzan', id: 10},
{name: 'Diane Pawlowski', id: 10},
{name: 'Rob Debiasio', id: 10},
{name: 'Nazir Juma', id: 10},
{name: 'Laila Moosabhoy', id: 11},
{name: 'Saker Moosabhoy', id: 11},
{name: 'Karim Moosabhoy', id: 11},
{name: 'Zarrina Husein', id: 11},
{name: 'Meena Husein', id: 11},
{name: 'Aly Kurwa', id: 11},
{name: 'Malek Dawood', id: 11},
{name: 'Sadruddin Saleh', id: 11},
{name: 'Sadruddin Saleh + 1', id: 11},
{name: 'Akbar Moosabhoy', id: 11},
{name: 'Sehr Tejpar', id: 12},
{name: 'Zoya Saleh', id: 12},
{name: 'Rahim Saleh', id: 12},
{name: 'Muizz Saleh', id: 12},
{name: 'Yazdan Saleh', id: 12},
{name: 'Dr. Jameel Kanji', id: 12},
{name: 'Faraz Mohamed', id: 12},
{name: 'Mubina Chunara', id: 12},
{name: 'Zoya Ramzan', id: 12},
{name: 'Alyna Moosabhoy', id: 12},
{name: 'Anwar Jessani', id: 13},
{name: 'Feroz Jessani', id: 13},
{name: 'Yasmin Jessani', id: 13},
{name: 'Tazmina Lalani', id: 13},
{name: 'Al Lalani', id: 13},
{name: 'Rumi Keshavjee', id: 13},
{name: 'Zeenat Keshavjee', id: 13},
{name: 'Sultana Jessani', id: 13},
{name: 'Sara Flamm', id: 14},
{name: 'Nicole Barman', id: 14},
{name: 'Sandy Uwimana', id: 14},
{name: 'Sivakami Sambasivam', id: 14},
{name: 'Niyat Mulugheta', id: 14},
{name: 'Summer Carter', id: 14},
{name: 'Christian Smith', id: 14},
{name: 'Phuthi Tsatsi', id: 17},
{name: 'Nick Thiros', id: 14},
{name: 'Jeff Weaver', id: 15},
{name: 'Kenny Chow', id: 15},
{name: 'Neil MacAlasdair', id: 15},
{name: 'Alexandra Forrester', id: 15},
{name: 'Nathan Kong', id: 15},
{name: 'Will Ellwood', id: 15},
{name: 'Caroline Seiler', id: 15},
{name: 'Kyra Mackenzie', id: 15},
{name: 'Ryan Falcone', id: 15},
{name: 'Arjun Biyani', id: 15},
{name: 'Shafik Karmali', id: 16},
{name: 'Dr. Amina Lalani', id: 16},
{name: 'Nalina Kassam', id: 16},
{name: 'Dr. Saleem Kassam', id: 16},
{name: 'Dr. Salma Jadavji', id: 16},
{name: 'Moyez Jadavji', id: 16},
{name: 'Nawaz Gulam', id: 16},
{name: 'Lazeena Gulam', id: 16},
{name: 'Khaliya Gulam', id: 16},
{name: 'Francesca Hine', id: 17},
{name: 'Sarah Davis', id: 17},
{name: 'Gautam Kapur', id: 20},
{name: 'Sharon Ravindran', id: 17},
{name: 'Will Widera', id: 17},
{name: 'Raj Tilwa', id: 17},
{name: 'Avani Dhamsania', id: 17},
{name: 'Jocelyne Munoz', id: 17},
{name: 'Sabrina Chandrani', id: 17},
{name: 'Curtis Urbanowicz', id: 17},
{name: 'Shivam Patel', id: 7},
{name: 'Dr. Ashna Asim', id: 20},
{name: 'Dr. Chantal Valiquette', id: 20},
{name: 'Aaron Tsang', id: 20},
{name: 'Dr. Shikha Kuthiala', id: 20},
{name: 'Dr. Nancy Vu', id: 20},
{name: 'Vishal Babu', id: 20},
{name: 'Meera Hejmadi', id: 20},
{name: 'Elena Arida', id: 20},
{name: 'Anthony Rangel', id: 20},
{name: 'Dr. Maria Georgescu', id: 21},
{name: 'Laila Keshavjee', id: 21},
{name: 'Raisa Jadavji', id: 21},
{name: 'Adil Gulam', id: 21},
{name: 'Rehan Jadavji', id: 21},
{name: 'Imara Dhalla', id: 21},
{name: 'Aliza Mohamed', id: 21},
{name: 'Imran Gulam', id: 21},
{name: 'Bill Poldon', id: 21},
{name: 'Dr. Rachel Blair-Poldon', id: 21},
{name: 'Amin Jiwani', id: 22},
{name: 'Dr. Amina Kara', id: 22},
{name: 'Dr. Zul Kara', id: 22},
{name: 'Nauvzer Babul', id: 22},
{name: 'Anisha Babul', id: 22},
{name: 'Dr. Shelina Jessa', id: 22},
{name: 'Dr. Karim Jessa', id: 22},
{name: 'Dr. Moyez Rajwani', id: 22},
{name: 'Senifa Rajwani', id: 22},
{name: 'Zeenat Jiwani', id: 22},
{name: 'Dr. Shemin Kurji', id: 23},
{name: 'Dr. Karim Kurji', id: 23},
{name: 'Murray Metcalfe', id: 23},
{name: 'Louise Packard Metcalfe', id: 23},
{name: 'Nasir Noormohamed', id: 23},
{name: 'Tazmin Merali', id: 23},
{name: 'Kate Banting', id: 23},
{name: 'Alex Fung', id: 23},
{name: 'Mr. Brennan', id: 23},
{name: 'Mrs. Brennan', id: 23},
{name: 'Mohamed Manji', id: 24},
{name: 'Jamalu Gillani', id: 24},
{name: 'Asmita Gillani', id: 24},
{name: 'Glyn Boatswain', id: 24},
{name: 'Shamsh Kassim-Lakha', id: 24},
{name: 'Dr. Karim Merali', id: 24},
{name: 'Yasmin Merali', id: 24},
{name: 'Aitmadibanu Nimet Kara', id: 24},
{name: 'Aitmadi Barkat Kara', id: 24},
{name: 'Alim Hassam', id: 25},
{name: 'Dr. Sana Virani', id: 25},
{name: 'Dr. Fazila Lalani', id: 25},
{name: 'Ayson Lukose', id: 25},
{name: 'Issah Lukose', id: 25},
{name: 'James Lukose', id: 25},
{name: 'Dr. Hanif Gilani', id: 25},
{name: 'Dr. Ayaz Kurji', id: 25},
{name: 'Alisha Kurji', id: 25},
{name: 'Zafrin Nurmohamed', id: 25},
{name: 'Zain Punjwani', id: 26},
{name: 'Amyna Kanji', id: 26},
{name: 'Alisha Dhanji', id: 26},
{name: 'Dr. Tehzeen Dhanji', id: 26},
{name: 'Zain Manji', id: 26},
{name: 'Jennifer McNamee', id: 26},
{name: 'Raheel Manji', id: 26},
{name: 'Jordan Pinto', id: 26},
{name: 'Dr. Safina Dhanji', id: 26},
{name: 'Salima Fakirani', id: 26},
{name: 'Renuka Sharma', id: 27},
{name: 'Ali Noormohamed', id: 27},
{name: 'Karim Noormohamed', id: 27},
{name: 'Elina Taillon', id: 27},
{name: 'Hussein Kermally', id: 27},
{name: 'Kaiz Alarakyia', id: 27},
{name: 'Rahim Noormohamed', id: 27},
{name: 'Lina Noormohamed', id: 27},
{name: 'Kaia Noormohamed', id: 27},
{name: 'Azra Noormohamed', id: 27},
{name: 'Amaan Badruddin', id: 28},
{name: 'Zohreen Badruddin', id: 28},
{name: 'Arman Jiwa', id: 28},
{name: 'Selena Esmail', id: 28},
{name: 'Sophia Esmail', id: 28},
{name: 'Sabrina Jiwa', id: 28},
{name: 'Aziza Janmohamed', id: 28},
{name: 'Elizabeth Grant', id: 28},
{name: 'Azam Janmohamed', id: 28},
{name: 'Gulshan Merali', id: 31},
{name: 'Arzina Murji', id: 31},
{name: 'Rosy Madatali', id: 31},
{name: 'Shully Rajani', id: 31},
{name: 'Daulat Abdulla', id: 31},
{name: 'Roshan Manji', id: 31},
{name: 'Yasmin Janmohamed', id: 31},
{name: 'Shiraz Janmohamed', id: 31},
{name: 'Dr. Vipin Mithia', id: 31},
{name: 'Susmita Mithia', id: 31},
{name: 'Noorin Jamal', id: 32},
{name: 'Anisha Rajani', id: 32},
{name: 'Aleem Rajani', id: 32},
{name: 'Shafeen Rajani', id: 32},
{name: 'Shyrose Rajani', id: 32},
{name: 'Melanie Janmohamed', id: 32},
{name: 'Hafiz Janmohamed', id: 32},
{name: 'Nadim Jamal', id: 32},
{name: 'Aria Jamal', id: 32},
{name: 'Ayla Jamal', id: 32},
{name: 'Rob Summers', id: 33},
{name: 'Salima Ladak', id: 33},
{name: 'Dr. Karim Keshavjee', id: 33},
{name: 'Dr. Zahra Bhanji', id: 33},
{name: 'Sheila Lee', id: 33},
{name: 'Dr. George Lee', id: 33},
{name: 'Karim Manji', id: 33},
{name: 'Shelina Manji', id: 33},
{name: 'Shelina Ladak', id: 33},
{name: 'Kashif Fadaie-Nia', id: 33},
{name: 'Imaan Moloo', id: 34},
{name: 'Sajjad Sheikh', id: 34},
{name: 'Tazim Sheikh', id: 34},
{name: 'Amin Shivji', id: 34},
{name: 'Khushi Shivji', id: 34},
{name: 'Shirin Moloo', id: 34},
{name: 'Amin Moloo', id: 34},
{name: 'Zenita Moloo', id: 34},
{name: 'Shelina Gulamani', id: 35},
{name: 'Alnoor Gulamani', id: 35},
{name: 'Alkarim Dhanji', id: 35},
{name: 'Dr. Shelina Dhanji', id: 35},
{name: 'Dr. Ally Prebtani', id: 35},
{name: 'Aleena Azhar', id: 35},
{name: 'Dr. Noor Nagji', id: 35},
{name: 'Salim Moosa', id: 35},
{name: 'Dr. Ameen Keshavjee', id: 35},
{name: 'Nazlin Keshavjee', id: 35},
{name: 'Dr. Keean Nanji', id: 36},
{name: 'Dr. Shiraz Maknojia', id: 36},
{name: 'Shamim Maknojia', id: 36},
{name: 'Rabia Lakhani', id: 36},
{name: 'Hanif Lakhani', id: 36},
{name: 'Amin Mamdani', id: 36},
{name: 'Salimah Mamdani', id: 36},
{name: 'Farah Nanji', id: 36},
{name: 'Hanif Nanji', id: 36},
{name: 'Jasmine Nanji', id: 36},
{name: 'Dr. Momina Mastoor', id: 38},
{name: 'Dr. Nashila Mohamed', id: 38},
{name: 'Dr. Rumina Mussani', id: 38},
{name: 'Dr. Asmitha Gangani', id: 38},
{name: 'Alnoor Gangani', id: 38},
{name: 'Arif Merchant', id: 38},
{name: 'Dr. Sharmeen Feerasta', id: 38},
{name: 'Dr. Ayesha Nichols', id: 38},
{name: 'Craig Nichols', id: 38},
{name: 'Dr. Adnan Hyder', id: 38},
{name: 'Dr. Rukhsana Abdullah', id: 39},
{name: 'Asif Abdullah', id: 39},
{name: 'Dr. Kashif Latif', id: 39},
{name: 'Dr. Kaleem Haque', id: 39},
{name: 'Dr. Uzma Haque', id: 39},
{name: 'Dr. Munaza Akhtar', id: 39},
{name: 'Dr. Faisal Shamshad', id: 39},
{name: 'Aziz Malik', id: 39},
{name: 'Dr. Zeenat Malik', id: 39},
{name: 'Alkarim Abdulla', id: 40},
{name: 'Shoeb Bandali', id: 40},
{name: 'Shafina Bandali', id: 40},
{name: 'Rishma Esmail', id: 40},
{name: 'Firon Esmail', id: 40},
{name: 'Amin Jiwa', id: 40},
{name: 'Salima Jiwa', id: 40},
{name: 'Tamiza Janmohamed', id: 40},
{name: 'Alnoor Janmohamed', id: 40},
{name: 'Mohammed Thawer', id: 41},
{name: 'Shyrose Thawer', id: 41},
{name: 'Aliya Philip', id: 41},
{name: 'Khyree Philip', id: 41},
{name: 'Khimani Philip', id: 41},
{name: 'Lester Philip', id: 41},
{name: 'Omar Hanchard', id: 41},
{name: 'Omari Hanchard', id: 41},
{name: 'Noah Hanchard', id: 41},
{name: 'Nelisha Hanchard', id: 41},
{name: 'Ariya Rajani', id: 42},
{name: 'Kayla Rajani', id: 42},
{name: 'Adam Janmohamed', id: 42},
{name: 'Zain Janmohamed', id: 42},
{name: 'Nabil Thawer', id: 42},
{name: 'Imran Janmohamed', id: 42},
{name: 'Rhiana Rajani', id: 42},
{name: 'Maya Rajani', id: 42},
];

const titletheme =  extendTheme({
  typography: {
    fontFamily: 'Serathine',
  },
  titleheader: {
    flexGrow: 1,
    alignItems: 'center',
    background: "#FFFFFF",
    typography: {
      fontFamily: 'Serathine',
    },
  },
  tablenumber: {
    alignItems: 'center',
    background: "#FFFFFF",
  }
});


export default function App() {
  return  <div className="wrapper">
           <div className="titulo">
            <TitleHeader />
           </div>
           <div className="main">
            <DropDown />
            <div className="spacer"></div>
            <TableNumber />
            <div className="spacer"></div>
            <SeatingChartImage />
          </div>
         </div>
}

function dropdown_onChange(event, value) {
    document.getElementById('_tableNumber').innerHTML= value ? ("You are seated at Table " + value.id) : '';
    var e = document.getElementById('seating-img');
    if (value == null) {
        e.src = "./sc/sctemplate.svg";
    } else if (value.id == 1) {
        e.src = "./sc/sc1.svg";
    } else if (value.id == 2) {
        e.src = "./sc/sc2.svg";
    } else if (value.id == 3) {
        e.src = "./sc/sc3.svg";
    } else if (value.id == 4) {
        e.src = "./sc/sc4.svg";
    } else if (value.id == 5) {
        e.src = "./sc/sc5.svg";
    } else if (value.id == 6) {
        e.src = "./sc/sc6.svg";
    } else if (value.id == 7) {
        e.src = "./sc/sc7.svg";
    } else if (value.id == 8) {
        e.src = "./sc/sc8.svg";
    } else if (value.id == 9) {
        e.src = "./sc/sc9.svg";
    } else if (value.id == 10) {
        e.src = "./sc/sc10.svg";
    } else if (value.id == 11) {
        e.src = "./sc/sc11.svg";
    } else if (value.id == 12) {
        e.src = "./sc/sc12.svg";
    } else if (value.id == 13) {
        e.src = "./sc/sc13.svg";
    } else if (value.id == 14) {
        e.src = "./sc/sc14.svg";
    } else if (value.id == 15) {
        e.src = "./sc/sc15.svg";
    } else if (value.id == 16) {
        e.src = "./sc/sc16.svg";
    } else if (value.id == 17) {
        e.src = "./sc/sc17.svg";
    } else if (value.id == 18) {
        e.src = "./sc/sc18.svg";
    } else if (value.id == 19) {
        e.src = "./sc/sc19.svg";
    } else if (value.id == 20) {
        e.src = "./sc/sc20.svg";
    } else if (value.id == 21) {
        e.src = "./sc/sc21.svg";
    } else if (value.id == 22) {
        e.src = "./sc/sc22.svg";
    } else if (value.id == 23) {
        e.src = "./sc/sc23.svg";
    } else if (value.id == 24) {
        e.src = "./sc/sc24.svg";
    } else if (value.id == 25) {
        e.src = "./sc/sc25.svg";
    } else if (value.id == 26) {
        e.src = "./sc/sc26.svg";
    } else if (value.id == 27) {
        e.src = "./sc/sc27.svg";
    } else if (value.id == 28) {
        e.src = "./sc/sc28.svg";
    } else if (value.id == 29) {
        e.src = "./sc/sc29.svg";
    } else if (value.id == 30) {
        e.src = "./sc/sc30.svg";
    } else if (value.id == 31) {
        e.src = "./sc/sc31.svg";
    } else if (value.id == 32) {
        e.src = "./sc/sc32.svg";
    } else if (value.id == 33) {
        e.src = "./sc/sc33.svg";
    } else if (value.id == 34) {
        e.src = "./sc/sc34.svg";
    } else if (value.id == 35) {
        e.src = "./sc/sc35.svg";
    } else if (value.id == 36) {
        e.src = "./sc/sc36.svg";
    } else if (value.id == 37) {
        e.src = "./sc/sc37.svg";
    } else if (value.id == 38) {
        e.src = "./sc/sc38.svg";
    } else if (value.id == 39) {
        e.src = "./sc/sc39.svg";
    } else if (value.id == 40) {
        e.src = "./sc/sc40.svg";
    } else if (value.id == 41) {
        e.src = "./sc/sc41.svg";
    } else if (value.id == 42) {
        e.src = "./sc/sc42.svg";
    }
}

export function TitleHeader() {
    return <Typography level="h1" align="center" sx={{ fontFamily: 'Serathine' }}
              className = {titletheme.titleheader}
           >Seating Chart</Typography>
}

export function DropDown() {
  return  <Autocomplete sx={{ color: "#AF9B6D"}}
            className = '_dropdown'
            placeholder = "Enter your name"
            options={name_table_map}
            getOptionLabel={option => option.name}
            onChange={dropdown_onChange}
          />;
}

export function TableNumber() {
    return (<Typography align="center" sx={{ color: "#AF9B6D", background: "#FFFFFF" }}
             id = '_tableNumber'
            >
           </Typography>
           )
}

export function SeatingChartImage() {
    return <img src="./sc/sctemplate.svg" id="seating-img" text-align="center" style={{ marginLeft: "10%", width: "80%" }} />
}
