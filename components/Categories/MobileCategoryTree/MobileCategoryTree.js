import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "react-feather";

export default function MobileCategoryTree({
    includedInTheTree,
    handleTreeState,
}) {
    const closeTree = () => handleTreeState(false);
    return (
        <div className="h-full cursor-pointer overflow-scroll transition-[height]">
            {includedInTheTree.map(({ id, name, url_path, children }) => (
                <MobileBranch
                    closeTree={closeTree}
                    key={`mobile-branch-${id}`}
                    name={name}
                    url_path={url_path}
                    items={children}
                />
            ))}
            <div className="flex h-40 w-full  justify-center  bg-slate-50">
                <div className="flex h-12 w-3/4 translate-y-5 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                    <span className=" text-gray-500">Утас: +976 99242039</span>
                </div>
            </div>
        </div>
    );
}

const MobileBranch = ({ closeTree, name, url_path, items, depth = 1 }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen((prev) => !prev);

    const length = typeof items === "object" ? items.length : 0;

    return (
        <>
            <div
                className="border-t border-white-25 "
                style={{ paddingLeft: depth * 16 }}
            >
                <MobileBranchContent
                    handleClick={handleClick}
                    closeTree={closeTree}
                    name={name}
                    path={url_path}
                    state={open}
                    disabled={length === 0}
                />
            </div>

            {open &&
                items &&
                items.map(({ id, name, url_path, children }) => (
                    <MobileBranch
                        closeTree={closeTree}
                        depth={depth + 1}
                        key={`mobile-branch-${depth}-${id}`}
                        name={name}
                        url_path={url_path}
                        items={children}
                    />
                ))}
        </>
    );
};

const MobileBranchContent = ({
    handleClick,
    disabled,
    name,
    state,
    path,
    closeTree,
}) => (
    <div className="flex h-11 w-full items-center justify-between pr-1">
        <Link href={`/category/${path}`}>
            <a
                onClick={closeTree}
                className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
            >
                {name}
            </a>
        </Link>
        <ChevronRight
            onClick={handleClick}
            width={25}
            height={25}
            style={{
                transform: state && !disabled ? "rotate(90deg)" : "rotate(0)",
                opacity: disabled ? "0.5" : 1,
            }}
            className="mr-1 ml-3 transition-transform duration-150"
        />
    </div>
);
