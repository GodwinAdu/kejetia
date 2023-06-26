import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const ReturnVisit = () => {
    const [returnVisit, setReturnVisit] = useState(0)
    
    useEffect(() =>{
        const today = new Date();
        const dateString = today.toISOString().slice(0, 10);
    
        const query = `*[_type == "others" && title == "Return Visit" && date == "${dateString}"]{quantity}`;
    
    
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
        console.log(datas)
        const value = datas?.map((data) =>{
            return data.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setReturnVisit((prev)=> prev + sum)
        })
    },[])
  return (
    <>
      <div>{returnVisit}</div>
    </>
  )
}

export default ReturnVisit