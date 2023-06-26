import React,{useState,useEffect} from 'react'
import { client } from '../libs/client'

const LessonBibleEnglish = () => {
    const [lessonBibleEnglish, setLessonBibleEnglish] = useState(0)
    
    useEffect(() =>{
        // Query for books saved this year
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1).toISOString().slice(0, 10);
        const endOfYear = new Date(today.getFullYear(), 11, 31).toISOString().slice(0, 10);
        const query = `*[_type == "book" && title == "Lessons From the Bible" && language == "English" && date >= "${startOfYear}" && date <= "${endOfYear}"]{quantity}`;
    
    
    // Fetch books with the specified title
    client.fetch(query).then((datas) => {
        // Calculate daily totals for each language
    
        const value = datas?.map((data) => {
            return data?.quantity
        })

        const sum = value?.reduce((result,item) => {
             return result + item
            },0);
            setLessonBibleEnglish((prev)=> prev + sum)
        })
    },[])
  return (
    <>
      <div>{lessonBibleEnglish}</div>
    </>
  )
}

export default LessonBibleEnglish