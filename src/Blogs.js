import React from 'react'
import {useBlogsData} from './Context'
export default function Blogs() {
  const {totaldata}=useBlogsData()
  return (
    <div>
      <h3>ALL BLOGS</h3>
      {
      totaldata.map(value=>{
        return(
          <div>
            <h2>{value}</h2>
            </div>
        )
      })
      
      }</div>
  )
}

