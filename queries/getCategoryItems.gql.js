import { gql } from "@apollo/client";

export default gql`
    query category(
        $id: Int!
        $pageSize: Int!
        $currentPage: Int!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        category(id: $id) {
            id
            description
            name
            meta_description
            mp_promo_banners {
                items {
                    banner_id
                    name
                    status
                    store_ids
                    customer_group_ids
                    popup_responsive
                    floating_position
                    banner_image
                    type
                    floating_image
                    floating_position
                    category
                    category_ids
                    page
                    page_type
                    url
                    content
                    popup_image
                    popup_responsive
                    from_date
                    to_date
                    show_product_page
                }
            }
        }
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $filters
            sort: $sort
        ) {
            items {
                # id is always required, even if the fragment includes it.
                id
                # TODO: Once this issue is resolved we can use a
                # GalleryItemFragment here:
                # https://github.com/magento/magento2/issues/28584
                name
                sku
                brand
                salable_qty
                brand_name
                new_to_date
                short_description {
                    html
                }
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                special_price
                special_to_date
                small_image {
                    url
                }
                media_gallery {
                    file_small
                    url
                    label
                    position
                }
                url_key
                url_suffix
                mp_label_data {
                    enabled
                    name
                    priority
                    label_template
                    label_image
                    to_date
                }

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
            page_info {
                total_pages
            }
            total_count
        }
    }
`;
