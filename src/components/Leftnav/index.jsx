import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
export default function Leftnav(props){
 
  const { leftData } = props;
  return (
    <div>
      {
        leftData.map(v => {
          return <p key={v.cid}><NavLink to={`/lian/${v.cid}`}>{v.title}</NavLink></p>
        })
       }
    </div>
  )
}