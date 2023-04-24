import React ,{useState}from 'react'
import {useBlogsData} from './Context'
export default function Create() {
    const [blogstitle,setblogstitle]=useState("")
    const [blogsnip,setblogsnip]=useState("")
    const [blogbody,setblogbody]=useState("")
    const {datas}=useBlogsData()
  return (
    <div style={{ contentAlign: "center", justifyItems: "center", contentAlign: "center", padding: "10px",position:"relative",left:"40%",top:"30vh"}}>
    <div style={{}}>
        <label htmlFor="blogname">Blog title</label>
        <br></br>
        <input type='text' name='blogname'  onChange={(e) => { setblogstitle(e.target.value) }}></input>
        <br></br>
        <label htmlFor="blogsnip">Blog snippet</label>
        <br></br>
        <input type='text' name='blogsnip' onChange={(e) => { setblogsnip(e.target.value) }}></input>
        <br>
        </br>
        <label htmlFor="blogbody">Blog body</label>
        <br></br>
        <textarea  onChange={(e) => { setblogbody(e.target.value) }}></textarea>
        <br></br>
        <button className='btn btn-danger' onClick={()=>{datas(blogstitle,blogsnip,blogbody);setblogbody("");setblogsnip("");setblogbody("")}}>Submit</button>
    </div>
    
</div>
  )
}
