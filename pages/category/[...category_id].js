import Link from "next/link";
import Product from "../../components/Product/Product";
import getCategoryPaths from "../../lib/getCategoryPaths";
import getCategoryIdFromURL from "../../lib/getCategoryIdFromURL";
import getCategoryItems from "../../lib/getCategoryItems";
import getIncludeInTheMenu from "../../lib/getMenu/getIncludeInTheMenu";

export default function CategoryItems({ data }) {
    const { category, products } = data;

    return (
        <section className=" grid grid-rows-[1fr] p-2 md:grid-cols-2 lg:grid-cols-4 ">
            {products.items.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    );
}

export async function getStaticPaths() {
    const listOfCategories = await getIncludeInTheMenu(2);
    const paths = getCategoryPaths(listOfCategories, "category_id");
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { category_id } }) {
    const nominWeirdURLsuffix = ".html";
    const resolveURL = category_id.join("/") + nominWeirdURLsuffix;

    const category_id_data = await getCategoryIdFromURL(resolveURL);

    const {
        data: {
            urlResolver: { id: resolvedID },
        },
    } = category_id_data;

    const variables = {
        currentPage: 1,
        id: resolvedID,
        filters: {
            category_id: {
                eq: `${resolvedID}`,
            },
        },
        pageSize: 50,
    };

    const { data } = await getCategoryItems(variables);

    if (data.products.items.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
    };
}
