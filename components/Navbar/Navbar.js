import Link from "next/link";
import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Modal from "../Modal/Modal";
import useSWR from "swr";
import MobileNav from "./MobileNavbar";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [globalLoading, setGlobalLoading] = useState(false);

    const handleCategories = () => setOpenCategories((prev) => !prev);
    const handleCloseCategories = () => setOpenCategories(false);
    const router = useRouter();

    const { data, error } = useSWR("/api/getmenu", fetcher);

    if (error) {
        router.reload(window.location.pathname);
    }

    useEffect(() => {
        const handleRouteChange = () => setGlobalLoading(true);
        const handleRouteChangeComplete = () => setGlobalLoading(false);

        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
            router.events.on("routeChangeComplete", handleRouteChangeComplete);
        };
    }, []);

    return (
        <>
            <Modal state={openCategories} close={handleCloseCategories}>
                <Categories
                    categoryTree={data}
                    handleTreeState={setOpenCategories}
                />
            </Modal>
            <nav className="sticky top-0 z-10 flex h-16 w-screen items-center border bg-white px-4 py-4 drop-shadow-md filter max-lg:h-14 ">
                <MobileNav open={open} setOpen={setOpen} data={data} />
                <Hamburger open={open} setOpen={setOpen} />
                <div className="flex w-3/12 items-center max-md:ml-2">
                    <Link href="/">
                        <a className="text-2xl font-semibold">CRAWLS</a>
                    </Link>
                </div>
                <div className="flex w-9/12 items-center justify-end">
                    <div className="hidden md:flex" onClick={handleCategories}>
                        <div className="mx-4">АНГИЛАЛ</div>
                    </div>
                </div>
                <div
                    className={`loading-indicator absolute bottom-0 left-0 h-1 w-screen after:origin-bottom-left after:transition-transform ${
                        globalLoading
                            ? "after:scale-x-90 after:duration-700"
                            : "after:scale-x-0  after:duration-75"
                    }`}
                ></div>
            </nav>
        </>
    );
}
