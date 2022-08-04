import Link from "next/link";
import Product from "../../components/Product/Product";
import getAllCategoryPaths from "../../lib/getAllCategoryPaths";
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
    // return (
    //     <div className=" grid grid-rows-[1fr] p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-lg:pt-0">
    //         {data.products.items.map(({ name, url_key }, index) => (
    //             <span
    //                 className="m-1 block max-w-sm  cursor-pointer rounded-md border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 "
    //                 key={`product-${name}-${index}`}
    //             >
    //                 <Link href={`/product/${url_key}`}>
    //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
    //                         {name}
    //                     </h5>
    //                 </Link>
    //             </span>
    //         ))}
    //     </div>
    // );
}

export async function getStaticPaths() {
    const listOfCategories = await getIncludeInTheMenu(2);
    const paths = getAllCategoryPaths(listOfCategories, "category_id");
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
