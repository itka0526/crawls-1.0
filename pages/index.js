import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Search from "../components/Search/Seach";
import SpiderIcon from "../public/spider.svg";

export default function Home() {
    const [results, setResults] = useState([]);

    return (
        <>
            <Head>
                <title>Кравлер Кравлер Кравлер</title>
                <meta name="description" content="I am Crawler." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex h-full w-screen items-center justify-center max-lg:px-4">
                <div className="mt-[22%] w-full lg:mt-[11%] lg:w-1/2">
                    <div className="my-8 flex justify-center gap-2 text-5xl lg:text-8xl">
                        <span className=" text-red-500 ">C</span>
                        <span className=" text-orange-500 ">R</span>
                        <span className=" text-yellow-500">A</span>
                        <span className=" text-green-500">W</span>
                        <span className=" text-indigo-500">L</span>
                        <div className=" relative flex ">
                            <span className="text-violet-500">S</span>
                            <div className="absolute -right-4 -top-8 lg:-right-8 lg:-top-16">
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
                    <div className="grid max-h-96 w-full grid-flow-row overflow-y-auto">
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
        </>
    );
}
