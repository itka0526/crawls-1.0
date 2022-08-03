import { useEffect, useState } from "react";
import Branch from "./Branch";
import SubBranch from "./SubBranch";

export default function CategoryTree({ includedInTheTree }) {
    const [branches, setBranches] = useState([]);
    const [activeSubBranch, setActiveSubBranch] = useState(0);

    useEffect(() => {
        if (includedInTheTree && includedInTheTree.length > 0) {
            setActiveSubBranch(includedInTheTree[0].id);

            const sorted = includedInTheTree.reduce((collector, adder) => {
                const { children, ...rest } = adder;
                return [
                    ...collector,
                    { main_branch: true, ...rest },
                    {
                        main_branch: false,
                        branch_identifier: rest.id,
                        subBranches: children,
                    },
                ];
            }, []);

            setBranches(sorted);
        }
    }, [includedInTheTree]);

    const setNewActiveBranch = (id) => setActiveSubBranch(id);

    return (
        <div className="mb-2 grid grid-cols-[20%_80%]">
            <ul className="grid-rows-[repeat(auto-fit,1fr] grid h-[75vh]  grid-flow-row overflow-y-auto  border-r-[0.3px] border-[#c1c1c1] bg-slate-50">
                {branches.map(
                    ({ id, main_branch, ...rest }, index) =>
                        main_branch && (
                            <Branch
                                id={id}
                                setNewActiveBranch={setNewActiveBranch}
                                active={activeSubBranch === id}
                                key={`main-branch-${index}-${id}`}
                                data={rest}
                            />
                        )
                )}
            </ul>
            <ul className="h-[75vh] overflow-y-auto ">
                {branches.map(
                    ({ branch_identifier, main_branch, subBranches }, index) =>
                        !main_branch &&
                        activeSubBranch === branch_identifier && (
                            <SubBranch
                                key={`sub-branch-${index}-${branch_identifier}`}
                                data={subBranches}
                            />
                        )
                )}
            </ul>
        </div>
    );
}
