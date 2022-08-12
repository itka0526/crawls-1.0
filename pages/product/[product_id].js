import ProductDetailLeftSide from "../../components/ProductDetail/ProductDetailLeftSide";
import ProductDetailRightSide from "../../components/ProductDetail/ProductDetailRightSide";
import DatabaseClient from "../../lib/DatabaseClient";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import MetaTags from "../../components/DefaultMetaTags/MetaTags";

export default function ProductDetail({ results }) {
    const meta = {
        title: `${results.name} - Кравлер`,
        keywords: `${results.name}, ${results.brand_name}, ${results.sku}, Кравлер `,
        description: `${results.short_description.html}. Барааны код: ${results.sku}`,
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

export async function getStaticPaths() {
    if (process.env.INITIATED === "FALSE") {
        return {
            paths: [],
            fallback: "blocking",
        };
    }
    const categoriesOfProducts = await DatabaseClient.category.findMany({
        select: {
            products: true,
        },
    });

    const allProducts = categoriesOfProducts.reduce(
        (previousValue, currentValue) => [
            ...previousValue,
            ...currentValue.products,
        ],
        []
    );

    await writeFile(
        path.join(process.cwd(), "temporary.json"),
        JSON.stringify(allProducts)
    );

    const paths = allProducts.map(({ url_key }) => {
        return { params: { product_id: url_key } };
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params: { product_id } }) {
    const rawAllProducts = await readFile(
        path.join(process.cwd(), "temporary.json")
    );
    const allProducts = JSON.parse(rawAllProducts);

    let results;

    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].url_key === product_id) {
            results = allProducts[i];
            break;
        }
    }

    return {
        props: { results },
    };
}
