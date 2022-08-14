import Image from "next/image";
import Link from "next/link";
import { string, shape, number, any, array, arrayOf } from "prop-types";
import Price from "../Price/Price";

export default function Product({ product, category_id }) {
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
        <div className="grid h-full w-full grid-flow-row  rounded-sm border p-2  transition-shadow hover:shadow-lg">
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap ">
                <span>{brand_name}</span>
            </div>
            <div className="mb-4 w-full">
                <Link href={`/product/${category_id}/${url_key}`}>
                    <div className="relative w-full pb-[100%]">
                        <Image
                            draggable={false}
                            alt="image-product"
                            layout="fill"
                            objectFit="contain"
                            src={thumbail}
                        />
                    </div>
                </Link>
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="overflow-hidden whitespace-nowrap font-bold">
                    {name}
                </span>
            </div>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                <span>{html.replaceAll(/(<p>)|(<\/p>)/g, "")}</span>
            </div>
            <div className="flex flex-wrap items-center text-lg ">
                <Price normalPrice={value} specialPrice={special_price} />
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
