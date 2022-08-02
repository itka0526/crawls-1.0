import queryGoogleForProduct from "../../lib/queryGoogleForProduct";
import Link from "next/link";

export default function Product({ results }) {
    results.length === 0
        ? (results = [{ website: "No products were found.", link: "/" }])
        : results;
    return (
        <div className="w-full h-[calc(100vh - 16rem)] flex max-lg:pt-0 max-lg:justify-center p-4 flex-wrap  ">
            {results.map(({ website, link }, index) => (
                <Link href={link}>
                    <a
                        key={`website-${website}-${index}`}
                        className="block grow lg:mr-4 mt-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {website}
                        </h5>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export async function getStaticPaths() {
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

            var seen = {};

            const regex =
                /(samsung)|(hitachi)|(mcdodo)|(gorenje)|(remax)|(tasel-pro)|(promate)|(baseus)/i;

            const paths = items
                .map(({ short_description: { html } }) =>
                    html
                        .split(" ")
                        .filter(
                            (word) =>
                                word === word.toUpperCase() && word.length > 4
                        )
                )
                .reduce((arr1, arr2) => [...arr1, ...arr2])
                .filter((item) =>
                    seen.hasOwnProperty(item) ? false : (seen[item] = true)
                )
                .filter((item) => item.length > 4 && !regex.test(item))
                .map((param) => ({
                    params: {
                        product_model_number: `${param.replace("/", "\\")}`,
                    },
                }));

            return {
                paths,
                fallback: false, // can also be true or 'blocking'
            };
        }
    } catch (error) {
        console.error("Something went wrong when building paths. :/", error);
        return {
            paths: [],
            fallback: false, // can also be true or 'blocking'
        };
    }
}

export async function getStaticProps({ params: { product_model_number } }) {
    const results = await queryGoogleForProduct(product_model_number);
    return {
        props: { results },
    };
}
