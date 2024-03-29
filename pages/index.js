import Image from "next/image";
import Head from 'next/head'
import { Inter } from "next/font/google";
import Savethedate from "@/components/sections/Savethedate";
import Ourstory from "@/components/sections/Ourstory";
import Photos from "@/components/sections/Photos";
import Directions from "@/components/sections/Directions";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
          <Head>
            <title>A true love story || April 2024</title>
            <meta name="description" content="A true love story shared by Onajite Kelvin and Onajite Lydia" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta charSet="UTF-8"></meta>
            <link rel="icon" href="/favicon.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500&family=Playfair+Display&display=swap" rel="stylesheet"></link>

          </Head>
          <main>
            <Navbar />
            <Savethedate />
            <Ourstory />
            <Photos />
            <Directions />
            <Footer />
          </main>
        </>
  );
}
