import React from 'react'

const Photos = () => {
  return (
    <div id='gallery'>
      <h3 className='text-center text-5xl my-10 font-semibold'>Our Gallery</h3>
      <div className='sm:mx-14 mx-5'>
        <div className='sm:flex sm:flex-row gap-2'>
          <div className='basis-1/3'>
              <img className="object-cover" src='/images/gallery/IMG_2638.jpg' />
          </div>
          <div className='basis-2/3'>
            <div className='grid sm:grid-cols-4 grid-cols-2 gap-2'>
              <img className="h-auto" src='/images/gallery/DSC_3669.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3684.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3708.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3878.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3790.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3886.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3983.jpg' />
              <img className="h-auto" src='/images/gallery/DSC_3731.jpg' />

            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Photos