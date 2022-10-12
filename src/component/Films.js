import React ,{useState,useEffect}from 'react'

import "./films.css"

const Films = ({films}) => {
    const [data,setData] = useState([])
 
  useEffect(() => {
     getData()
  },[])
  
 const  getData = async () => {
    
     try{
      let array = []
      for(let i=0;i<films.length;i++)
      {
        let det=films[i]
       let data = await fetch(`${det}`)
       let employee = await data.json()
    //   console.log(employee.title)
       array.push(employee.title)
       //array = [...array,...employee]
      }

      setData(array)
      
     }
     catch(e) {
      console.log(e)
     }
     
    }
   
  
  
  return (
    <div>
        <h3 style={{textAlign:"center"}}>Films </h3>
      {data.map((user,i) => (
         <div  className="filmsList" key={i} >
            <div>{i+1}</div>
        <div>{user}</div>
        
        </div>
        
      ))}
    </div>
  )
}

export default Films
