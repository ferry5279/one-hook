import React from 'react'
import { Button, Input } from 'antd';
import './style.less'
const { Search } = Input;
export default function Addbtn(props) {
  const { sear } = props;
  const showModal = () => {
    props.showModal()
    };
  return (
    <div className = 'btn'>
      <Button type="primary" onClick={showModal}>添加</Button>
      <Search
      placeholder="搜索"
      enterButton="Search"
      size="middle"
      onSearch={value => sear(value)}
    />
    </div>
  )
}