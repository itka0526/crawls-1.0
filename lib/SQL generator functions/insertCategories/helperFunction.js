const helperFunction = function (array) {
    return array.map(
        ({
            id,
            name,
            include_in_menu,
            position,
            url_path,
            url_key,
            children,
        }) => ({
            id,
            name,
            include_in_menu,
            position,
            url_path,
            url_key,
            children:
                children && children.length > 0
                    ? {
                          create: helperFunction(children),
                      }
                    : undefined,
        })
    );
};
export default helperFunction;
