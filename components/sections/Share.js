import { instance } from "@/lib/axios";
import { useState } from "react"
import axios from 'axios';


const Share = () => {
  const [loading, setLoading] = useState(false)

  const handleUpload = async (event) => {
    setLoading(true)

       await instance.post( `/upload`, { 
        file: event.target.files
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        });
        setLoading(false)

  }

  return (
    <div id='share' className='sm:mx-14 mx-5'>
      <h3 className='text-center text-5xl my-10 font-semibold'>Share The Memories</h3>
      <h5 className="text-center my-3 text-lg">Share the beautiful photos you took of us on our day (This feature is in beta mode until the wedding day)</h5>
      <div className="flex">
        <form className='mx-auto' >
            <label className="block text-lg font-medium text-gray-900 dark:text-white" htmlFor="file">Upload photos</label>
            
            <input className="block my-4 w-full text-sm text-black border border-black cursor-pointer bg-gray-50" accept="image/*"  onChange={handleUpload}  id="file" type="file" multiple/>
            
  
        </form>
        </div>
    </div>
  )
}

export default Share