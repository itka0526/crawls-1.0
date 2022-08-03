export default function SubBranch({ data }) {
    const Title = ({
        name,
        styles = {
            container: "flex cursor-pointer",
            text: "font-bold text-base",
        },
    }) => (
        <div className={styles.container}>
            <span className={styles.text}>{name}</span>
        </div>
    );
    return (
        <div className=" flex flex-wrap justify-start px-4 py-1">
            {data.map(({ name, id, children: subSubBranches }) => (
                <div
                    className="m-2 flex flex-shrink-0 basis-64 flex-col  "
                    key={`subBranch-${id}`}
                >
                    <Title name={name} />
                    <div>
                        {subSubBranches.map(
                            ({ name: subSubBranchName, id }) => (
                                <Title
                                    key={`subSubBranch-${id}`}
                                    name={subSubBranchName}
                                    styles={{
                                        container: "pl-1 cursor-pointer",
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
