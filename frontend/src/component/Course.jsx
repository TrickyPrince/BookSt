import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json";
import {Link} from "react-router-dom"

export default function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl
        '>We're delighted to have you <span className='text-pink-500
        '>Here!:)</span></h1>

          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi ad laborum amet iure corporis asperiores explicabo dolorum ex! Porro quasi consequatur animi iste consequuntur expedita voluptas nesciunt. Veniam, doloribus.
            Vitae assumenda odio harum, quos, temporibus ad numquam inventore sunt laudantium in aut possimus illo sequi fugit optio. Veritatis amet delectus praesentium, earum cupiditate officia. Aliquam sunt dolores placeat delectus.
            Nostrum, eius veniam. Magnam error vero quos id ratione,
          </p>

          <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ">
               Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
             list.map((item)=>(
              <Cards key={item.id} item={item}/>
             ))
            }
        </div>


      </div>
    </>
  )
}
