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

            <main className="w-full flex justify-center items-center h-full pb-40">
                <div className="w-1/2 ">
                    <div className="flex gap-2 justify-center my-8 relative">
                        <span className=" text-red-500 text-8xl">C</span>
                        <span className=" text-orange-500 text-8xl">R</span>
                        <span className=" text-yellow-500 text-8xl">A</span>
                        <span className=" text-green-500 text-8xl">W</span>
                        <span className=" text-indigo-500 text-8xl">L</span>
                        <span className=" text-violet-500 text-8xl">S</span>
                        <Image
                            src={SpiderIcon}
                            width={56}
                            height={56}
                            className="absolute right-0 -translate-y-5 top-0"
                        />
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
