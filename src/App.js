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
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
  {
    title: 'Title 7',
  },
  {
    title: 'Title 8',
  },
  {
    title: 'Title 9',
  },
  {
    title: 'Title 10',
  },
];


function App() {

  const isListAvailable = listData.length > 0;
  const [dataList, setDataList] = useState(listData);


  return (
    <div className="App">
      <Card title="Card Title">

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
