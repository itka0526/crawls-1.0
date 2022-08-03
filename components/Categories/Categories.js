import { useEffect, useState } from "react";
import CategoryTree from "./CategoryTree/CategoryTree";

export default function Categories({ categoryTree }) {
    const [includedInTheTree, setIncludedInTheTree] = useState([]);

    useEffect(() => {
        if (categoryTree) {
            const {
                data: {
                    category: { children },
                },
            } = categoryTree;
            const filtered = children.filter(
                (branch) => branch.include_in_menu
            );
            filtered && setIncludedInTheTree(filtered);
        }
    }, [categoryTree]);

    return (
        <div className="w-[75vw]  transition-[heigth] ">
            <CategoryTree includedInTheTree={includedInTheTree} />
        </div>
    );
}
