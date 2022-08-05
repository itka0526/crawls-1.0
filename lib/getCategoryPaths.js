export default function getCategoryPaths(array, key) {
    let temp = [];

    const recu = (arr) => {
        arr.map(({ children, url_key, url_path }) => {
            temp.push(`${url_key || url_path}`);
            if (children && children.length > 0) {
                recu(children);
            }
        });
    };

    recu(array);

    return temp.map((path) => ({ params: { [key]: path.split("/") } }));
}
