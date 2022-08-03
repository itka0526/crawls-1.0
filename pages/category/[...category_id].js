import Link from "next/link";
import getCategoryIdFromURL from "../../lib/getCategoryIdFromURL";
import getCategoryItems from "../../lib/getCategoryItems";

export default function CategoryItems({ data }) {
    return (
        <div className=" grid grid-rows-[1fr] p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-lg:pt-0">
            {data.products.items.map(({ name, url_key }, index) => (
                <span
                    className="m-1 block max-w-sm  cursor-pointer rounded-md border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 "
                    key={`product-${name}-${index}`}
                >
                    <Link href={`/product/${url_key}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {name}
                        </h5>
                    </Link>
                </span>
            ))}
        </div>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl } = context;
    const category_id_data = await getCategoryIdFromURL(
        resolvedUrl.slice("/category".length)
    );
    const {
        data: {
            urlResolver: { id: category_id },
        },
    } = category_id_data;

    const { data } = await getCategoryItems({
        currentPage: 1,
        id: category_id,
        filters: {
            category_id: {
                eq: `${category_id}`,
            },
        },
        pageSize: 50,
    });

    if (!data.products.items.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
}
