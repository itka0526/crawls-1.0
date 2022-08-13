import MetaTags from "../../components/DefaultMetaTags/MetaTags";
import Product from "../../components/Product/Product";
import DatabaseClient from "../../lib/DatabaseClient";

export default function CategoryItems({
    products,
    category_id,
    category_name,
}) {
    //if user navigates to 2nd page call /category pass category_id and pagenumber as argument
    const meta = {
        title: `${category_name} - Кравлер`,
        keywords: products.map(({ name }) => name).join(", "),
    };

    products.map(({ name }) => name).join(", ");

    return (
        <>
            <MetaTags title={meta.title} keywords={meta.keywords} />
            <section className=" grid grid-cols-2 grid-rows-[1fr] justify-items-center gap-2  py-2 px-4  md:grid-cols-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </section>
        </>
    );
}

export async function getStaticPaths() {
    if (process.env.INITIATED === "FALSE") {
        return {
            paths: [],
            fallback: false,
        };
    }

    const list = await DatabaseClient.category.findMany({
        where: {
            include_in_menu: 1,
        },
        select: {
            url_path: true,
        },
    });

    const paths = list.map(({ url_path }) => {
        return {
            params: { category_id: `${url_path}`.split("/") },
        };
    });

    console.log(
        paths
            .map(({ url_path }) => {
                return `${url_path}`.split("/");
            })
            .filter((arg) => arg === null)
    );

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params: { category_id } }) {
    const resolvedURL = category_id.join("/");
    if (process.env.INITIATED === "FALSE") {
        return {
            props: {
                products: [],
                category_id: 1,
                category_name: "Demo ",
            },
        };
    }

    const [{ products: db_products, name: category_name }] =
        await DatabaseClient.category.findMany({
            where: {
                url_path: resolvedURL,
            },
            select: {
                name: true,
                products: true,
            },
        });

    /**
     * Serve at most 100 products per page
     * In order to that make a getStaticProps should return 100 products
     * And handle the rest of the products via some API call?
     * Reason: 300kb per page thats absurd!
     */

    if (!db_products && db_products.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: db_products.slice(0, 100),
            category_id,
            category_name,
        },
    };
}
