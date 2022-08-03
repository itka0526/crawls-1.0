import Link from "next/link";
import { useState } from "react";
import Categories from "../Categories/Categories";
import Modal from "../Modal/Modal";
import useSWR from "swr";
import MobileNav from "./MobileNavbar";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);

    const handleCategories = () => setOpenCategories((prev) => !prev);
    const handleCloseCategories = () => setOpenCategories(false);
    const router = useRouter();

    const { data, error } = useSWR("/api/getmenu", fetcher);

    if (error) {
        router.reload(window.location.pathname);
    }

    return (
        <>
            <Modal state={openCategories} close={handleCloseCategories}>
                <Categories
                    categoryTree={data}
                    handleTreeState={setOpenCategories}
                />
            </Modal>
            <nav className="relative z-10 flex h-16 w-screen items-center bg-white px-4 py-4 drop-shadow-md filter ">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="flex w-3/12 items-center">
                    <Link href="/">
                        <a className="text-2xl font-semibold">CRAWLS</a>
                    </Link>
                </div>
                <div className="flex w-9/12 items-center justify-end">
                    <div
                        className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {/* hamburger button */}
                        <span
                            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                                open ? "translate-y-3.5 rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
                                open ? "w-0" : "w-full"
                            }`}
                        />
                        <span
                            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                                open ? "-translate-y-3.5 -rotate-45" : ""
                            }`}
                        />
                    </div>

                    <div className="hidden md:flex" onClick={handleCategories}>
                        <div className="mx-4">CATEGORIES</div>
                    </div>

                    <div className="hidden md:flex">
                        <Link href="/products">
                            <a className="mx-4">PRODUCTS</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
