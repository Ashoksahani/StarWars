import React,{useEffect,useState} from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Films from "./Films.js"


const Details = () => {

  const [post, setPost] = useState(null);

  


const {id}=useParams();
  useEffect( () => {
  
    axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
     setPost(response.data);
     
   });
   
 }, [id]);

 
 if (!post) return null;
 const films=post.films
 //console.log(films)
return (
    

    <div className='container'><h1>Character  Details</h1>
    <div className='namecontainer'>
    <div className='bestdetails'>
    <div><h5>Name </h5><span>:-</span> {post.name}</div>
    <div><h5>Height </h5><span>:-</span> {post.height}</div>
    <div><h5>Mass </h5><span>:-</span> {post.mass}</div>
    <div><h5>Hair_color </h5><span>:-</span>{post.hair_color}</div>
    <div><h5>Skin_color </h5><span>:-</span>{post.skin_color}</div>
    <div><h5>Eye_color </h5><span>:-</span> {post.eye_color} </div>
    <div><h5>Birth_year </h5><span>:-</span> {post.birth_year}  </div>
    <div><h5>Gender </h5><span>:-</span> {post.gender}</div>
    </div>
    <div className='filmdetails'>
      <Films films={films}/>
    </div>
    </div>
    </div>
  )
}

export default Details




// "name": "Luke Skywalker", 
// "height": "172", 
// "mass": "77", 
// "hair_color": "blond", 
// "skin_color": "fair", 
// "eye_color": "blue", 
// "birth_year": "19BBY", 
// "gender": "male", 