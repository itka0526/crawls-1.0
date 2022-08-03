export default function Branch({
    id,
    active,
    setNewActiveBranch,
    data: {
        name: BranchName,
        url_path: BranchURLPath,
        url_suffix: BranchURLSuffix,
        children: SubBranches,
    },
}) {
    const activeStyles = active ? "bg-slate-100 text-blue-400" : "";
    return (
        <div
            onMouseEnter={() => setNewActiveBranch(id)}
            className={`py-1 px-3 ${activeStyles} my-[0.125rem] flex cursor-pointer items-center`}
        >
            <div>{BranchName}</div>
        </div>
    );
}
