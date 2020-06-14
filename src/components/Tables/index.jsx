import React from 'react'
import { Table } from 'antd';
import {
  EditOutlined,
  MinusCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
export default function Tables(props) {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: '操作',
      dataIndex: 'id',
      width: '30%',
      key: 'id',
      render: (id,list) => {
        return (
          <p className='icon_p'>
            <span><MinusCircleOutlined /></span>
            <span onClick={()=> updatefn(id,list)}><EditOutlined /></span>
            <span onClick={()=> dellfn(id)}><DeleteOutlined /></span>
          </p>
        )
      }
    },
  ];
  const { data } = props;
  const dellfn = (id) =>{
    props.dell(id)
  }
  const updatefn =(id,list)=>{
    props.update(list)
  }
  return (
    <div className="comp_tables">
      <Table rowKey='id' columns={columns} dataSource={data} size='small'/>
    </div>
  )
}
