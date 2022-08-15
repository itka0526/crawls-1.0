import { puppeteerGetData } from "../../lib/puppeteer";

export default async function handler(req, res) {
    const arr = [
        {
            link: "https://www.nomin.mn/04irtf6832e0.html",
            text: "���үү TEFAL FV6832E0 - nomin.mnwww.nomin.mn � ...",
            image: "https://www.nomin.mn/favicon.ico",
            website: "https://www.nomin.mn",
        },
        {
            link: "https://eshop.nomin.mn/04irtf6832e0.html",
            text: "���үү TEFAL FV6832E0 - nomin.mneshop.nomin.mn � ...",
            image: "https://eshop.nomin.mn/favicon.ico",
            website: "https://eshop.nomin.mn",
        },
        {
            link: "https://next.mn/products/fv6832e0",
            text: "Tefal FV6832E0 2800���� �ү��� �������� ���үү - Next.mnnext.mn � products � fv6832e0",
            image: "https://next.mn/favicon.ico",
            website: "https://next.mn",
        },
        {
            link: "https://ardshop.mn/list/digital_indvv",
            text: "�������: ���үү - Ardshop.mnardshop.mn � list � digital_indvv",
            image: "https://ardshop.mn/favicon.ico",
            website: "https://ardshop.mn",
        },
    ];

    let test = arr[2];

    const result = await puppeteerGetData(test.link);
    res.send(result);
}
