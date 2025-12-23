import Head from "next/head";

// Components
import { Codeblock } from "@/components/Codeblock";
import { Socials } from "@/components/Socials";
import { ContactForm } from "@/components/ContactForm";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className="pt-8 sm:pt-12">
        <section>
          <Codeblock />
        </section>
        <section className="py-8">
          <Socials />
        </section>
        {/* <section>
                    <Footer />

                </section> */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold text-center mb-6 tracking-wide">Get In Touch</h2>
          <p className="text-center text-zinc-400 mb-8 max-w-md mx-auto text-sm">
            Interested in collaborating or have a project in mind? Feel free to reach out.
          </p>
          <ContactForm />
        </section>
      </section>
    </>
  );
}
