import Link from "next/link";

export default function SubBranch({ data, closeTree }) {
    const Title = ({
        name,
        styles = {
            container: "flex cursor-pointer",
            text: "font-bold text-base",
        },
        href = "/",
    }) => (
        <div className={styles.container}>
            <Link href={href}>
                <a className={styles.text} onClick={closeTree}>
                    {name}
                </a>
            </Link>
        </div>
    );

    return (
        <div className=" flex flex-wrap justify-start px-4 py-1">
            {data.map(
                ({
                    name,
                    id,
                    url_path,
                    url_suffix,
                    children: subSubBranches,
                }) => (
                    <div
                        className="m-2 flex flex-shrink-0 basis-64 flex-col  "
                        key={`subBranch-${id}`}
                    >
                        <Title
                            name={name}
                            href={`/category/${url_path}${url_suffix}`}
                        />
                        <div>
                            {subSubBranches.map(
                                ({ name: subSubBranchName, id }) => (
                                    <Title
                                        key={`subSubBranch-${id}`}
                                        name={subSubBranchName}
                                        href={`/category/${url_path}${url_suffix}`}
                                        styles={{
                                            container: "pl-1 cursor-pointer",
                                        }}
                                    />
                                )
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
