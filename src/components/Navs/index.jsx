import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'
export default function Navs(props) {
 
  
  return (
    <div className="comp_navs">
      <div className='nav'><NavLink to='/lian/one' exact>首页</NavLink></div>
      <div className='nav'><NavLink to='/lian/two' >推荐</NavLink></div>
      <div className='nav'><NavLink to='/lian/one'>分类</NavLink></div>
      <div className='nav'><NavLink to='/lian/two'>购物车</NavLink></div>
      <div className='nav'><NavLink to='/lian/one'>我的</NavLink></div>      

    </div>
  )
}
