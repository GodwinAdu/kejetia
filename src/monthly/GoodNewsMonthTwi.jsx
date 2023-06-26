import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const GoodNewsTwi = () => {
    const [goodNewsTwi, setGoodNewsTwi] = useState(0)
    
    useEffect(() =>{
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().slice(0, 10);
      const query = `*[_type == "brochure" && title == "Good News" && language == "Twi"  && date >= "${startOfMonth}" && date <= "${endOfMonth}"]{quantity}`;
    
    
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
    
        const value = datas?.map((data) => {
            return data?.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setGoodNewsTwi((prev)=> prev + sum)
        })
    },[])
  return (
    <>
      <div>{goodNewsTwi}</div>
    </>
  )
}

export default GoodNewsTwi