import React,{ useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import './styles.less';
import { Tables ,Addbtn,Modals} from '@@';
import { getData ,dellData,searData,addData,editData } from '@/actions/home'
function Home(props) { 
  const { data } = props;
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [obj, setObj] = useState({});
  const showModal = () => {
    setTitle('添加')
    setVisible(true)
  };
  const handleOk = e => {
    setVisible(!visible)
  };
  //添加
  const addfn = async value => {
    const res = await props.addData(value)
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props.getData()
    }
  }
  //编辑
  const update = value => {
    setTitle('编辑')
    setObj({name:value.name,id:value.id,age:value.age})
    setVisible(!visible)
  }
  //确定编辑
  const sureEdit = async value => {
    const res = await props.editData({...value,id:localStorage.getItem('id')})
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props.getData()
    }
  }
  //默认数据
  useEffect(() => {
    props.getData()
  }, [])
  //删除
  const dell = async val => {
    const res = await props.dellData({id:val})
    message.info(res.payload.info)
    if (res.payload.status === '200') {
      props.getData()
    }
  }
  //搜索
  const sear = async val => {
    const res = await props.searData({ name: val })
    props.getData()
  }
  return (
    <div className="pages-home">
      <Addbtn sear={sear} showModal={showModal} />
      <Tables data={data} dell={dell} update={update}/>
      <Modals visible={visible}
        handleOk={handleOk}
        addfn={addfn}
        title={title}
        obj={obj}
        sureEdit={sureEdit}
      />
    </div>
  )
}
export default connect ( state => {
  return {
   data: state.home.data, 
  }
},{
    getData,
    dellData,
    searData,
    addData,
    editData
})(Home)