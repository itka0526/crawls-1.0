import Image from "next/image";
import Link from "next/link";
import { string, shape, number, any, array, arrayOf } from "prop-types";

export default function Product({ product }) {
    const {
        brand_name,
        small_image,
        media_gallery,
        name,
        short_description: { html },
        special_price,
        price: {
            regularPrice: {
                amount: { value },
            },
        },
        url_key,
    } = product;
    const thumbail = small_image.url || media_gallery[0].file_small;

    return (
        <div className="m-1 grid grid-rows-[3rem_1fr_2rem_2rem_2rem] rounded-sm border px-2 ">
            <div>
                <span>{brand_name}</span>
            </div>
            <div className="mb-4 w-full">
                <Link href={`/product/${url_key}`}>
                    <div className="relative h-44 w-full">
                        <Image
                            alt="image-product"
                            layout="fill"
                            objectFit="contain"
                            src={thumbail}
                        />
                    </div>
                </Link>
            </div>
            <div>
                <span className="font-bold">{name}</span>
            </div>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                <span>{html.replaceAll(/(<p>)|(<\/p>)/g, "")}</span>
            </div>
            <div className="flex">
                <span>{value.toLocaleString()}₮</span>
                {special_price && <span>{special_price}</span>}
            </div>
        </div>
    );
}

Product.propTypes = {
    product: shape({
        __typename: string,
        id: number,
        name: string,
        sku: string,
        brand: number,
        salable_qty: number,
        brand_name: string,
        new_to_date: any,
        short_description: shape({
            __typename: string,
            html: string,
        }),
        price: shape({
            __typename: string,
            regularPrice: shape({
                __typename: string,
                amount: shape({
                    __typename: string,
                    currency: string,
                    value: number,
                }),
            }),
        }),
        special_price: any,
        special_to_date: any,
        small_image: shape({
            __typename: string,
            url: string,
        }),
        media_gallery: arrayOf(
            shape({
                __typename: string,
                file_small: string,
                url: string,
                label: any,
                position: number,
            })
        ),
        url_key: string,
        url_suffix: string,
        mp_label_data: array,
    }),
};
