const getMetaTag = (name) =>
    $(`meta[name=${name}]`).attr("content") ||
    $(`meta[property="og:${name}"]`).attr("content") ||
    $(`meta[property="twitter:${name}"]`).attr("content");

export default getMetaTag;
