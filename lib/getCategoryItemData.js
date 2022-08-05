export default function getCategoryItemData(arr) {
    const temp = [];

    arr.map((category) => {
        const {
            data: {
                products: { items },
            },
        } = category;

        items.map((item) => temp.push(item));
    });

    return temp || [];
}
