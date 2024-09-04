import Head from "next/head";
import Image from "next/image";

// Components
import { Codeblock } from "@/components/Codeblock";
import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";

import rainbow from "@/styles/rainbow.module.scss";
import fade from "@/styles/fade.module.scss";

export const metadata = {
    title: 'Melih Demirel'
}

export default function Home() {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/1.png" />
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
                        {/* <p className={fade.fadeAway}>{'{ '}and to Him we shall return{' }'}</p> */}
                        {/* <p className={fade.fadeToLow}>and to Him we shall return</p> */}
                        <p className={fade.fadeToLow + " " + fade.font}>&quot;and to Him we shall return</p>
                        {/* <p className={fade.fadeAway}>and to Him we shall return</p> */}
                    </div>
                </section>
                <section>
                    <Codeblock />
                </section>
                <section className="py-8">
                    <Socials />
                </section>
                {/* <section>
                    <Footer />
                </section> */}
                {/* <section>
                    <div className="flex flex-col items-center py-8">
                        <p className={rainbow.rainbowText}>will finish when I have time :{')'}</p>
                    </div>
                </section> */}
            </section>
        </>
    );
}
