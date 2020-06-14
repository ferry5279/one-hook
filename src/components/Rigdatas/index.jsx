import React,{ useState,useEffect } from 'react'
export default function Rigdatas(props){
 console.log(props,22)
  const { rigData } = props;
  return (
    <div>
    {
      rigData.map(v => {
        return <p key={v.cid}>{v.title}</p>
      })
     }
  </div>
  )
}