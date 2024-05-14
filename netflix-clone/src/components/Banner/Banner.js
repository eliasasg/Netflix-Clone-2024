import React,{ useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from "../../utils/axios"
import requests from "../../utils/requests"
import "../Banner/banner.css"






const Banner = () => {
    const [movie, setMovie]= useState({});
    useEffect(()=>{
        (async()=>{
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                console.log(request);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error){
                console.log("error", error);
            }
        })()
    }, []);
    function trunate(str,n){
        return str?.length >n ? str.substr(0,n-1)+"..." : str;
    }
  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage: `URL('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    
    }}>

        <div className='browserList'>
            <ul className='browerselct'>
                <li className='tvshow '> <Link className='link' to="https://www.netflix.com/browse/genre/83
">TvShow</Link></li>
                <li className=' movies '><Link className='link' to="https://www.netflix.com/browse/genre/34399
">Movies</Link></li>
                <li  className='catagories'> Catagories 
                <i class='bx bxs-chevron-down droparrow browsers' >  
                    
                        <ul  className=' catagory catagorylist'>
                            <li><Link className='link' to="https://www.netflix.com/">Home</Link>  </li>
                            <li><Link className='link' to="https://www.netflix.com/browse/my-list">My List</Link></li>
                            <li><Link className='link'>Action</Link></li>
                            <li><Link className='link'>Comedies</Link></li>
                            <li><Link className='link'>Crime</Link></li>
                            <li><Link className='link'>Independet</Link></li>
                            <li><Link className='link'>Reality</Link></li>
                            <li><Link className='link'>SCi-Fi</Link></li>
                                    
                        </ul>
                    
                    </i>
                </li>
            </ul>
        
        </div>
        <div className='banner__contents'>
            <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
                <h1 className=' banner__title text-3xl md-text-6xl  lg:h-10 font-nsans-bold '>
                        {movie.title || movie?.name ||movie?.original_name}

                </h1>
            <div className=' mt-8 mb-4'>
                <button className=' btn capitalize border bg-gray-300 py-2 px-5 '><i class="fa-solid fa-play"></i> Play</button>
                <button className=' mylist capitalize border bg-gray-300 py-2 px-5 ml-4'><i class="fa-solid fa-plus"></i>My List</button>
            </div>
                <p className='text-grey-400 text-sm'></p>
                <p className='w-full md:max-w-[70%] xl:max-w[30%] text-grey-200'>{trunate(movie?.overview, 100)}</p>
            </div>


        </div>

        <div className='banner__fadeBottom'></div>
        



    </div>
  )
}

export default Banner