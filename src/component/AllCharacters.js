import React,{useState,useEffect, Fragment} from 'react'
import axios from "axios";
import "./allcharacter.css"
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';




const AllCharacters = () => {
  const [post, setPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const resultPerPage=10;

const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    };


  useEffect( () => {
 
     axios.get(`https://swapi.dev/api/people/?page=${currentPage}`).then((response) => {
      setPost(response.data);
      
    });
  }, [currentPage]);

  
  if (!post) return null;
 const productCount=post.count


     //console.log(post)

   
  return (
    <Fragment>
  <div className='container'>
      <h1 className='heading'>Starwars API</h1>
     
      <div className='completelist'>

      {post.results.map((user,i) => (
        <Link className='link' key={user.name} to ={`/people/${i+1+currentPage*10-10}`}> <div  className="List" >
        <div>{user.name}</div>
        <button>Favourites</button>
        </div></Link>
        
      ))}

      </div>
      {resultPerPage < productCount && (
            <div className="paginationBox">

              <Pagination
              
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
      </div>
    </Fragment>
   
  )
}


export default AllCharacters
