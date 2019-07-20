// Main React Import
import React, { Component } from 'react';
// Content components Imports
import {List} from "antd";
import CarListItem from "./CarListItem";


class CarList extends Component {

    render() {
        return (
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
                dataSource={this.props.listData}
                // footer={
                //   <div>
                //     <b>ant design</b> footer part
                //   </div>
                // }
                renderItem={item => (
                    <CarListItem itemData={item}/>
                )}
                />
        );
    }
}

export default CarList;