import { string, shape, number, any, array, arrayOf } from "prop-types";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

export default function ProductDetailLeftSide({ results }) {
    const { media_gallery } = results;
    return (
        <section className="h-full w-full ">
            <ImageCarousel images={media_gallery} />
        </section>
    );
}

ProductDetailLeftSide.propTypes = {
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
            amount: arrayOf(any),
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
            position: -number,
        })
    ),
    url_key: string,
    url_suffix: string,
    mp_label_data: array,
};
