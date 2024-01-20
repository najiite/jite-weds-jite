import Image from "next/image"

const Savethedate = () => {
  return (
    <div className='h-full lg:h-screen bg-gradient-to-l from-gray-100 grid place-items-center lg:grid-cols-4 lg:gap-4 uppercase lg:p-24 px-2 pt-16'>
        <div>
          <h1 className='text-8xl text-center tracking-tighter leading-normal font-medium'>
            Save the date
          </h1>
        </div>
        <div>
          <Image className="rounded-full mt-5 grayscale hover:grayscale-0" src='/images/pic0.jpg' height={500} width={300} />
          <h3 className="text-3xl my-3 text-center">27th</h3>
        </div>
        <div>
          <Image className="rounded-full mt-5 grayscale hover:grayscale-0" src='/images/pic2.jpg' height={500} width={300} />
          <h3 className="text-3xl my-3 text-center">april</h3>
        </div>
        <div>
          <Image className="rounded-full mt-5 grayscale hover:grayscale-0" src='/images/pic1.jpg' height={500} width={300} />
          <h3 className="text-3xl my-3 text-center">2024</h3>
        </div>
    </div>
  )
}

export default Savethedate