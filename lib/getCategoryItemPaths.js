export default function getCategoryItemPaths(arr, key = "id") {
    const temp = [];

    arr.map((category) => {
        // const {
        //     data: {
        //         products: { items },
        //     },
        // } = category;
        category.map(
            ({
                data: {
                    products: { items: item2 },
                },
            }) => item2.map((x) => temp.push({ params: { [key]: x.url_key } }))
        );
    });

    return temp;
}
