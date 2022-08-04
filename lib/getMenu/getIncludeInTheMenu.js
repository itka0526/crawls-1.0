import getMenu from "./getMenu";

export default async function getIncludeInTheMenu(id) {
    const allResults = await getMenu(id);
    const {
        data: {
            category: { children },
        },
    } = allResults;

    const filtered = children.filter((branch) => branch.include_in_menu) || [];

    return filtered;
}
