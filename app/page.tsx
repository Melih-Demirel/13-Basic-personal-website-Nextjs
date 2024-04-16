import Head from "next/head";
import Image from "next/image";

// Components
import {Codeblock}from "@/components/Codeblock";
import {Socials} from "@/components/Socials";
import { Footer } from "@/components/Footer";

import rainbow from "@/styles/rainbow.module.scss";

export const metadata = {
    title: 'Melih | Home'
}

export default function Home() {
    const count = 14; // Number of images
    const width = 50;
    const height = 25;
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;500&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <section>
                <section>
                    <div className="flex flex-col items-center py-8">
                        <p className={rainbow.rainbowText}>will finish when I have time :{')'}</p>
                        {/* <div>
                            <Image src="/1.png" alt="Your Logo" width={width} height={height}/>
                            <Image src="/2.png" alt="Your Logo" width={width} height={height} />
                            <Image src="/3.png" alt="Your Logo" width={width} height={height} />
                            <Image src="/a.jpg" alt="Your Logo" width={width} height={height} />
                        </div> */}  
                    </div>
                </section>
                <section>
                    <Codeblock/>
                </section>
                <section className="py-8">
                    <Socials/>
                </section>
                <section>
                    <Footer/>
                </section>
            </section>           
        </>
    );
}
