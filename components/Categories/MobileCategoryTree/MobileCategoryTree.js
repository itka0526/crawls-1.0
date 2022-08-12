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
            {includedInTheTree.map(
                ({ id, name, url_path, children: items }) => (
                    <MobileBranch
                        closeTree={closeTree}
                        key={`mobile-branch-${id}`}
                        name={name}
                        url_path={url_path}
                        items={items}
                    />
                )
            )}
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

    const childrenHeight = `${items.length * 2.75}rem`;
    return (
        <>
            <div
                onClick={handleClick}
                className="border-t border-white-25 "
                style={{ paddingLeft: depth * 8 }}
            >
                <MobileBranchContent
                    closeTree={closeTree}
                    name={name}
                    path={url_path}
                    state={open}
                    disabled={!items.length > 0}
                />
            </div>
            <div
                className={`overflow-hidden  transition-[height] 
                `}
                style={{
                    height: open ? childrenHeight : 0,
                }}
            >
                {items &&
                    items.map(({ id, name, url_path, items }) => (
                        <MobileBranch
                            depth={depth + 1}
                            key={`mobile-branch-${depth}-${id}`}
                            name={name}
                            url_path={url_path}
                            items={items}
                        />
                    ))}
            </div>
        </>
    );
};

const MobileBranchContent = ({ disabled, name, state, path, closeTree }) => (
    <div className="flex h-11 w-full items-center justify-between pr-1">
        <Link href={path}>
            <a onClick={closeTree} className="flex-1">
                {name}
            </a>
        </Link>
        <ChevronRight
            width={28}
            height={28}
            style={{
                transform: state && !disabled ? "rotate(90deg)" : "rotate(0)",
                opacity: disabled ? "0.5" : 1,
            }}
            className="mr-1 ml-3 transition-transform"
        />
    </div>
);
