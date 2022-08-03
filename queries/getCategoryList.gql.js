import { gql } from "@apollo/client";

export default gql`
    query navigationMenu($id: Int!) {
        category(id: $id) {
            id
            name
            children {
                children {
                    children {
                        children_count
                        id
                        include_in_menu
                        category_icon
                        name
                        position
                        url_path
                        url_suffix
                    }
                    children_count
                    id
                    include_in_menu
                    category_icon
                    name
                    position
                    url_path
                    url_suffix
                }
                custom_attribute
                children_count
                id
                include_in_menu
                category_icon
                name
                position
                url_path
                url_suffix
                url_key
                nomin_category
                productImagePreview: products(pageSize: 1) {
                    items {
                        id
                        small_image {
                            url
                        }
                    }
                }
            }
        }
    }
`;
