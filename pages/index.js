import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <div className="grid place-content-center">
      <Head>
        <title>My_twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/twitter.png" />
      </Head>
      <main className="max-w-md">
        {/* Header */}
        <Header />
        {/* posts */}
        <Posts />
        {/* footer */}
        <Footer />
      </main>
    </div>
  );
}
