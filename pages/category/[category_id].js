import getMenu from "../../lib/getMenu";

export default function CategoryItems() {
    return <div></div>;
}

export async function getStaticPaths() {
    const { data } = await getMenu(2);

    const {
        data: {
            category: { children },
        },
    } = categoryTree;
    const filtered = children.filter((branch) => branch.include_in_menu);

    console.log(filtered);
}
