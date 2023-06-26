import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const ListenGodEnglish = () => {
    const [listenGodEnglish, setListenGodEnglish] = useState(0)
    
    useEffect(() =>{
        const today = new Date();
        const dateString = today.toISOString().slice(0, 10);
    
        const query = `*[_type == "brochure" && title == "Listen to God" && language == "English" && date == "${dateString}"]{quantity}`;
    
    
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
    
        const value = datas?.map((data) => {
            return data?.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setListenGodEnglish((prev)=> prev + sum)
        })
    },[])
  return (
    <>
      <div>{listenGodEnglish}</div>
    </>
  )
}

export default ListenGodEnglish