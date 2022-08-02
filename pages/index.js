import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Search from "../components/Search/Seach";
import SpiderIcon from "../public/spider.svg";

export default function Home() {
    const [results, setResults] = useState([]);

    return (
        <div className=" h-screen w-screen">
            <Head>
                <title>Crawler Crawler Crawler</title>
                <meta name="description" content="I am Crawler." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-screen  flex justify-center items-center h-full lg:pb-48 pb-64 max-lg:px-4">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex gap-2 justify-center my-8  text-4xl lg:text-8xl">
                        <span className=" text-red-500 ">C</span>
                        <span className=" text-orange-500 ">R</span>
                        <span className=" text-yellow-500">A</span>
                        <span className=" text-green-500">W</span>
                        <span className=" text-indigo-500">L</span>
                        <div className=" relative flex ">
                            <span className="text-violet-500">S</span>
                            <div className="absolute lg:-right-8 -right-4 lg:-top-16 -top-8">
                                <Image
                                    alt="spider"
                                    src={SpiderIcon}
                                    width={56}
                                    height={56}
                                />
                            </div>
                        </div>
                    </div>
                    <Search setResults={setResults} />
                    <div className="w-full grid grid-flow-row max-h-96 overflow-y-auto">
                        {results.map(({ link, text }, index) => (
                            <a
                                href={link}
                                className=" my-2"
                                target={"_blank"}
                                key={`link-${index}`}
                                rel="noopener noreferrer"
                            >
                                <span className=" text-blue-500">{text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
