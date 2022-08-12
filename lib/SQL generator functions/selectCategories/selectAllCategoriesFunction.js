import DatabaseClient from "../../DatabaseClient";

const selectAllCategoriesFunction = async function (id) {
    const results = await DatabaseClient.category.findMany({
        where: {
            id,
        },
        select: {
            children: {
                select: {
                    id: true,
                    name: true,
                    include_in_menu: true,
                    position: true,
                    url_path: true,
                    children: {
                        select: {
                            id: true,
                            name: true,
                            include_in_menu: true,
                            position: true,
                            url_path: true,
                            children: {
                                select: {
                                    id: true,
                                    name: true,
                                    include_in_menu: true,
                                    position: true,
                                    url_path: true,
                                    children: {
                                        select: {
                                            id: true,
                                            name: true,
                                            include_in_menu: true,
                                            position: true,
                                            url_path: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    return results;
};

export default selectAllCategoriesFunction;
