import Head from "next/head";

export default function MetaTags({ title, keywords, description }) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
}

MetaTags.defaultProps = {
    title: "Кравлер - онлайн дэлгүүрүүдийн үнэ харьцуулалт",
    keywords:
        "online shop mongolia, online shop, шоп, онлайн худалдаа, онлайн дэлгүүр, дэлгүүр, online xudaldaa, интернет дэлгүүр, интернет худалдаа, брэндүүд, брендүүд, branduud, brandvvd, бүх бараа, delgvvr, online delgvvr",
    description: "Цахим орчимд хамгийн хямдаар бараагаа авахад туслана. ",
};
