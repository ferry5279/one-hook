import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navs, Leftnav, Rigdatas } from '@@'
import './style.less'
import { get_left_data ,get_rig_data } from '@/actions/lian'
function Lian(props) {
  console.log(props)
  const { leftData ,rigData } = props;
  const { cid } = props.match.params || 492;
  useEffect(()=>{
    props.get_left_data()
  }, [])
  useEffect(()=>{
    props.get_rig_data({cid})
  },[cid])
  return (
    <div className="">
      <div id='nnn'>
        <Leftnav leftData={leftData} />
        <Rigdatas rigData={rigData}/>
      </div>
      <Navs />
    </div>
  )
}
export default connect(state=>{
  return {
    leftData: state.lian.leftData,
    rigData:state.lian.rigData
  }
}, {
    get_left_data,
    get_rig_data
})(Lian)
