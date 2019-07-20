// Main React Import
import React, {useState} from 'react';
// Content components Imports
import {Card, Icon, List} from "antd";
import CarListItemDrawer from "./CarListITemDrawer";



function CarListItem(props) {

    const [drawerVisibility, setDrawerVisibility] = useState(false);

    return (
        <List.Item>
            <Card
                hoverable
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[<Icon type="setting"/>, <p onClick={() => setDrawerVisibility(true)}>More Information</p>, <Icon type="ellipsis"/>]}
            >
                <Card.Meta
                    title={props.itemData.title}
                    description="This is the description"
                />
            </Card>

            <CarListItemDrawer itemData={props.itemData} drawerVisibility={drawerVisibility} setDrawerVisibility={setDrawerVisibility}/>


        </List.Item>
    );
}

export default CarListItem;