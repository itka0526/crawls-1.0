import { string, shape, number, any, array, arrayOf } from "prop-types";
import { useEffect, useState } from "react";
import Price from "../Price/Price";

export default function ProductDetailRightSide({ results }) {
    const {
        name,
        brand_name,
        short_description: { html },
        url_key,
        price: {
            regularPrice: { value },
        },
        special_price,
    } = results;

    const [listOfAvailableShops, setListOfAvailableShops] = useState([
        { image: "/", text: "No available shops " },
    ]);

    useEffect(() => {
        const requestVariables = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: url_key,
            }),
        };
        (async () => {
            const pending_response = await fetch(
                "/api/search?nomin_sku=true",
                requestVariables
            );
            const response = await pending_response.json();
            console.log(response.results);

            response &&
                response.results &&
                response.results.length > 0 &&
                setListOfAvailableShops(response.results);
        })();
    }, [url_key]);

    const BoldText = ({ text, propClassName }) => (
        <div className="mb-1">
            <span className={`text-xl font-bold capitalize ${propClassName}`}>
                {text}
            </span>
        </div>
    );

    const AvailableShop = ({ shop }) => {
        const { link, text, website, image } = shop;
        return (
            <a
                href={link}
                className=" relative mb-4 flex h-12 w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border bg-slate-50 pl-12 shadow-sm"
                target={"_blank"}
                rel="noopener noreferrer"
            >
                <img
                    draggable={false}
                    className="absolute left-4 z-10"
                    alt="nothing"
                    width={25}
                    height={25}
                    src={image}
                    onError={({ currentTarget }) => {
                        currentTarget.remove();
                    }}
                />
                <span className=" text-blue-500">
                    {text.replace(/[^\x00-\x7F]/g, "")}
                </span>
            </a>
        );
    };
    return (
        <section className="my-1 flex h-full w-full flex-col">
            <BoldText text={name} />
            <BoldText text={brand_name} className="pl-1" />
            <div className="flex justify-between ">
                <Price normalPrice={value} specialPrice={special_price} />
            </div>
            <p className="mb-4">{html.replaceAll(/(<p>)|(<\/p>)/g, "")}</p>
            {listOfAvailableShops.map((shop, index) => (
                <AvailableShop shop={shop} key={`shop-${index}`} />
            ))}
        </section>
    );
}

ProductDetailRightSide.propTypes = {
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
