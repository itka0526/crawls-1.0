import Link from "next/link";

export default function Products({ products }) {
    return (
        <div className="w-full h-[calc(100vh - 16rem)] flex max-lg:pt-0 max-lg:justify-center justify-center p-4 flex-wrap  ">
            {products.map(({ product_name, link }, index) => (
                <span
                    className="block grow-0 basis-1/5 max-lg:basis-full flex-shrink-0 m-1 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
                    key={`product-${product_name}-${index}`}
                >
                    <Link href={`/product/${link}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {product_name}
                        </h5>
                    </Link>
                </span>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    try {
        const pending_response = await fetch(
            "https://nomin.mn/graphql?query=query+category%28%24pageSize%3AInt%21%24currentPage%3AInt%21%24filters%3AProductAttributeFilterInput%21%24sort%3AProductAttributeSortInput%29%7Bproducts%28pageSize%3A%24pageSize+currentPage%3A%24currentPage+filter%3A%24filters+sort%3A%24sort%29%7Bitems%7Bid+name+short_description%7Bhtml+__typename%7Durl_key+__typename%7D__typename%7D%7D&operationName=category&variables=%7B%22currentPage%22%3A1%2C%22id%22%3A6011%2C%22filters%22%3A%7B%22category_id%22%3A%7B%22eq%22%3A%226011%22%7D%7D%2C%22pageSize%22%3A50%2C%22sort%22%3A%7B%22special_price_percent%22%3A%22DESC%22%7D%7D"
        );
        const response = await pending_response.json();
        if (response.data) {
            const {
                data: {
                    products: { items },
                },
            } = response;

            const regex =
                /(samsung)|(hitachi)|(mcdodo)|(gorenje)|(remax)|(tasel-pro)|(promate)|(baseus)|(tanita)|(2USB\/2.4A)|(5V\/2.4A)|(VNM\r\n)/i;

            const products = items
                .map(({ short_description: { html }, name }) => ({
                    name: name,
                    links: html
                        .split(" ")
                        .filter(
                            (word) =>
                                word === word.toUpperCase() &&
                                word.length > 4 &&
                                !regex.test(word)
                        ),
                }))
                .filter(({ links }) => links.length !== 0)
                .map(({ name, links }) => ({
                    product_name: name,
                    link: links[0].replaceAll("/", "-"),
                }));

            return { props: { products } };
        }
    } catch (error) {
        console.error(
            "Something went wrong when getting static props. :/",
            error
        );
        return { props: { products: [] } };
    }
}
