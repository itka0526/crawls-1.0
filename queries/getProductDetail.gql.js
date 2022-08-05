import { gql } from "@apollo/client";

export default gql`
    query getProductDetailForProductPage($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
            items {
                # Once graphql-ce/1027 is resolved, use a ProductDetails fragment
                # here instead.
                __typename
                is_gram
                categories {
                    id
                    breadcrumbs {
                        category_id
                    }
                }
                stock_status
                description {
                    html
                }
                hide_storepay
                hide_omnipay
                brand
                salable_qty
                brand_name
                rating_summary
                special_price
                special_to_date
                special_from_date
                new_from_date
                new_to_date
                eleasing
                sanamj_hurgelt
                sanamj_lastone
                sanamj_misheel
                sanamj_ontsgoi
                sanamj_bayarlalaa
                max_price
                saleMinQuantity
                shipping_price
                media_gallery {
                    file
                    url
                    label
                    position
                    disabled
                    file_small
                }
                tier_prices {
                    customer_group_id
                    percentage_value
                    qty
                    value
                    website_id
                }
                mp_label_data {
                    enabled
                    name
                    priority
                    label_template
                    label_image
                    to_date
                    list_image
                    list_template
                    same
                }

                review_count

                short_description {
                    html
                }
                id
                media_gallery_entries {
                    id
                    label
                    position
                    disabled
                    file
                }
                meta_description
                name
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                sku
                small_image {
                    url
                }
                url_key
                ... on ConfigurableProduct {
                    configurable_options {
                        attribute_code
                        attribute_id
                        id
                        label
                        values {
                            default_label
                            label
                            store_label
                            use_default_value
                            value_index
                            swatch_data {
                                ... on ImageSwatchData {
                                    thumbnail
                                }
                                value
                            }
                        }
                    }

                    variants {
                        attributes {
                            code
                            value_index
                        }
                        product {
                            salable_qty
                            id
                            status
                            media_gallery {
                                file
                                url
                                label
                                position
                                disabled
                                file_small
                            }
                            media_gallery_entries {
                                id
                                disabled
                                file
                                label
                                position
                            }
                            tier_prices {
                                customer_group_id
                                percentage_value
                                qty
                                value
                                website_id
                            }
                            special_price
                            special_to_date
                            sku
                            shipping_price
                            max_price
                            stock_status
                            price {
                                regularPrice {
                                    amount {
                                        currency
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
