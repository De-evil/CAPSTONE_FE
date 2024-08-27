import React, { useEffect, useState } from 'react'
import WorkCards from '../components/WorkCards';

const BestWorks = () => {
    const [work, setWork] = useState([]);

    useEffect ( () => {
       fetch("https://capstone-be-1-de7q.onrender.com/all-works").then(res => res.json()).then(data => setWork(data.slice(0, 8)))
    },[])

  return (
    <div>
        <WorkCards work={work} headline="Best Works"/>
    </div>
  )
}

export default BestWorks