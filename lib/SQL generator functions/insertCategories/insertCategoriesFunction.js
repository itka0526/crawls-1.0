import DatabaseClient from "../../DatabaseClient";
import helperFunction from "./helperFunction";

export default async function insertCategoriesFunction(data) {
    const result = await DatabaseClient.category.create({
        data: {
            id: data.category.id,
            name: data.category.name,
            children: {
                create: helperFunction(data.category.children),
            },
        },
        include: {
            parent: true,
            children: {
                include: {
                    parent: true,
                    children: {
                        include: {
                            parent: true,
                            children: true,
                        },
                    },
                },
            },
        },
    });

    return result;
}
