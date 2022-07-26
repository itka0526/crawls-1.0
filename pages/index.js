import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Search from "../components/Search/Seach";

export default function Home() {
    const [results, setResults] = useState([]);

    return (
        <div className=" h-screen w-screen">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Cool app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full flex justify-center items-center h-full pb-40">
                <div className="w-1/2 ">
                    <div className="flex gap-2 justify-center my-8">
                        <span className=" text-red-500 text-8xl">C</span>
                        <span className=" text-orange-500 text-8xl">R</span>
                        <span className=" text-yellow-500 text-8xl">A</span>
                        <span className=" text-green-500 text-8xl">W</span>
                        <span className=" text-indigo-500 text-8xl">L</span>
                        <span className=" text-violet-500 text-8xl">S</span>
                    </div>
                    <Search setResults={setResults} />
                    <div className="w-full grid grid-flow-row ">
                        {results.map(({ url, title }) => (
                            <a href={url} className=" my-2" target={"_blank"}>
                                <span className=" text-blue-500">{title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
