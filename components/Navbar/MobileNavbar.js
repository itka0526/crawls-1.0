import Link from "next/link";
import Categories from "../Categories/Categories";

export default function MobileNav({ open, setOpen, data }) {
    const close = () => setOpen(false);
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-screen  transform bg-transparent ${
                open ? "translate-x-0" : "translate-x-[calc(-100%-1px)]"
            } grid grid-cols-[82.5%,_17.5%] drop-shadow-md filter transition-transform duration-300 ease-in-out`}
        >
            <div className="h-full overflow-hidden bg-white">
                <div className=" flex h-14 items-center justify-center bg-white shadow-md ">
                    <Link href="/">
                        <a className="text-xl font-semibold">CRAWLS</a>
                    </Link>
                </div>
                <div className=" flex h-full w-full flex-col">
                    <Categories
                        mobile
                        categoryTree={data}
                        handleTreeState={close}
                    />
                </div>
            </div>

            <div className={`h-full`} onClick={close}></div>
        </div>
    );
}
