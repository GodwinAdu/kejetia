import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const WatchtowerMonthEnglish = () => {
    const [watchtowerEnglish, setWatchtowerEnglish] = useState(0)
    
    useEffect(() =>{
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().slice(0, 10);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().slice(0, 10);
      const query = `*[_type == "magazine" && title == "Watch Tower" && language == "English" && date >= "${startOfMonth}" && date <= "${endOfMonth}"]{quantity}`;

    
    
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
    
        const value = datas?.map((data) => {
            return data?.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setWatchtowerEnglish((prev)=> prev + sum)
        })
    },[])
  return (
    <>
      <div>{watchtowerEnglish}</div>
    </>
  )
}

export default WatchtowerMonthEnglish