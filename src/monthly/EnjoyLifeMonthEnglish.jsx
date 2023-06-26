import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const EnjoyLifeMonthEnglish = () => {
    const [enjoyLifeMonthEnglish, setEnjoyLifeEnglish] = useState(0)
    
    useEffect(() =>{
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().slice(0, 10);
      const query = `*[_type == "book" && title == "Enjoy Life Forever" && language == "English"  && date >= "${startOfMonth}" && date <= "${endOfMonth}"]{quantity}`;
  
    
    
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
            setEnjoyLifeEnglish((prev)=> prev + sum)
        })
    },[])
  return (
    <div>{enjoyLifeMonthEnglish}</div>
  )
}

export default EnjoyLifeMonthEnglish