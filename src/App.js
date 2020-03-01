// Main React Import
import React, { useState } from 'react';
import './App.css';
// antd Design Component Imports
import 'antd/dist/antd.css';
import {Card, Empty} from "antd";
// Content components Imports
import CarList from "./components/list/CarList";
import HeaderCarousel from "./components/HeaderCarousel";


const listData = [
  {
    title: 'Title One',
    description: 'This is a description for title one'
  },
  {
    title: 'Title 2',
    description: 'This is a description for title 2'
  },
  {
    title: 'Title 3',
    description: 'This is a description for title 3'
  },
  {
    title: 'Title 4',
    description: 'This is a description for title 4'
  },
  {
    title: 'Title 5',
    description: 'This is a description for title 5'
  },
  {
    title: 'Title 6',
    description: 'This is a description for title 6'
  },
  {
    title: 'Title 7',
    description: 'This is a description for title 7'
  },
  {
    title: 'Title 8',
    description: 'This is a description for title 8'
  },
  {
    title: 'Title 9',
    description: 'This is a description for title 9'
  },
  {
    title: 'Title 10',
    description: 'This is a description for title 10'
  },
];


function App() {

  const isListAvailable = listData.length > 0;
  const [dataList, setDataList] = useState(listData);


  return (
    <div className="App">
      <Card title="Car Rental Site">

        <HeaderCarousel/>

        {isListAvailable ?

            <CarList listData={dataList}/>
            :
            <Empty/>
        }
        </Card>
    </div>
  );
}

export default App;
