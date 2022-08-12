import Link from "next/link";
import failedMessage from "../components/404_components/failedMessage";
import { useRouter } from "next/router";

export default function FourOhFour() {
    const router = useRouter();
    return (
        <div className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-end p-4 py-8">
            <div
                className=" absolute left-1/2 top-4 w-4/5 -translate-x-[55%] "
                dangerouslySetInnerHTML={failedMessage()}
            ></div>
            <div className=" ">
                <span
                    onClick={() => router.back()}
                    className="mr-2 mb-2 rounded-lg bg-blue-400 px-12 py-2.5 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                    Буцах
                </span>
            </div>
        </div>
    );
}
