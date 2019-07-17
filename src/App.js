import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {List, Card, Avatar, Icon, Empty, Carousel} from "antd";


function onCarouselChange(a, b, c) {
  console.log(a, b, c);
}

const listData = [
  {
    title: 'Title 1',
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

  return (
    <div className="App">
      <Card title="Card Title">

        <Carousel autoplay afterChange={onCarouselChange} dotPosition={'top'}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>

        {isListAvailable ?

            <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 4,
                  xl: 4,
                  xxl: 4,
                }}
                itemLayout="horizontal"
                size="small"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 8,
                }}
                dataSource={listData}
                // footer={
                //   <div>
                //     <b>ant design</b> footer part
                //   </div>
                // }
                renderItem={item => (
                    <List.Item>
                      <Card
                          hoverable
                          cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                          }
                          actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
                      >
                        <Card.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                            title={item.title}
                            description="This is the description"
                        />
                      </Card>
                    </List.Item>
                )}
            />
            :
            <Empty/>
        }
        </Card>
    </div>
  );
}

export default App;
