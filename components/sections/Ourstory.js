import Image from "next/image"

const Ourstory = () => {
  return (
    <div className=" text-xl playfair" id="story">
      <div className='grid lg:grid-cols-2'>
        <div className="bg-[#96b85d] text-white p-5">
          <h3 className="uppercase text-2xl font-medium">Our Story</h3>
          <div className="font-thin">
            <p className="my-4">June 2020 will always be a registered date in our lives cause that’s when our love story began.</p>
            <p className="my-4">As a guest at my friend’s wedding I couldn’t help but notice this pretty caramel skin girl trying her best to make the bride comfortable, I had my eyes on her all through that event but didn’t get a chance to talk to her cause she was too busy to even notice me plus she had a confusing ring on her wedding finger. </p>
            <p className="my-4"> Days after the wedding I was talking to my friend and asked after the pretty girl from her wedding, that’s when I figured she was single, my friend’s cousin and she was my namesake too. I was eager to meet her and my friend offered to help me out, few hours later I got the pretty girl’s number, we got talking and concluded on a date after a while. </p>

          </div>
        </div>
        <div className=''>
          <img className="h-screen w-full object-cover" src='/images/story0.jpg' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className="bg-[#f1c4ba] text-white p-5">
          <h3 className="uppercase text-2xl font-medium">Our Story</h3>
          <div className="font-thin">
            <p className="my-4"> Days after the wedding I was talking to my friend and asked after the pretty girl from her wedding, that’s when I figured she was single, my friend’s cousin and she was my namesake too. I was eager to meet her and my friend offered to help me out, few hours later I got the pretty girl’s number, we got talking and concluded on a date after a while. </p>
            <p className="my-4"> We had several meetings and chats after then but this lady was refusing to give me a chance to shower her with all the tender love I had to give, after a while we stopped talking and we were out of each other’s lives but she was meant to be mine so we met after a year of not talking to each other at an old schoolmate’s wedding (her cousin literally talked her into attending). </p>
            <p className="my-4"> We had our reservations knowing that we’ve been out of each others lives for a while, but the connection was still there. And yes two years and a few months after we’re saying yes to forever.</p>

          </div>
        </div>
        <div className='lg:order-first'>
          <img className="h-screen w-full object-cover " src='/images/story1.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Ourstory