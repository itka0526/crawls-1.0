export default function getCategoryItemData(arr) {
    const temp = [];

    arr.map((category) => {
        category.map(
            ({
                data: {
                    products: { items: item2 },
                },
            }) => item2.map((x) => temp.push(x))
        );
        // const {
        //     data: {
        //         products: { items },
        //     },
        // } = category;

        // items.map((item) => temp.push(item));
    });

    return temp || [];
}
