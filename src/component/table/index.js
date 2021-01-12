import React from "react";
import { Table } from 'antd';

export const AntdTable = ({columns, data, expand}) =>{
    return (
<Table columns={columns} dataSource={data} expandable={expand}/>
    );
}
  