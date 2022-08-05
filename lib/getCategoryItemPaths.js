export default function getCategoryItemPaths(arr, key = "id") {
    const temp = [];

    arr.map((category) => {
        const {
            data: {
                products: { items },
            },
        } = category;
        items.map((item) => temp.push({ params: { [key]: item.url_key } }));
    });

    return temp;
}
