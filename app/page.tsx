import Head from "next/head";
import Image from "next/image";

// Components
import { Codeblock } from "@/components/Codeblock";
import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";

import rainbow from "@/styles/rainbow.module.scss";
import fade from "@/styles/fade.module.scss";


export default function Home() {
    return (
        <>
            <Head>
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <section>
                <section>
                    <div className="flex flex-col items-center pt-6 pb-4">
                        <p className={fade.fadeAway + " " + fade.font}>~ and to Him we shall return ~</p>
                        <p className={fade.fadeAway + " " + fade.fontT + " pt-2"}>[2:156]</p>
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
