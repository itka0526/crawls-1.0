import ProductDetailLeftSide from "../../components/ProductDetail/ProductDetailLeftSide";
import ProductDetailRightSide from "../../components/ProductDetail/ProductDetailRightSide";
import DatabaseClient from "../../lib/DatabaseClient";
import MetaTags from "../../components/DefaultMetaTags/MetaTags";

export default function ProductDetail({ results }) {
    const meta = {
        title: `${results.name} - Кравлер`,
        keywords: `${results.name}, ${results.brand_name}, ${results.sku}, Кравлер `,
        description: `${results.short_description.html}. Барааны код: ${results.sku}. Үнэ: ${results.price.regularPrice.value}₮`,
    };
    return (
        <>
            <MetaTags
                title={meta.title}
                keywords={meta.keywords}
                description={meta.description}
            />
            <div className="grid h-[calc(100vh-4rem)] w-screen grid-cols-2 gap-4 px-4 py-8 max-md:grid-cols-1 max-md:grid-rows-[60vh,auto] max-md:overflow-y-auto">
                <ProductDetailLeftSide results={results} />
                <ProductDetailRightSide results={results} />
            </div>
        </>
    );
}

export async function getServerSideProps({ res, resolvedUrl }) {
    const url = resolvedUrl.replace("/product/", "");
    const splittedUrl = url.split("/");

    const product_id = splittedUrl.at(-1);
    const category_id = splittedUrl
        .slice()
        .filter((_, i, a) => i !== a.length - 1)
        .join("/");

    const db_products = await DatabaseClient.category.findMany({
        where: {
            url_path: category_id,
        },
        select: {
            products: true,
        },
    });

    const [{ products }] = db_products;

    let results;

    for (let i = 0; i < products.length; i++) {
        if (products[i].url_key === product_id) {
            results = products[i];
            break;
        }
    }

    res.setHeader("Cache-Control", "s-max-age=10000000000");

    return {
        props: { results },
    };
}
