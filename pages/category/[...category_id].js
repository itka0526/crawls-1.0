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
                    <Product
                        key={product.id}
                        product={product}
                        category_id={category_id}
                    />
                ))}
            </section>
        </>
    );
}

export async function getServerSideProps({ res, resolvedUrl }) {
    const category_id = resolvedUrl.replace("/category/", "");
    try {
        const [{ products: db_products, name: category_name }] =
            await DatabaseClient.category.findMany({
                where: {
                    url_path: category_id,
                },
                select: {
                    name: true,
                    products: true,
                },
            });

        if (!db_products && db_products.length === 0) {
            return {
                notFound: true,
            };
        }

        /**
         * Serve at most 100 products per page
         * In order to that make a getStaticProps should return 100 products
         * And handle the rest of the products via some API call?
         * Reason: 300kb per page thats absurd!
         */

        res.setHeader("Cache-Control", "s-max-age=10000000000");

        return {
            props: {
                products: db_products.slice(0, 100),
                category_id,
                category_name,
            },
        };
    } catch (error) {
        console.error(error, "[...category_id].js");
        return {
            notFound: true,
        };
    }
}
