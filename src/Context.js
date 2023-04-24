import React, { Component, useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
const BlogsDataprovider = React.createContext()
export function useBlogsData(){
   return useContext(BlogsDataprovider)
}
export function TrainerInfo  (props) {
    const navigate=useNavigate()
    const [totaldata,settotaldata]=useState([])
   function datas(data1,data2,data3){
        settotaldata([...totaldata,data1,data2,data3])
        navigate("/blogs")
   }
    const dataprov={
        totaldata,
        datas
    }
    
        return (
            <BlogsDataprovider.Provider value={dataprov} >
                {props.children}
            </BlogsDataprovider.Provider>
        )
    }

export const BlogsDataConsumer = BlogsDataprovider.Consumer;