import Head from 'next/head'
import { Inter } from "next/font/google";
import Savethedate from "@/components/sections/Savethedate";
import Ourstory from "@/components/sections/Ourstory";
import Photos from "@/components/sections/Photos";
import Directions from "@/components/sections/Directions";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Share from "@/components/sections/Share";

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

          </Head>
          <main>
            <Navbar />
            <Savethedate />
            <Ourstory />
            <Photos />
            <Share />
            <Directions />
            <Footer />
          </main>
        </>
  );
}
