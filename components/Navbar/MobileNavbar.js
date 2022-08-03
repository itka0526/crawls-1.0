import Link from "next/link";

export default function MobileNav({ open, setOpen }) {
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-screen  transform bg-white ${
                open ? "-translate-x-0" : "-translate-x-full"
            } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
        >
            <div className="flex h-16 items-center justify-center bg-white drop-shadow-md filter">
                <Link href="/">
                    <a className="text-xl font-semibold">CRAWLS</a>
                </Link>
            </div>
            <div className="ml-4 flex flex-col">
                <Link href="/products">
                    <a
                        className="my-4 text-xl font-medium"
                        onClick={() =>
                            setTimeout(() => {
                                setOpen(!open);
                            }, 100)
                        }
                    >
                        Products
                    </a>
                </Link>
            </div>
        </div>
    );
}
