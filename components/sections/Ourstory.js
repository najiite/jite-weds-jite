import Image from "next/image"

const Ourstory = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2'>
        <div className="bg-[#96b85d] text-[#ebe4e2] p-5">
          <h3 className="uppercase text-2xl font-medium">Our Story</h3>
          <div className="font-thin">
            <p className="my-4">My friend's wedding was supposed to be a celebration of love, not a blind date orchestrated by fate, confetti, and a questionable glass of champagne. But there she was, Lydia, radiating sunshine in a bridesmaid's dress and a smile that could launch a thousand ships (or at least steal my heart, apparently).</p>
            <p className="my-4">It was like someone rewound my brain to '17-year-old-first-crush' mode. Blue eyes that rivaled the summer sky, laugh lines etched from a lifetime of joy, and the kind of confidence that made me want to hide under the closest buffet table. It wasn't just butterflies in my stomach, it was a full-blown aviary taking flight.</p>
            <p className="my-4">The rest of the night was a haze of stolen glances, nervous smiles, and a constant, nagging feeling that the cake was lopsided but my priorities were definitely not. Days later, the only thing more lopsided than that cake was my sleep schedule. Every time I closed my eyes, I saw Lydia's laugh, heard her voice humming along to the wedding band. I was officially smitten.</p>

          </div>
        </div>
        <div className=''>
          <img className="h-screen object-cover" src='/images/story0.jpg' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className="bg-[#f1c4ba] text-white p-5">
          <h3 className="uppercase text-2xl font-medium">Our Story</h3>
          <div className="font-thin">
            <p className="my-4">So, I did what any self-respecting, lovestruck fool would do – I cornered my friend, the poor soul who birthed this entire mess. "Dude," I pleaded, "you gotta introduce me to your cousin. My heart's doing the Macarena every time I think about her."</p>
            <p className="my-4">And thankfully, my friend is a saint. One awkward coffee date later, and boom, I was toast. Conversation flowed like the free wine at the wedding reception, with just as much potential for disaster. But instead of spilled merlot, we spilled our hopes, dreams, and embarrassingly relatable childhood stories. I found myself falling deeper with every sip of laughter, every shared secret.</p>
            <p className="my-4">Now, here we are, about to celebrate our own "I dos," a testament to the fact that sometimes, love doesn't need a grand gesture, just a wobbly cake tower and a little nudge from destiny (and maybe a very understanding friend). So cheers to us, Onajite and Lydia, proof that the best love stories start with laughter, a touch of fate, and enough champagne to make you swear you saw the cake tilt sideways. Here's to forever, one lopsided adventure at a time.</p>

          </div>
        </div>
        <div className='lg:order-first'>
          <img className="h-screen object-cover" src='/images/story1.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Ourstory