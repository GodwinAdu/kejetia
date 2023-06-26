import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const AwakeMonthEnglish = () => {
    const [awakeMonthEnglish, setAwakeMonthEnglish] = useState(0)
    
    useEffect(() =>{

        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().slice(0, 10);
        const query = `*[_type == "magazine" && title == "Awake" && language == "English"  && date >= "${startOfMonth}" && date <= "${endOfMonth}"]{quantity}`;
     
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
      console.log('views',datas)
        const value = datas?.map((data) =>{
            return data.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setAwakeMonthEnglish((prev)=> prev + sum)
        })
    },[])

    console.log("monthly awake",awakeMonthEnglish)
  return (
    <>
      <div>{awakeMonthEnglish}</div>
    </>
  )
}

export default AwakeMonthEnglish