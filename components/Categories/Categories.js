import { useEffect, useState } from "react";
import CategoryTree from "./CategoryTree/CategoryTree";
import MobileCategoryTree from "./MobileCategoryTree/MobileCategoryTree";

export default function Categories({ mobile, categoryTree, handleTreeState }) {
    const [includedInTheTree, setIncludedInTheTree] = useState([]);

    useEffect(() => {
        if (categoryTree) {
            const { children } = categoryTree;
            const filtered = children.filter(
                (branch) => branch.include_in_menu
            );
            filtered && setIncludedInTheTree(filtered);
        }
    }, [categoryTree]);

    if (mobile) {
        return (
            <div className="h-full w-full">
                <MobileCategoryTree
                    includedInTheTree={includedInTheTree}
                    handleTreeState={handleTreeState}
                />
            </div>
        );
    }
    return (
        <div className="w-[75vw]  transition-[heigth] ">
            <CategoryTree
                includedInTheTree={includedInTheTree}
                handleTreeState={handleTreeState}
            />
        </div>
    );
}
