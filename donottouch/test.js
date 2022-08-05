// import getAllCategoryURLkeys from "../../lib/getAllCategoryItemURLkeys";
import getCategoryIdFromURL from "../../lib/getCategoryIdFromURL";
import getCategoryItems from "../../lib/getCategoryItems";
import getIncludeInTheMenu from "../../lib/getMenu/getIncludeInTheMenu";

import { promises as fs } from "fs";
import path from "path";
import getCategoryItemPaths from "../../lib/getCategoryItemPaths";
import getCategoryPaths from "../../lib/getCategoryPaths";

const categoryIdentifiers = [
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19778,
                relative_url: "n-homestyle-department.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22679,
                relative_url: "n-homestyle/pets.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22680,
                relative_url: "n-homestyle/pets/animal-s-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22683,
                relative_url: "n-homestyle/pets/animal-accessories.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22547,
                relative_url:
                    "n-homestyle-department/cjevjerljegjejenij-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22548,
                relative_url:
                    "n-homestyle-department/cjevjerljegjejenij-b-tjejegdjeh-n/njert-ljegch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22552,
                relative_url:
                    "n-homestyle-department/cjevjerljegjejenij-b-tjejegdjeh-n/cjevjerljegjejenij-bodis.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22550,
                relative_url:
                    "n-homestyle-department/cjevjerljegjejenij-b-tjejegdjeh-n/cjevjerljejegjejenij-bagazh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22729,
                relative_url:
                    "n-homestyle-department/cjevjerljegjejenij-b-tjejegdjeh-n/clothes-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22467,
                relative_url: "n-homestyle-department/ugaalgyn-r.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22468,
                relative_url:
                    "n-homestyle-department/ugaalgyn-r/ugaalgyn-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22529,
                relative_url: "n-homestyle-department/ugaalgyn-r/alchuuur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22536,
                relative_url:
                    "n-homestyle-department/ugaalgyn-r/vanny-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22461,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22462,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa/gjerijn-hjerjegcjejet.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22511,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa/gjerijn-chimjegljel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22514,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa/bjeljeg-dursgal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22516,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa/hadgalah-sav.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22521,
                relative_url:
                    "n-homestyle-department/gjer-ahujn-hjerjegcjejet-baraa/togtooh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21631,
                relative_url: "n-homestyle-department/living-room.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21835,
                relative_url:
                    "n-homestyle-department/living-room/furniture.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21700,
                relative_url:
                    "n-homestyle-department/living-room/home-decoration.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19783,
                relative_url: "n-homestyle-department/kitchen.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19801,
                relative_url:
                    "n-homestyle-department/kitchen/shiljen-jedljel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19787,
                relative_url:
                    "n-homestyle-department/kitchen/food-preparation-container.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19795,
                relative_url:
                    "n-homestyle-department/kitchen/hool-bjeltgjeh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19800,
                relative_url:
                    "n-homestyle-department/kitchen/hoolnii-shirjejenij-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19831,
                relative_url: "n-homestyle-department/lbathroom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19834,
                relative_url: "n-homestyle-department/lbathroom/djer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19836,
                relative_url: "n-homestyle-department/lbathroom/h-nzhil.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22408,
                relative_url: "n-homestyle-department/lbathroom/chair.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19832,
                relative_url:
                    "n-homestyle-department/lbathroom/b-tjejeljeg.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22409,
                relative_url: "n-homestyle-department/lbathroom/bed-cover.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19833,
                relative_url:
                    "n-homestyle-department/lbathroom/gudas-matrass.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19835,
                relative_url:
                    "n-homestyle-department/lbathroom/orny-daavuun-jedljel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21859,
                relative_url: "n-homestyle-department/disposable-tool.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21297,
                relative_url: "n-cosmetics-department.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22376,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22377,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins/handwriting-paper.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22378,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins/napkin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22379,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins/toilet-paper.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22380,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins/sanitary-ware.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22383,
                relative_url:
                    "n-cosmetics-department/sanitary-ware-napkins/h-v-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21304,
                relative_url: "n-cosmetics-department/hair-scalp-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22355,
                relative_url:
                    "n-cosmetics-department/hair-scalp-care/hair-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21307,
                relative_url:
                    "n-cosmetics-department/hair-scalp-care/hair-dye.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22357,
                relative_url:
                    "n-cosmetics-department/hair-scalp-care/hair-cleaning.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22057,
                relative_url:
                    "n-cosmetics-department/hair-scalp-care/hair-tools.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21628,
                relative_url: "n-cosmetics-department/perfume.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22352,
                relative_url: "n-cosmetics-department/perfume/female.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22354,
                relative_url: "n-cosmetics-department/perfume/men.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22381,
                relative_url: "n-cosmetics-department/perfume/bagc.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22382,
                relative_url: "n-cosmetics-department/perfume/b-h-h-js.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22649,
                relative_url: "n-cosmetics-department/perfume/mist.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21308,
                relative_url: "n-cosmetics-department/skin-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22347,
                relative_url: "n-cosmetics-department/skin-care/hand-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22348,
                relative_url: "n-cosmetics-department/skin-care/foot-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22349,
                relative_url: "n-cosmetics-department/skin-care/body-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22387,
                relative_url:
                    "n-cosmetics-department/skin-care/n-rnij-archilgaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21298,
                relative_url: "n-cosmetics-department/make-up.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22345,
                relative_url: "n-cosmetics-department/make-up/gift-card.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22204,
                relative_url: "n-cosmetics-department/make-up/eyes.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22252,
                relative_url: "n-cosmetics-department/make-up/hums.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22386,
                relative_url:
                    "n-cosmetics-department/make-up/n-rnij-budag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22075,
                relative_url: "n-cosmetics-department/make-up/lip.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22077,
                relative_url: "n-cosmetics-department/make-up/eyebrow.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22385,
                relative_url:
                    "n-cosmetics-department/make-up/n-r-budalt-bagazh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21532,
                relative_url: "n-cosmetics-department/oral-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21535,
                relative_url: "n-cosmetics-department/oral-care/mouthwash.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21533,
                relative_url:
                    "n-cosmetics-department/oral-care/toothpaste.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21534,
                relative_url:
                    "n-cosmetics-department/oral-care/toothbrush.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22088,
                relative_url:
                    "n-cosmetics-department/oral-care/dental-implant.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22370,
                relative_url:
                    "n-cosmetics-department/oral-care/dental-tools.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21860,
                relative_url: "n-cosmetics-department/man.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22059,
                relative_url: "n-cosmetics-department/man/men-s-perfum.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22358,
                relative_url: "n-cosmetics-department/man/skin-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22359,
                relative_url: "n-cosmetics-department/man/hair-scalp-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22360,
                relative_url: "n-cosmetics-department/man/shaving-care.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22749,
                relative_url: "n-cosmetics-department/flormar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19518,
                relative_url: "n-building-materials-tools.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21838,
                relative_url: "n-building-materials-tools/dotor-zasal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21840,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/plita.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21841,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/oboj-huulga.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21842,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/haalga.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21843,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/gjerjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21844,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/parket-laminat.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21845,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/abazhur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21846,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/differencial.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21847,
                relative_url:
                    "n-building-materials-tools/dotor-zasal/rozetka-untraalga.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19519,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19520,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh/bjehljeh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19521,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh/gar-bagazh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19522,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh/sjelbjeg-tuslah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19523,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh/hjemzhih-bagazh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19524,
                relative_url:
                    "n-building-materials-tools/bagazh-tonog-t-h-r-mzh/cahilgaan-bagazh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19535,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19537,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/vann.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19539,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/pisuar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19541,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/sangijn-zhizhig-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19542,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/suultuur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19543,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/ugaaltuur-tosguur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19544,
                relative_url:
                    "n-building-materials-tools/sangijn-tonoglol/holigch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19487,
                relative_url: "nom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19497,
                relative_url: "nom/hjel-shinzhljel-tol-bichig.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21638,
                relative_url:
                    "nom/hjel-shinzhljel-tol-bichig/gadaad-hjelnij-surah-bichig.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21639,
                relative_url: "nom/hjel-shinzhljel-tol-bichig/tol-bichig.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21640,
                relative_url:
                    "nom/hjel-shinzhljel-tol-bichig/dasgalyn-nom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21641,
                relative_url:
                    "nom/hjel-shinzhljel-tol-bichig/jariany-djevtjer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19488,
                relative_url: "nom/bajgalijn-shinzhljeh-uhaan.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21624,
                relative_url:
                    "nom/bajgalijn-shinzhljeh-uhaan/am-tan-urgamal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21625,
                relative_url: "nom/bajgalijn-shinzhljeh-uhaan/geologi.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21626,
                relative_url:
                    "nom/bajgalijn-shinzhljeh-uhaan/jekologi-bajgal-orchin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19499,
                relative_url: "nom/jer-l-mjend-gjer-b-l.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21615,
                relative_url:
                    "nom/jer-l-mjend-gjer-b-l/orchin-eijn-anagaah-uhaan.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21616,
                relative_url:
                    "nom/jer-l-mjend-gjer-b-l/ulamzhlalt-anagaah-uhaan.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21617,
                relative_url: "nom/jer-l-mjend-gjer-b-l/gjer-b-l.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19493,
                relative_url: "nom/uran-zohiol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21586,
                relative_url: "nom/uran-zohiol/mongolyn-uran-zohiol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21587,
                relative_url: "nom/uran-zohiol/gadaadyn-uran-zohoil.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19496,
                relative_url: "nom/h-hdijn-nom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21132,
                relative_url: "nom/h-hdijn-nom/lgjer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21133,
                relative_url: "nom/h-hdijn-nom/komik-manga.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21134,
                relative_url: "nom/h-hdijn-nom/h-hdijn-uran-zohiol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21135,
                relative_url: "nom/h-hdijn-nom/tanin-mjedjeh-j.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21136,
                relative_url: "nom/h-hdijn-nom/sjetgjeh-j-h-gzh-ljeh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21137,
                relative_url: "nom/h-hdijn-nom/surah-bichig.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21138,
                relative_url: "nom/h-hdijn-nom/buddag-nom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21622,
                relative_url: "nom/bestselljer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22139,
                relative_url: "nom/gadaad-hjel-djejer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19489,
                relative_url: "nom/gazryn-zurag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19490,
                relative_url: "nom/namtar-dursamzh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19491,
                relative_url: "nom/narijn-mjergjezhil-jldvjerljel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19492,
                relative_url: "nom/nijgmijn-shinzhljeh-uhaan.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19494,
                relative_url: "nom/hobbi-ch-l-t-cag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19495,
                relative_url: "nom/huul-jerh-z-j.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21127,
                relative_url: "nom/t-h.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21128,
                relative_url: "nom/huv-h-nij-h-gzhil.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21129,
                relative_url: "nom/sjetg-l.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21130,
                relative_url: "nom/sojol-urlag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21131,
                relative_url: "nom/shashin-filosofi.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21423,
                relative_url: "nom/biznes-jedijn-zasag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19853,
                relative_url: "n-travel-products.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21265,
                relative_url: "n-travel-products/sport-products.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21261,
                relative_url:
                    "n-travel-products/sport-products/sport-tool.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21262,
                relative_url:
                    "n-travel-products/sport-products/sports-equipment.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21260,
                relative_url: "n-travel-products/sport-products/sport.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22211,
                relative_url:
                    "n-travel-products/sport-products/usan-sport.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22210,
                relative_url: "n-travel-products/sport-products/fitnes.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22216,
                relative_url: "n-travel-products/sport-products/b-mb-g.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22217,
                relative_url: "n-travel-products/sport-products/rollik.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22218,
                relative_url: "n-travel-products/sport-products/iog.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22219,
                relative_url: "n-travel-products/sport-products/tajag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19855,
                relative_url: "n-travel-products/travel-goods.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19856,
                relative_url:
                    "n-travel-products/travel-goods/travel-cups-and-saucers.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19869,
                relative_url: "n-travel-products/travel-goods/travel-bag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19857,
                relative_url:
                    "n-travel-products/travel-goods/campaign-blankets-and-bears.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19858,
                relative_url:
                    "n-travel-products/travel-goods/bio-00-dagaldah-hjerjegsl-d.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19859,
                relative_url: "n-travel-products/travel-goods/busad.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19861,
                relative_url:
                    "n-travel-products/travel-goods/gjerjel-djenl.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19862,
                relative_url:
                    "n-travel-products/travel-goods/tent-and-shed.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19865,
                relative_url:
                    "n-travel-products/travel-goods/hool-hijh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19867,
                relative_url:
                    "n-travel-products/travel-goods/campaign-knife.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22220,
                relative_url:
                    "n-travel-products/travel-goods/shirjeje-sandal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22221,
                relative_url: "n-travel-products/travel-goods/duran.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22222,
                relative_url:
                    "n-travel-products/travel-goods/or-hijldjeg-gudas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19663,
                relative_url: "n-food-grocery-department.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20509,
                relative_url: "n-food-grocery-department/processed-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20540,
                relative_url:
                    "n-food-grocery-department/processed-food/dessert.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20559,
                relative_url:
                    "n-food-grocery-department/processed-food/tea-and-coffee-dry.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22126,
                relative_url:
                    "n-food-grocery-department/processed-food/food-seasoning.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22128,
                relative_url:
                    "n-food-grocery-department/processed-food/mixture.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20547,
                relative_url:
                    "n-food-grocery-department/processed-food/frozen-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20558,
                relative_url:
                    "n-food-grocery-department/processed-food/canned-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20783,
                relative_url:
                    "n-food-grocery-department/processed-food/baby-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20515,
                relative_url: "n-food-grocery-department/fresh-food.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20539,
                relative_url:
                    "n-food-grocery-department/fresh-food/bakery.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20538,
                relative_url:
                    "n-food-grocery-department/fresh-food/dairy-products.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20778,
                relative_url:
                    "n-food-grocery-department/fresh-food/vegetable.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22202,
                relative_url: "n-food-grocery-department/fresh-food/ham.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20792,
                relative_url: "n-food-grocery-department/fresh-food/fruit.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20587,
                relative_url: "n-food-grocery-department/fresh-food/eggs.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21201,
                relative_url:
                    "n-food-grocery-department/fresh-food/butter.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21540,
                relative_url:
                    "n-food-grocery-department/fresh-food/kimchi.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22099,
                relative_url:
                    "n-food-grocery-department/fresh-food/cheese.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22130,
                relative_url: "n-food-grocery-department/fresh-food/meat.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20520,
                relative_url: "n-food-grocery-department/shingjen-h-ns.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20521,
                relative_url:
                    "n-food-grocery-department/shingjen-h-ns/us-undaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20584,
                relative_url:
                    "n-food-grocery-department/shingjen-h-ns/electronic-cigarettes.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20526,
                relative_url:
                    "n-food-grocery-department/shingjen-h-ns/soothing-drinks.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19653,
                relative_url: "n-fashion-department.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19881,
                relative_url: "n-fashion-department/jerjegtjej-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19882,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/short.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19884,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/camc.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19888,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/gaduur-huvcas-h-rjem.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19889,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/dotuur-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19890,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/majk-futbolka.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19891,
                relative_url: "n-fashion-department/jerjegtjej-huvcas/md.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19892,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/hoslol-pidzhak.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21166,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/gutal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21173,
                relative_url:
                    "n-fashion-department/jerjegtjej-huvcas/aksessuar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19876,
                relative_url: "n-fashion-department/jemjegtjej-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19877,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/gaduur-huvcas-h-rjem-n-mr-g.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19878,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/daashinz.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19879,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/dotuur-huvcas-untlagyn-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19880,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/majk-futbolka-cjejezhivch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19885,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/hoslol-pidzhak.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19886,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/camc.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19887,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/jubka-short.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19893,
                relative_url: "n-fashion-department/jemjegtjej-huvcas/md.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21146,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/gutal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21154,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/aksessuar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22084,
                relative_url:
                    "n-fashion-department/jemjegtjej-huvcas/maternity.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19659,
                relative_url: "n-fashion-department/h-hdijn-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19660,
                relative_url:
                    "n-fashion-department/h-hdijn-huvcas/njarajn-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19661,
                relative_url:
                    "n-fashion-department/h-hdijn-huvcas/ohidyn-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19662,
                relative_url:
                    "n-fashion-department/h-hdijn-huvcas/h-vg-dijn-huvcas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19767,
                relative_url: "n-healthcare-products.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19775,
                relative_url: "n-healthcare-products/jer-l-mjendijn-h-ns.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19776,
                relative_url:
                    "n-healthcare-products/jer-l-mjendijn-h-ns/jer-l-mjendijn-njemjelt-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19777,
                relative_url:
                    "n-healthcare-products/jer-l-mjendijn-h-ns/jer-l-mjendijn-caj-kofe.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19773,
                relative_url:
                    "n-healthcare-products/jer-l-mjendijn-t-h-r-mzh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19774,
                relative_url:
                    "n-healthcare-products/jer-l-mjendijn-t-h-r-mzh/busad-jer-l-mjendijn-t-h-r-mzh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19768,
                relative_url:
                    "n-healthcare-products/asargaa-suvilgaany-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19769,
                relative_url:
                    "n-healthcare-products/asargaa-suvilgaany-b-tjejegdjeh-n/amny-haalt.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19770,
                relative_url:
                    "n-healthcare-products/asargaa-suvilgaany-b-tjejegdjeh-n/anhny-tuslamzh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19771,
                relative_url:
                    "n-healthcare-products/asargaa-suvilgaany-b-tjejegdjeh-n/busad.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19772,
                relative_url:
                    "n-healthcare-products/asargaa-suvilgaany-b-tjejegdjeh-n/jemnjelgijn-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19545,
                relative_url: "n-children-department.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19568,
                relative_url:
                    "n-children-department/h-hdijn-zhivh-shingjejeh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19569,
                relative_url:
                    "n-children-department/h-hdijn-zhivh-shingjejeh-hjerjegsjel/zhivh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19570,
                relative_url:
                    "n-children-department/h-hdijn-zhivh-shingjejeh-hjerjegsjel/h-t-vch-suultuuryn-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19571,
                relative_url:
                    "n-children-department/h-hdijn-zhivh-shingjejeh-hjerjegsjel/h-hdijn-sal-fetka.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19562,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19563,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa/h-hdijn-am-archilgaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19564,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa/h-hdijn-ariun-cjevrijn-bagazh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19565,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa/h-hdijn-ar-s-archilgaany-tos.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19566,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa/h-hdijn-s-bie-archilgaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19567,
                relative_url:
                    "n-children-department/h-hdijn-ar-s-archilgaa/h-hdijn-jed-z-jl-ugaah-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19554,
                relative_url: "n-children-department/togloom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19555,
                relative_url:
                    "n-children-department/togloom/busad-togloom-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19556,
                relative_url: "n-children-department/togloom/duguj-sk-ter.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19557,
                relative_url:
                    "n-children-department/togloom/z-l-n-togloom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19558,
                relative_url: "n-children-department/togloom/mashin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19559,
                relative_url:
                    "n-children-department/togloom/sjetgjeh-j-h-gzh-ljeh-togloom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19560,
                relative_url:
                    "n-children-department/togloom/udirdlagataj-togloom.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19561,
                relative_url:
                    "n-children-department/togloom/h-hjeldjej-akksesuar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19551,
                relative_url: "n-children-department/njaraj-h-hdijn-h-ns.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19552,
                relative_url:
                    "n-children-department/njaraj-h-hdijn-h-ns/h-hdijn-undaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 20568,
                relative_url:
                    "n-children-department/njaraj-h-hdijn-h-ns/h-hdijn-nuhash.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19572,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19550,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel/zhirjemsjen-h-h-l-jejezhijn-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19573,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel/ugzh-busad-dagaldah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19574,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel/hool-idjeh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19575,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel/hoolny-shirjeje.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19576,
                relative_url:
                    "n-children-department/h-hjed-asrah-hoolloh-hjerjegsjel/jengjerjevch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19546,
                relative_url:
                    "n-children-department/ajuulg-j-bajdal-h-d-lg-ntjej-holbootoj-baraa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19547,
                relative_url:
                    "n-children-department/ajuulg-j-bajdal-h-d-lg-ntjej-holbootoj-baraa/mashiny-suudal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19548,
                relative_url:
                    "n-children-department/ajuulg-j-bajdal-h-d-lg-ntjej-holbootoj-baraa/h-ld-oruulagch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19549,
                relative_url:
                    "n-children-department/ajuulg-j-bajdal-h-d-lg-ntjej-holbootoj-baraa/h-hdijn-tjerjeg-b-vjejljegch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19469,
                relative_url: "n-books-stationery-products.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19511,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19512,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/bichgijn-caas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19513,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/dugtuj.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19514,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/zurgijn-djevtjer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19515,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/naadag-caas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19516,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/tjemdjegljelijn-djevtjer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19517,
                relative_url:
                    "n-books-stationery-products/caasan-b-tjejegdjeh-n/hichjejelijn-djevtjer.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19506,
                relative_url:
                    "n-books-stationery-products/hichjejelijn-tuslah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19507,
                relative_url:
                    "n-books-stationery-products/hichjejelijn-tuslah-hjerjegsjel/barimlyn-shavar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19508,
                relative_url:
                    "n-books-stationery-products/hichjejelijn-tuslah-hjerjegsjel/ngijn-caas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19509,
                relative_url:
                    "n-books-stationery-products/hichjejelijn-tuslah-hjerjegsjel/sambar-dagaldah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19510,
                relative_url:
                    "n-books-stationery-products/hichjejelijn-tuslah-hjerjegsjel/cavuu.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19500,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19501,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel/taviur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19502,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel/toony-mashin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19503,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel/djejesnij-mashin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19504,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel/hajch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19505,
                relative_url:
                    "n-books-stationery-products/offisyn-tuslah-hjerjegsjel/coologch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19478,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19479,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/balluur.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19480,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/bijr.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19481,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/ngijn-harandaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19482,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/toson-harandaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19483,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/usan-budag.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19484,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/z-rljegch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19485,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/flomaster.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19486,
                relative_url:
                    "n-books-stationery-products/zurah-hjerjegsjel/shugam.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19474,
                relative_url: "n-books-stationery-products/busad.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19475,
                relative_url: "n-books-stationery-products/busad/havtas.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19476,
                relative_url: "n-books-stationery-products/busad/c-nh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19470,
                relative_url:
                    "n-books-stationery-products/bichih-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19471,
                relative_url:
                    "n-books-stationery-products/bichih-hjerjegsjel/zjeg-bal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19472,
                relative_url:
                    "n-books-stationery-products/bichih-hjerjegsjel/harandaa.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19473,
                relative_url:
                    "n-books-stationery-products/bichih-hjerjegsjel/shtrik-arilgagch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19451,
                relative_url: "n-autoparts-tools.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19464,
                relative_url:
                    "n-autoparts-tools/archilgaa-cjevjerljegjeje.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19465,
                relative_url:
                    "n-autoparts-tools/archilgaa-cjevjerljegjeje/avtyn-shil-tol-cjevjerljegch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19466,
                relative_url:
                    "n-autoparts-tools/archilgaa-cjevjerljegjeje/mashiny-toos-unagagch-ugaagch-sagsgar.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19467,
                relative_url:
                    "n-autoparts-tools/archilgaa-cjevjerljegjeje/njert-ljegch.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19461,
                relative_url:
                    "n-autoparts-tools/avtomashiny-jed-angi-sjelbjeg.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19462,
                relative_url:
                    "n-autoparts-tools/avtomashiny-jed-angi-sjelbjeg/avto-ajallyn-jed-angi-dagaldah-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19463,
                relative_url:
                    "n-autoparts-tools/avtomashiny-jed-angi-sjelbjeg/njemjelt-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19457,
                relative_url: "n-autoparts-tools/avtomashiny-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19458,
                relative_url:
                    "n-autoparts-tools/avtomashiny-tonoglol/bartaat-zamyn-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19459,
                relative_url:
                    "n-autoparts-tools/avtomashiny-tonoglol/gadna-avto-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19460,
                relative_url:
                    "n-autoparts-tools/avtomashiny-tonoglol/dotor-avto-tonoglol.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19452,
                relative_url:
                    "n-autoparts-tools/avtomashiny-zasvaryn-bagazh-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19453,
                relative_url:
                    "n-autoparts-tools/avtomashiny-zasvaryn-bagazh-hjerjegsjel/avto-rg-gch-zogsoogch-zasvaryn-hjerjegsjel.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19455,
                relative_url:
                    "n-autoparts-tools/avtomashiny-zasvaryn-bagazh-hjerjegsjel/gar-bolon-mehanik-bagazh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 19456,
                relative_url:
                    "n-autoparts-tools/avtomashiny-zasvaryn-bagazh-hjerjegsjel/duguj-zasvaryn-bagazh.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22650,
                relative_url: "n-autoparts-tools/avtomashin.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 22734,
                relative_url: "n-autoparts-tools/motorcycle.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6011,
                relative_url: "6011.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6059,
                relative_url: "6011/6059.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6094,
                relative_url: "6011/6059/6094.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6095,
                relative_url: "6011/6059/6095.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6096,
                relative_url: "6011/6059/6096.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5918,
                relative_url: "6011/6059/5918.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5917,
                relative_url: "6011/6059/5917.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5919,
                relative_url: "6011/6059/5919.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6083,
                relative_url: "6011/6059/6083.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5920,
                relative_url: "6011/6059/5920.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6040,
                relative_url: "6011/6040.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6086,
                relative_url: "6011/6040/6086.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6088,
                relative_url: "6011/6040/6088.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6109,
                relative_url: "6011/6040/6109.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6091,
                relative_url: "6011/6040/6091.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6031,
                relative_url: "6011/6040/6031.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6092,
                relative_url: "6011/6040/6092.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6138,
                relative_url: "6011/6040/6138.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6085,
                relative_url: "6011/6040/6085.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6103,
                relative_url: "6011/6040/6103.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6014,
                relative_url: "6011/6040/6014.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6029,
                relative_url: "6011/6029.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6039,
                relative_url: "6011/6029/6039.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6111,
                relative_url: "6011/6029/6111.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6078,
                relative_url: "6011/6029/6078.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5933,
                relative_url: "6011/6029/5933.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5932,
                relative_url: "6011/5932.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6007,
                relative_url: "6011/5932/6007.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6124,
                relative_url: "6011/5932/6124.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4345,
                relative_url: "6011/5932/4345.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5993,
                relative_url: "6011/5993.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 5931,
                relative_url: "6011/5993/5931.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6090,
                relative_url: "6011/5993/6090.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6144,
                relative_url: "6011/5993/6144.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4113,
                relative_url: "6011/5993/4113.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4124,
                relative_url: "6011/5993/4124.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4125,
                relative_url: "6011/5993/4125.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4126,
                relative_url: "6011/5993/4126.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4134,
                relative_url: "6011/5993/4134.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 1815,
                relative_url: "6011/1815.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4372,
                relative_url: "6011/1815/4372.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4374,
                relative_url: "6011/1815/4374.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4222,
                relative_url: "6011/1815/4222.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4327,
                relative_url: "6011/1815/4327.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4335,
                relative_url: "6011/1815/4335.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 1814,
                relative_url: "6011/1814.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4360,
                relative_url: "6011/1814/4360.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4362,
                relative_url: "6011/1814/4362.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4364,
                relative_url: "6011/1814/4364.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4227,
                relative_url: "6011/1814/4227.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4229,
                relative_url: "6011/1814/4229.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 1816,
                relative_url: "6011/1816.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4353,
                relative_url: "6011/1816/4353.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4355,
                relative_url: "6011/1816/4355.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4358,
                relative_url: "6011/1816/4358.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4316,
                relative_url: "6011/1816/4316.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4318,
                relative_url: "6011/1816/4318.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4324,
                relative_url: "6011/1816/4324.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6015,
                relative_url: "6011/6015.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4331,
                relative_url: "6011/6015/4331.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 1810,
                relative_url: "6011/6015/1810.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4338,
                relative_url: "6011/6015/4338.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4340,
                relative_url: "6011/6015/4340.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4343,
                relative_url: "6011/6015/4343.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 6065,
                relative_url: "6011/6065.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4321,
                relative_url: "6011/6065/4321.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4323,
                relative_url: "6011/6065/4323.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4325,
                relative_url: "6011/6065/4325.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4333,
                relative_url: "6011/6065/4333.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 4336,
                relative_url: "6011/6065/4336.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 17109,
                relative_url: "gift-cards.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            urlResolver: {
                __typename: "EntityUrl",
                type: "CATEGORY",
                id: 21219,
                relative_url: "daatgal.html",
                redirectCode: 0,
            },
        },
        loading: false,
        networkStatus: 7,
    },
];

const allCategoryItemData = [
    {
        data: {
            products: {
                __typename: "Products",
                items: [
                    {
                        __typename: "SimpleProduct",
                        id: 769099,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom003",
                        brand: 15336,
                        salable_qty: 150,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Шампунь Амьтан арчилгааны Lomi Pet care 250мл ургамлын гаралтай овъёостой</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture165.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture165.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture165.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "12lom003",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 768998,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom001",
                        brand: 15336,
                        salable_qty: 150,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Тос Амьтан арчилгааны Lomi Pet care 45гр ургамлын гаралтай нөхөн төлжүүлэх</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 65999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture12_7-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture1_7.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture1_7.png",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture12_7-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture12_7-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "12lom001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 768994,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom002",
                        brand: 15336,
                        salable_qty: 90,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Нойтон сальфетка Амьтан арчилгааны Lomi Pet care 80ш 25x20 цэвэрлэгээний</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 29999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture167.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture167.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture167.png",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture1564_.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture1564_.png",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture178.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture178.png",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "12lom002",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 762877,
                        name: "Ширээний бүтээлэг Хулдаасан",
                        sku: "4978446072379",
                        brand: 8966,
                        salable_qty: 18,
                        brand_name: "Can Do",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Ширээний бүтээлэг Хулдаасан Цэнхэр Шар Бөмбөлөгтэй 175*130см 2379",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/placeholder/default/nomin-logo-tavangar_17.png",
                        },
                        media_gallery: [],
                        url_key: "4978446072379",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 761267,
                        name: "Стаканы ком ",
                        sku: "01H064751",
                        brand: null,
                        salable_qty: 77,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Стаканы ком LIBBEY 606F Clinton 6ш*355мл Цэнхэр Шилэн</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 29999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-30 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/r/n/rnau33fa6hyycydw5nbl4w.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/u/o/uopep6ohkhrnxm7jfnd08g.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/u/o/uopep6ohkhrnxm7jfnd08g.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/r/n/rnau33fa6hyycydw5nbl4w.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/r/n/rnau33fa6hyycydw5nbl4w.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h064751",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 761205,
                        name: "Хундага угаагч сойз",
                        sku: "01h092932",
                        brand: 14363,
                        salable_qty: 11,
                        brand_name: "Joseph&Joseph",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Хундага угаагч сойз Joseph Joseph 85104 тогтоогчтой саарал GBR",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 24999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-30 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/s/-/s-l640_1_9.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/s/-/s-l640_1_9.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/s/-/s-l640_1_9.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h092932",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760785,
                        name: "Хатаагч дэвсгэр ",
                        sku: "01h0291234",
                        brand: 10467,
                        salable_qty: 9,
                        brand_name: "Koopman",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Хатаагч дэвсгэр  Аяга тавагны Koopman 92732 31.5х40см Олон өнгийн NLD",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 19999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/1200x507.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/2/1200x507.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/1200x507.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h0291234",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760539,
                        name: "Сагс хуванцар жижиг",
                        sku: "4905596446668",
                        brand: 8966,
                        salable_qty: 1,
                        brand_name: "Can Do",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Сагс хуванцар жижиг дөрвөлжин уян цагаан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/9/4905596446668.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/9/4905596446668.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/9/4905596446668.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "4905596446668",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760216,
                        name: "Угаалгын шингэн",
                        sku: "01sh70743",
                        brand: 14494,
                        salable_qty: 9,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн dalli 2750мл Зөөлөн үнэртэй Цагаан Өнгөт хувцасны DUE</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 40999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/_/v/_vyr_8994t-9.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/_/v/_vyr_8994t-9.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/_/v/_vyr_8994t-9.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh70743",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760215,
                        name: "Угаалгын шингэн",
                        sku: "01sh70740",
                        brand: 14494,
                        salable_qty: 3,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн dalli 1100мл Зөөлөн үнэртэй Цагаан Өнгөт хувцасных DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 16699,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/2/820c3cd14fa43b03f3338138a50d87ac.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/2/820c3cd14fa43b03f3338138a50d87ac.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/2/820c3cd14fa43b03f3338138a50d87ac.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh70740",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760214,
                        name: "Угаалгын шингэн Dalli 2.75л",
                        sku: "01sh27170",
                        brand: 14494,
                        salable_qty: 3,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dalli 2750мл Толбо арилгахдаа илүү сайн DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 37999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/ppr1386_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/p/ppr1386_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/ppr1386_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27170",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760213,
                        name: "Угаалгын шингэн Dalli 2.75л",
                        sku: "01sh27169",
                        brand: 14494,
                        salable_qty: 1,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dalli 2750мл Толбо арилгахдаа илүү сайн DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 44999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4012400502509_22199_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/0/4012400502509_22199_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4012400502509_22199_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27169",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760211,
                        name: "Угаалгын шингэн Dalli 2.75л",
                        sku: "01sh27168",
                        brand: 14494,
                        salable_qty: 3,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dalli 2750мл Өнгөтэй хувцсанд зориулагдсан DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 37999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/2/22176622.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/2/2/22176622.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/2/22176622.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27168",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760209,
                        name: "Угаалгын шингэн Dalli 1.1л",
                        sku: "01sh27166",
                        brand: 14494,
                        salable_qty: 8,
                        brand_name: "DALLI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dalli 1100мл Аялал спортийн хувцсанд зориулагдсан DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 16699,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/d/5da60b97384e1f649a1fe8a7.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/d/5da60b97384e1f649a1fe8a7.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/d/5da60b97384e1f649a1fe8a7.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27166",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760208,
                        name: "Угаалгын шингэн Dash 1.1л",
                        sku: "01sh27165",
                        brand: 14589,
                        salable_qty: 3,
                        brand_name: "DASH",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dash 1100мл Толбо арилгахдаа илүү сайн DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 20999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/a/dash-alpenfrische-waschmittel-fluessig-20-waschladungen-43831l_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/a/dash-alpenfrische-waschmittel-fluessig-20-waschladungen-43831l_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/a/dash-alpenfrische-waschmittel-fluessig-20-waschladungen-43831l_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27165",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760207,
                        name: "Угаалгын шингэн Dash 1.1л",
                        sku: "01sh27164",
                        brand: 14589,
                        salable_qty: 11,
                        brand_name: "DASH",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Dash 1100мл Өнгөтэй хувцсанд зориулагдсан DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 20999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/1/21160_v01.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/2/1/21160_v01.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/1/21160_v01.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27164",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760205,
                        name: "Угаалгын шингэн Sunil",
                        sku: "01sh27162",
                        brand: 14588,
                        salable_qty: 16,
                        brand_name: "SUNIL",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Угаалгын шингэн Sunil 1320мл Өнгөтэй хувцсанд зориулагдсан DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 20999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/s/u/sunil-plyn-do-prania-1314l-orchidea-18-pran.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/s/u/sunil-plyn-do-prania-1314l-orchidea-18-pran.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/s/u/sunil-plyn-do-prania-1314l-orchidea-18-pran.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27162",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760203,
                        name: "Даавуу зөөлрүүлэгч",
                        sku: "01sh27160",
                        brand: 14495,
                        salable_qty: 7,
                        brand_name: "Kuschelweich",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Даавуу зөөлрүүлэгч Kuschelweich 1000мл Vegan зөөлөн тааламжтай үнэртэй DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 15999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/0/80266_pim.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/0/80266_pim.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/0/80266_pim.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27160",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760202,
                        name: "Даавуу зөөлрүүлэгч 1л\t",
                        sku: "01sh27159",
                        brand: 14495,
                        salable_qty: 0,
                        brand_name: "Kuschelweich",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Даавуу зөөлрүүлэгч Kuschelweich 1000мл зөөлөн тааламжтай үнэртэй DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 12999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/o/pol_pl_kuschelweich-frischetraum-plyn-do-plukania-1l-31pr-de-7814_2.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/o/pol_pl_kuschelweich-frischetraum-plyn-do-plukania-1l-31pr-de-7814_2.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/o/pol_pl_kuschelweich-frischetraum-plyn-do-plukania-1l-31pr-de-7814_2.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27159",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 760201,
                        name: "Хувцас зайлагч Lico",
                        sku: "01sh27158",
                        brand: 14583,
                        salable_qty: 11,
                        brand_name: "LICO",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Хувцас зайлагч Lico 1000мл Нян бактери устгана DEU</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 12999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4012400530007_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/0/4012400530007_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4012400530007_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27158",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 759903,
                        name: "Хоол цайны ком",
                        sku: "01H064721",
                        brand: null,
                        salable_qty: 9,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Хоол цайны ком LUMINARC Misaki Q5716  45ш номин ногоон",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 379990,
                                },
                            },
                        },
                        special_price: 289990,
                        special_to_date: "2022-08-17 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_2_7.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_2_7.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_2_7.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h064721",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757939,
                        name: "Жимсний суурь таваг",
                        sku: "10030065001",
                        brand: 12578,
                        salable_qty: 10,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Жимсний суурь таваг EHM Denby Dark 30065001 25см Гангар Шаргал Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 24999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/056c01b1_1d12_11eb_8ec5_005056ae6ab8_10030065001_3_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/5/056c01b1_1d12_11eb_8ec5_005056ae6ab8_10030065001_3_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/056c01b1_1d12_11eb_8ec5_005056ae6ab8_10030065001_3_1.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/5/056c01b1_1d12_11eb_8ec5_005056ae6ab8_10030065001_4_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/056c01b1_1d12_11eb_8ec5_005056ae6ab8_10030065001_4_1.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "10030065001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757921,
                        name: "Жимсний суурь таваг",
                        sku: "10030066001",
                        brand: 12578,
                        salable_qty: 13,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Жимсний суурь таваг EHM Denby Elegant 30066001 25см Гангар Шаргал Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 24999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/2/e28c3506-409f-4783-8ff8-b73218e9bfd1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/2/e28c3506-409f-4783-8ff8-b73218e9bfd1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/2/e28c3506-409f-4783-8ff8-b73218e9bfd1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "10030066001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757620,
                        name: "Цайны суурь таваг",
                        sku: "10030950001",
                        brand: 12578,
                        salable_qty: 11,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Цайны суурь таваг EHM Viyana 30950001 12см Шаазан Хар саарал Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001_3.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001_3.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001_3.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/a/3a02fbb5_1d12_11eb_8ec5_005056ae6ab8_10030950001_1.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "10030950001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757542,
                        name: "Бялууны хэв EHM",
                        sku: "10032587003",
                        brand: 12578,
                        salable_qty: 10,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Бялууны хэв EHM Confetti 32587003 25x6см Алтлаг TUR",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 59999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/a/ea128b60-707f-4057-ad40-6aeb695d1dad.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/a/ea128b60-707f-4057-ad40-6aeb695d1dad.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/a/ea128b60-707f-4057-ad40-6aeb695d1dad.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/c/1/c137fd7e-12ab-44fb-8970-76ffcd018445_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/1/c137fd7e-12ab-44fb-8970-76ffcd018445_size768x575_cropcenter.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/a/7af1175d_ea8e_11eb_8ec7_005056ae6ab8_10032587003.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/a/7af1175d_ea8e_11eb_8ec7_005056ae6ab8_10032587003.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "10032587003",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757502,
                        name: "Бялууны хэв EHM",
                        sku: "10032587001",
                        brand: 12578,
                        salable_qty: 11,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Бялууны хэв EHM Confetti 32587001 25x6см  Хөх TUR",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 59999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/e/7e7863f2-f3d0-4e0e-bc37-d8e2b10f86eb_size768x575_cropcenter.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/e/7e7863f2-f3d0-4e0e-bc37-d8e2b10f86eb_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/e/7e7863f2-f3d0-4e0e-bc37-d8e2b10f86eb_size768x575_cropcenter.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/c/1c9d111d-54c7-45f2-b281-85c9cd233110_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/c/1c9d111d-54c7-45f2-b281-85c9cd233110_size768x575_cropcenter.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/c/3cb9defe-e45f-43f6-9cb7-82cc9c9d2ec7_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/c/3cb9defe-e45f-43f6-9cb7-82cc9c9d2ec7_size768x575_cropcenter.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "10032587001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 757471,
                        name: "Хиймэл цэцэг EHM",
                        sku: "10031371001",
                        brand: 12578,
                        salable_qty: 7,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Хиймэл цэцэг EHM Rose Bouquet 31371001 61см Хуванцар Ягаан Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/_/2_org_zoom_5_7.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/2/_/2_org_zoom_5_7.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/2/_/2_org_zoom_5_7.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_org_zoom_6_7.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_org_zoom_6_7.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "10031371001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756920,
                        name: "Салатны сав Wilmax",
                        sku: "01h046749",
                        brand: null,
                        salable_qty: 21,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Салатны сав Wilmax WL-774005 / A 36x14см 5000мл хулсан GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 179990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-10 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/774005.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/7/774005.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/774005.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046749",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756836,
                        name: "Хундага Дарсны Nachtmann",
                        sku: "01h039623",
                        brand: 9012,
                        salable_qty: 20,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Хундага Дарсны Nachtmann Palais 92952 213мл*6ш Болор Герман",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 159990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-05 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/c/5c742472384e1f391e142624.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/c/5c742472384e1f391e142624.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/c/5c742472384e1f391e142624.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/t/e/temp092952_nachtmann_palais_weissweinkelch_242l2aqitas8le.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/t/e/temp092952_nachtmann_palais_weissweinkelch_242l2aqitas8le.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/2/1264398.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/1264398.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "01h039623",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756785,
                        name: "Вискиний ком Nachtmann",
                        sku: "01H038642",
                        brand: 9012,
                        salable_qty: 3,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Вискиний ком Nachtmann Aspen 0090025 Декантер 750мл+Хундага 324мл*6ш",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 499990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-05 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-aspen-whisky-glass-7pc-set-214050_00.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/n/a/nachtmann-aspen-whisky-glass-7pc-set-214050_00.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-aspen-whisky-glass-7pc-set-214050_00.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/t/e/temp90025c2iexnip0cvnt_600x600.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/t/e/temp90025c2iexnip0cvnt_600x600.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "01h038642",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756775,
                        name: "Халуун баригч аяга",
                        sku: "01h0291097",
                        brand: 11287,
                        salable_qty: 4,
                        brand_name: "NATUREHIKE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Халуун баригч аяга Naturehike 4132 600мл Зэвэрдэггүй ган Хар ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captuasgabsnyrjre.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/c/a/captuasgabsnyrjre.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captuasgabsnyrjre.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h0291097",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756774,
                        name: "Халуун баригч аяга",
                        sku: "01h0291095",
                        brand: 11287,
                        salable_qty: 4,
                        brand_name: "NATUREHIKE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Халуун баригч аяга Naturehike 600мл  4118 Шар Зэвэрдэггүй ган",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captwedfghjure.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/c/a/captwedfghjure.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captwedfghjure.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h0291095",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756743,
                        name: "Ус ундааны ком",
                        sku: "01h064515",
                        brand: 9012,
                        salable_qty: 15,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Ус ундааны ком Nachtmann Noblesse 102387 Сав 1.19л+Хундага 350мл*4ш Герман",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 179990,
                                },
                            },
                        },
                        special_price: 129990,
                        special_to_date: "2022-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-noblesse-pitcher-and-4-glasses-set-38.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/n/a/nachtmann-noblesse-pitcher-and-4-glasses-set-38.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-noblesse-pitcher-and-4-glasses-set-38.png",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/o/download_6_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_6_1.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/0/102387_noblesse_vorteilsset_600x600.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/0/102387_noblesse_vorteilsset_600x600.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "01h064515",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756708,
                        name: "Савх Модон ",
                        sku: "01h0291079",
                        brand: 11287,
                        salable_qty: 6,
                        brand_name: "NATUREHIKE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Савх Модон  Naturehike 0933 21см Эвхэгддэг Аяны зориулалттай ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/1/61ddiuyhxul._ac_sx679_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/6/1/61ddiuyhxul._ac_sx679_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/1/61ddiuyhxul._ac_sx679_.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h0291079",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756681,
                        name: "Таваг Амттаны Nachtmann",
                        sku: "01H061722",
                        brand: 9012,
                        salable_qty: 11,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Таваг Амттаны Nachtmann Bossa 97783 17*8.5см*2ш Болор Герман",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 79999,
                                },
                            },
                        },
                        special_price: 59999,
                        special_to_date: "2022-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/9/f917b297d729af244dd64813f6dd8ae0.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/9/f917b297d729af244dd64813f6dd8ae0.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/9/f917b297d729af244dd64813f6dd8ae0.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h061722",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756636,
                        name: "Декантер хундагны ком",
                        sku: "01H063497",
                        brand: 9012,
                        salable_qty: 3,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Декантер хундагны ком Nachtmann Vivendi 93605 5ш Болор Герман",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 199990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-05 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4003762240697-2-scaled.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/b/5b90db4a384e1f56805466dd.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/b/5b90db4a384e1f56805466dd.jpg",
                                label: null,
                                position: 1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/0/4003762240697-2-scaled.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4003762240697-2-scaled.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/t/e/temppr_vivendi_decanter_set_5pcsvk7twabgythj8_600x600.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/t/e/temppr_vivendi_decanter_set_5pcsvk7twabgythj8_600x600.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "01h063497",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756635,
                        name: "Стакан Nachtmann Sculpture",
                        sku: "01h064533",
                        brand: 9012,
                        salable_qty: 10,
                        brand_name: "NACHTMANN",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Стакан Nachtmann Sculpture 101967 4ш*420мл Болор Герман",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 99990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-05 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-longdrink-sculpture_-set-of-4-101967_1_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/n/a/nachtmann-longdrink-sculpture_-set-of-4-101967_1_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/n/a/nachtmann-longdrink-sculpture_-set-of-4-101967_1_.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/t/e/temp101967_nachtmann_sculpture_longdrink_6vtscxc2yqrat5.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/t/e/temp101967_nachtmann_sculpture_longdrink_6vtscxc2yqrat5.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/t/e/temp101967_nachtmann_sculpture_longdrink_7har7v0xjdqeue_600x600.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/t/e/temp101967_nachtmann_sculpture_longdrink_7har7v0xjdqeue_600x600.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "01h064533",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756608,
                        name: "Халуун баригч аяга",
                        sku: "01h0291096",
                        brand: 11287,
                        salable_qty: 4,
                        brand_name: "NATUREHIKE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Халуун баригч аяга Naturehike  600мл  4125 Мөнгөлөг Зэвэрдэггүй ган төмөр",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captsadvfbgfbure.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/c/a/captsadvfbgfbure.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/c/a/captsadvfbgfbure.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h0291096",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756551,
                        name: "Эдийн саван Mongol",
                        sku: "01sh27154",
                        brand: 13968,
                        salable_qty: 143,
                        brand_name: "Mongol made",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Эдийн саван Mongol made 230гр Байгалийн гаралтай MNG",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 2499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/a/baraanii_sawan.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/b/a/baraanii_sawan.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/a/baraanii_sawan.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh27154",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756490,
                        name: "Орны углаа EHM",
                        sku: "10004836015",
                        brand: 12578,
                        salable_qty: 11,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Орны углаа EHM Flat2 04836015 100x200см 1хүн Цагаан Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 46999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/c/fc90ca37_dba5_11e5_80ca_901b0e8d99eb_10004836015.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/c/fc90ca37_dba5_11e5_80ca_901b0e8d99eb_10004836015.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/c/fc90ca37_dba5_11e5_80ca_901b0e8d99eb_10004836015.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/5/456c661f-e0a9-409b-a050-1288659fa4c6_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/5/456c661f-e0a9-409b-a050-1288659fa4c6_size768x575_cropcenter.jpg",
                                label: null,
                                position: 4,
                            },
                        ],
                        url_key: "10004836015",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756473,
                        name: "Матрасны зөөлөвч English",
                        sku: "10005117001",
                        brand: 12578,
                        salable_qty: 14,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Матрасны зөөлөвч English Home 05117001 100x200см 1хүн Цагаан Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/e/de6deb96-ef1d-4c92-8040-3e1d53030f93_size768x575_cropcenter.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/e/de6deb96-ef1d-4c92-8040-3e1d53030f93_size768x575_cropcenter.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/e/de6deb96-ef1d-4c92-8040-3e1d53030f93_size768x575_cropcenter.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/o/download_5_2.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_5_2.jpg",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/f/df2b6e68_3b7e_11ec_8ecd_005056ae6ab8_10033616001.resize1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/f/df2b6e68_3b7e_11ec_8ecd_005056ae6ab8_10033616001.resize1.jpg",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "10005117001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756465,
                        name: "Орны углаа EHM",
                        sku: "10004836017",
                        brand: 12578,
                        salable_qty: 1,
                        brand_name: "English Home",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Орны углаа EHM Flat2 04836017 180x200см 2хүн Цагаан Турк",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/9/a9dce28c-74e1-4912-a3aa-94d28198bd02.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/a/9/a9dce28c-74e1-4912-a3aa-94d28198bd02.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/9/a9dce28c-74e1-4912-a3aa-94d28198bd02.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/c/fc90ca39_dba5_11e5_80ca_901b0e8d99eb_10004836017.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/c/fc90ca39_dba5_11e5_80ca_901b0e8d99eb_10004836017.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "10004836017",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756192,
                        name: "Таваг Wilmax WL-771197",
                        sku: "01h046840",
                        brand: null,
                        salable_qty: 46,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Таваг Wilmax WL-771197 / A дугуй бамбуу 64x50см GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 199990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-10 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771197.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/7/771197.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771197.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046840",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756189,
                        name: "Аяга таваг Wilmax",
                        sku: "01h046864",
                        brand: null,
                        salable_qty: 13,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Аяга таваг Wilmax WL-993007 / 6C сэнжтэй шаазан 90мл 6ш сет GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 64999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/9/9/993007_j7cg-9k.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/9/9/993007_j7cg-9k.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/9/9/993007_j7cg-9k.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046864",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756187,
                        name: "Аяга Wilmax WL-880119",
                        sku: "01h046854",
                        brand: null,
                        salable_qty: 34,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Аяга Wilmax WL-880119 / 2C цагаан шаазан 450мл 2ш GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 32999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880119_s3kw-rc.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/8/880119_s3kw-rc.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880119_s3kw-rc.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/8/880119_2c.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880119_2c.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "01h046854",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756183,
                        name: "Аяга Wilmax WL-880122",
                        sku: "01h046855",
                        brand: null,
                        salable_qty: 38,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Аяга Wilmax WL-880122 / A цагаан шаазан 18см 1300мл GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 23999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880122_37lh-fz.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/8/880122_2c.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880122_2c.jpg",
                                label: null,
                                position: 1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/8/880122_37lh-fz.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880122_37lh-fz.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046855",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756172,
                        name: "Таваг Wilmax WL-771186",
                        sku: "01h046835",
                        brand: null,
                        salable_qty: 27,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Таваг Wilmax WL-771186 / A дөрвөлжин бамбуу 50x20.5см GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 77999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-30 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771186.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/7/771186.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771186.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046835",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756170,
                        name: "Шөлний таваг Wilmax",
                        sku: "01h046846",
                        brand: null,
                        salable_qty: 18,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Шөлний таваг Wilmax WL-667728 / A лавандер шаазан 28.5см 500мл GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/6/667728.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/6/6/667728.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/6/667728.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/6/6/667728_side.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/6/667728_side.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "01h046846",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756169,
                        name: "Таваг Wilmax WL-771200",
                        sku: "01h046841",
                        brand: null,
                        salable_qty: 4,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Таваг Wilmax WL-771200 / A дугуй бамбуу 45.5см GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 139990,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-06-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771200_1_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/7/771200_1_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/7/771200_1_.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046841",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 756168,
                        name: "Аяга таваг Wilmax",
                        sku: "01h046871",
                        brand: null,
                        salable_qty: 63,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Аяга таваг Wilmax WL-993233 / AB сэнжтэй шаазан 250мл GBR</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 14999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880106_3x0s-s7_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/8/880106_3x0s-s7_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/8/880106_3x0s-s7_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01h046871",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                ],
                page_info: {
                    __typename: "SearchResultPageInfo",
                    total_pages: 43,
                },
                total_count: 2122,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            products: {
                __typename: "Products",
                items: [
                    {
                        __typename: "SimpleProduct",
                        id: 769099,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom003",
                        brand: 15336,
                        salable_qty: 150,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Шампунь Амьтан арчилгааны Lomi Pet care 250мл ургамлын гаралтай овъёостой</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 69999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture165.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture165.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture165.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "12lom003",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 768998,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom001",
                        brand: 15336,
                        salable_qty: 150,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Тос Амьтан арчилгааны Lomi Pet care 45гр ургамлын гаралтай нөхөн төлжүүлэх</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 65999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture12_7-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture1_7.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture1_7.png",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture12_7-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture12_7-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "12lom001",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 768994,
                        name: "Амьтан цэвэрлэгээний бүтээгдэхүүн",
                        sku: "12lom002",
                        brand: 15336,
                        salable_qty: 90,
                        brand_name: "LOMI",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Нойтон сальфетка Амьтан арчилгааны Lomi Pet care 80ш 25x20 цэвэрлэгээний</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 29999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture167.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture167.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture167.png",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture1564_.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture1564_.png",
                                label: null,
                                position: 2,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/i/picture178.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/i/picture178.png",
                                label: null,
                                position: 3,
                            },
                        ],
                        url_key: "12lom002",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 732088,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75532",
                        brand: 14089,
                        salable_qty: 54,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр  Хурганы махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75532",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729524,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75531",
                        brand: 14089,
                        salable_qty: 41,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Салмон загасны  махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75531",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729508,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75529",
                        brand: 14089,
                        salable_qty: 47,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Үхрийн махтай 1+ настай мууранд Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75529",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729495,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75530",
                        brand: 14089,
                        salable_qty: 52,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Цэнгэг усны Форель загасны махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75530",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729490,
                        name: "Нохойны хоол HAPPY",
                        sku: "01sh75521",
                        brand: 14090,
                        salable_qty: 21,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол HAPPY DOG 400гр  Адууны махтай Нойтон GLUTENFREE DEU ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4001967115789-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/0/4001967115789-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4001967115789-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75521",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729487,
                        name: "Нохойны хоол HAPPY",
                        sku: "01sh75525",
                        brand: 14090,
                        salable_qty: 25,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол HAPPY DOG 400гр  Хурганы махтай Нойтон GLUTENFREE DEU ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/l/a/lamm-pur-lamb_1_g.jpeg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/l/a/lamm-pur-lamb_1_g.jpeg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/l/a/lamm-pur-lamb_1_g.jpeg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75525",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729466,
                        name: "Нохойн хоол HAPPY",
                        sku: "01sh75522",
                        brand: 14090,
                        salable_qty: 22,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол HAPPY DOG 400гр Нугасны махтай Нойтон GLUTENFREE DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75522",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 718100,
                        name: "Нохойн хоол баяжуулагч",
                        sku: "01sh75515",
                        brand: 14055,
                        salable_qty: 70,
                        brand_name: "Mylo",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол баяжуулагч MYLO 70+2гр Органик  Малын махан Биомимик MNG",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9899,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/1/01sh75515_1.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/1/01sh75515_1.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/1/01sh75515_1.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75515",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 655719,
                        name: "Муурны хоол ",
                        sku: "01sh75417",
                        brand: null,
                        salable_qty: 138,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол  Whiskas Нойтон 75гр  1+ насны  тахианы махтай RUS",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4660085513985.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_4660085513985.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4660085513985.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-655719",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 647906,
                        name: "Муурны хуурай хоол",
                        sku: "03010001",
                        brand: null,
                        salable_qty: 35,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хуурай хоол 2кг Мах орлуулагчгүй Хүржигнүүр Монголд үйлдвэрлэв",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 20499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969_1.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115969_1.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969_1.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p03010001",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 647905,
                        name: "Муужгайны  хоол",
                        sku: "03010000",
                        brand: null,
                        salable_qty: 27,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Муужгайны хоол 2кг Хуурай дотор махан Монголд үйлдвэрлэв</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 21499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115969.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p03010000",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618536,
                        name: "Нохойн хоол 100гр",
                        sku: "03010007",
                        brand: null,
                        salable_qty: 244,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 100гр Pedigree дотор махан үр тариа омега цайр А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980220384e1f588340b9dd.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f980220384e1f588340b9dd.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980220384e1f588340b9dd.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-100gr-618536",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618535,
                        name: "Нохойн хоол 100гр",
                        sku: "03010006",
                        brand: null,
                        salable_qty: 402,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 100гр Pedigree хурганы мах хүнсний ногоо эрдэс А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-100gr",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618534,
                        name: "Нохойн хоол 85гр",
                        sku: "03010005",
                        brand: null,
                        salable_qty: 240,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree жижиг нохойд зориулсан эрдэс А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr-618534",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618533,
                        name: "Нохойн хоол 85гр",
                        sku: "03010004",
                        brand: null,
                        salable_qty: 628,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree Хурганы мах А Е витаминтай амт нэмэх бодисгүй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/n/annotation_2022-01-13_155104.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/a/n/annotation_2022-01-13_155104.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/n/annotation_2022-01-13_155104.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr-618533",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618532,
                        name: "Нохойн хоол 85гр",
                        sku: "03010003",
                        brand: null,
                        salable_qty: 316,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree Үхрийн мах элэгтэй витамин Е ба кальц агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980196384e1f5883409e6a.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f980196384e1f5883409e6a.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980196384e1f5883409e6a.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613251,
                        name: "Нохойны хуурай хоол",
                        sku: "01sh400389",
                        brand: null,
                        salable_qty: 24,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хуурай хоол  мах болон ногоотой 2.5кг Darling",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22319,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojny-huuraj-hool",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613249,
                        name: "Муурны хоол засуулсан",
                        sku: "01sh400387",
                        brand: null,
                        salable_qty: 69,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол засуулсан үржил хязгаарласан үед туулайны махтай 1.5г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22859,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/r/friskiescatchickenandvegetables15kg.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/r/friskiescatchickenandvegetables15kg.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/r/friskiescatchickenandvegetables15kg.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-zasuulsan-613249",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613248,
                        name: "Муурны хоол засуулсан",
                        sku: "01sh400386",
                        brand: null,
                        salable_qty: 69,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол засуулсан үржил хязгаарласан үед туулайны махтай 300г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5039,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/i/t/item_l_37005035_151457981.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/i/t/item_l_37005035_151457981.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/i/t/item_l_37005035_151457981.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-zasuulsan",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613244,
                        name: "Нохойны нойтон хоол",
                        sku: "01sh400382",
                        brand: null,
                        salable_qty: 262,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны нойтон хоол үхрийн махтай 85г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1229,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-03-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/5/355030-800x800.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/5/355030-800x800.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/5/355030-800x800.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojny-nojton-hool",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 485495,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_7",
                        brand: null,
                        salable_qty: 282,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065375980",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/2/02060124_7.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/2/02060124_7.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/2/02060124_7.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02060124_7",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443821,
                        name: "Муурны хоол 85гр",
                        sku: "02180212",
                        brand: null,
                        salable_qty: 118,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Kitekat Хурганы мах А Е Амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4607065735098.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_4607065735098.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4607065735098.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443821",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443818,
                        name: "Муурны хоол 85гр",
                        sku: "02180154",
                        brand: null,
                        salable_qty: 210,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Хониний мах Ногоотой Уураг Эрдэс бодис агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036590198.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613036590198.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036590198.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443818",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443817,
                        name: "Муурны хоол 85гр",
                        sku: "02180152",
                        brand: null,
                        salable_qty: 290,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Цацагт хяруулын мах Уураг Эрдэс бодис Омега 6-тай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036504263.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613036504263.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036504263.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443817",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441077,
                        name: "Муурны хоол 390гр",
                        sku: "02574571_2",
                        brand: null,
                        salable_qty: 280,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 390гр Kitekat Дайвар мах Хүнсний ногоо Омега  Амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 4199,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-441077",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441072,
                        name: "Муурны хоол 350гр",
                        sku: "02574133_2",
                        brand: null,
                        salable_qty: 30,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Тахианы махан Хоолны дуршил сайжируулах дэмтэй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-441072",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441069,
                        name: "Нохойны хоол 85гр",
                        sku: "02574026_2",
                        brand: null,
                        salable_qty: 548,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол 85гр Педигри тахиан махан соус шаардлагатай бүх амин дэмтэй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-441069",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440937,
                        name: "Муурны хоол 350гр",
                        sku: "02380744_6",
                        brand: null,
                        salable_qty: 231,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Загасны гурил Үр Тариа Кальци Фосфор D Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440937",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440935,
                        name: "Муурны хоол 350гр",
                        sku: "02380744_2",
                        brand: null,
                        salable_qty: 11,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Муурийн зулзаганд зориулсан А Д Е Б Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/u/full_55645f2b6465340016040f00.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/u/full_55645f2b6465340016040f00.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/u/full_55645f2b6465340016040f00.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440935",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440934,
                        name: "Нохойн хоол 600гр",
                        sku: "02380719_2",
                        brand: null,
                        salable_qty: 44,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 600гр Chappi Мах ногоо үр тариа бүх төрлийн витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 4799,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-440934",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440655,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_8",
                        brand: null,
                        salable_qty: 536,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065376000",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e33d384e1f6a080f0fb5.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f72e33d384e1f6a080f0fb5.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e33d384e1f6a080f0fb5.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440655",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440654,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_6",
                        brand: null,
                        salable_qty: 235,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065375966",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/6/4607065375966_original.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/6/4607065375966_original.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/6/4607065375966_original.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440654",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440649,
                        name: "Муурны хоол 85гр",
                        sku: "02060119_2",
                        brand: null,
                        salable_qty: 19,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Вискас тахианы мах хүнсний ногоо амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440649",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 425823,
                        name: "Нохойн хоол Гөлөгөн",
                        sku: "02180138",
                        brand: null,
                        salable_qty: 61,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол Гөлөгөн нохойн  2 кг",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 13699,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983_1_.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115983.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983.png",
                                label: null,
                                position: 1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115983_1_.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983_1_.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p02180138",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 425633,
                        name: "Нохойн хоол насанд",
                        sku: "02180135",
                        brand: null,
                        salable_qty: 48,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол насанд хүрсэн нохойн 600 гр",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115952.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115952.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115952.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p02180135",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414946,
                        name: "Муурны хоол 85гр",
                        sku: "02809385",
                        brand: null,
                        salable_qty: 156,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Filex Тахианы махтай Зулзаганд зориулсан амин дэмтэй ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1629,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/a/7af53ae0d4a46d46404f596651371706.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/a/7af53ae0d4a46d46404f596651371706.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/a/7af53ae0d4a46d46404f596651371706.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-414946",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414944,
                        name: "Муурны хоол ",
                        sku: "02809340",
                        brand: 10166,
                        salable_qty: 35,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол  400гр Friskies 1-12 сар болон хээлтэй мууранд зориулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5819,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809340",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414923,
                        name: "Муурны хоол 85гр",
                        sku: "02809181",
                        brand: 10166,
                        salable_qty: 154,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Улаан лооль Үхрийн махтай А Д Е Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/u/purina_12297857_images_2036333832.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/u/purina_12297857_images_2036333832.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/u/purina_12297857_images_2036333832.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809181",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414922,
                        name: "Муурны хоол 85гр",
                        sku: "02809180",
                        brand: 10166,
                        salable_qty: 90,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Лууван Тахианы махтай А Д Е Витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/6/7613034482587-11.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/6/7613034482587-11.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/6/7613034482587-11.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809180",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414921,
                        name: "Муурны хоол 85гр",
                        sku: "02809179",
                        brand: 10166,
                        salable_qty: 80,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Бууцай ба Нугасны махтай А Д Е Витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/o/foreign.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/o/foreign.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/o/foreign.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809179",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414920,
                        name: "Муурны хоол 85гр",
                        sku: "02809178",
                        brand: 10166,
                        salable_qty: 223,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Сагамхай ба хулд загасны махтай А Д Е Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809178",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413433,
                        name: "Нохойны хоол Kira&Pups",
                        sku: "02701140",
                        brand: null,
                        salable_qty: 39,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол Kira&Pups 2кг 5650534",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 18499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/s/dsc_9308-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/s/dsc_9308-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/s/dsc_9308-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02701140",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413041,
                        name: "Муурны хоол 85гр",
                        sku: "02575289",
                        brand: 10166,
                        salable_qty: 200,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Туулайн махтай царцмаг Уургийн ханд А Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/1/71607019.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/1/71607019.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/1/71607019.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575289",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413040,
                        name: "Муурны хоол 85гр",
                        sku: "02575287",
                        brand: 10166,
                        salable_qty: 230,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Тахианы махтай царцмаг Уургийн ханд А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575287",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413039,
                        name: "Муурны хоол 85гр",
                        sku: "02575286",
                        brand: null,
                        salable_qty: 355,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Тахианы мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e338384e1f6a080f0d45.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f72e338384e1f6a080f0d45.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e338384e1f6a080f0d45.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413039",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413038,
                        name: "Муурны хоол 85гр",
                        sku: "02575285",
                        brand: 10166,
                        salable_qty: 344,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Хурганы мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940_1.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413038",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413037,
                        name: "Муурны хоол 85гр",
                        sku: "02575284",
                        brand: null,
                        salable_qty: 409,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Нугасны мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613034969439.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613034969439.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613034969439.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413037",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                ],
                page_info: {
                    __typename: "SearchResultPageInfo",
                    total_pages: 2,
                },
                total_count: 63,
            },
        },
        loading: false,
        networkStatus: 7,
    },
    {
        data: {
            products: {
                __typename: "Products",
                items: [
                    {
                        __typename: "SimpleProduct",
                        id: 732088,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75532",
                        brand: 14089,
                        salable_qty: 54,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр  Хурганы махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-pasture-raised-lamb.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75532",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729524,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75531",
                        brand: 14089,
                        salable_qty: 41,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Салмон загасны  махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-atlantic-salmon.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75531",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729508,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75529",
                        brand: 14089,
                        salable_qty: 47,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Үхрийн махтай 1+ настай мууранд Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-bavarian-beef.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75529",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729495,
                        name: "Муурны хоол HAPPY",
                        sku: "01sh75530",
                        brand: 14089,
                        salable_qty: 52,
                        brand_name: "Happy cat",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол HAPPY CAT 85гр Цэнгэг усны Форель загасны махтай Нойтон DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 3499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/h/a/happy-cat-mis-culinary-spring-water-trout.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75530",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729490,
                        name: "Нохойны хоол HAPPY",
                        sku: "01sh75521",
                        brand: 14090,
                        salable_qty: 21,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол HAPPY DOG 400гр  Адууны махтай Нойтон GLUTENFREE DEU ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4001967115789-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/0/4001967115789-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/0/4001967115789-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75521",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729487,
                        name: "Нохойны хоол HAPPY",
                        sku: "01sh75525",
                        brand: 14090,
                        salable_qty: 25,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол HAPPY DOG 400гр  Хурганы махтай Нойтон GLUTENFREE DEU ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/l/a/lamm-pur-lamb_1_g.jpeg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/l/a/lamm-pur-lamb_1_g.jpeg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/l/a/lamm-pur-lamb_1_g.jpeg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75525",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 729466,
                        name: "Нохойн хоол HAPPY",
                        sku: "01sh75522",
                        brand: 14090,
                        salable_qty: 22,
                        brand_name: "Happy dog",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол HAPPY DOG 400гр Нугасны махтай Нойтон GLUTENFREE DEU",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/p/pp630-30-21-hd-ente-400g-banner-1000x1000px_-1_-1_98644.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75522",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 718100,
                        name: "Нохойн хоол баяжуулагч",
                        sku: "01sh75515",
                        brand: 14055,
                        salable_qty: 70,
                        brand_name: "Mylo",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол баяжуулагч MYLO 70+2гр Органик  Малын махан Биомимик MNG",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 9899,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: null,
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/1/01sh75515_1.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/1/01sh75515_1.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/1/01sh75515_1.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "01sh75515",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Эко бараа",
                                priority: "0",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-12.png",
                                to_date: "2027-12-01",
                            },
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 655719,
                        name: "Муурны хоол ",
                        sku: "01sh75417",
                        brand: null,
                        salable_qty: 138,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол  Whiskas Нойтон 75гр  1+ насны  тахианы махтай RUS",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4660085513985.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_4660085513985.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4660085513985.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-655719",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 647906,
                        name: "Муурны хуурай хоол",
                        sku: "03010001",
                        brand: null,
                        salable_qty: 35,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хуурай хоол 2кг Мах орлуулагчгүй Хүржигнүүр Монголд үйлдвэрлэв",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 20499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969_1.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115969_1.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969_1.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p03010001",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 647905,
                        name: "Муужгайны  хоол",
                        sku: "03010000",
                        brand: null,
                        salable_qty: 27,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "<p>Муужгайны хоол 2кг Хуурай дотор махан Монголд үйлдвэрлэв</p>",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 21499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115969.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115969.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p03010000",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618536,
                        name: "Нохойн хоол 100гр",
                        sku: "03010007",
                        brand: null,
                        salable_qty: 244,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 100гр Pedigree дотор махан үр тариа омега цайр А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980220384e1f588340b9dd.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f980220384e1f588340b9dd.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980220384e1f588340b9dd.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-100gr-618536",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618535,
                        name: "Нохойн хоол 100гр",
                        sku: "03010006",
                        brand: null,
                        salable_qty: 402,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 100гр Pedigree хурганы мах хүнсний ногоо эрдэс А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813_1.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-100gr",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618534,
                        name: "Нохойн хоол 85гр",
                        sku: "03010005",
                        brand: null,
                        salable_qty: 240,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree жижиг нохойд зориулсан эрдэс А Е витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f3ee97b384e1f0ba27e1813.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr-618534",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618533,
                        name: "Нохойн хоол 85гр",
                        sku: "03010004",
                        brand: null,
                        salable_qty: 628,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree Хурганы мах А Е витаминтай амт нэмэх бодисгүй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/n/annotation_2022-01-13_155104.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/a/n/annotation_2022-01-13_155104.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/a/n/annotation_2022-01-13_155104.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr-618533",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 618532,
                        name: "Нохойн хоол 85гр",
                        sku: "03010003",
                        brand: null,
                        salable_qty: 316,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 85гр Pedigree Үхрийн мах элэгтэй витамин Е ба кальц агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980196384e1f5883409e6a.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f980196384e1f5883409e6a.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f980196384e1f5883409e6a.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-85gr",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613251,
                        name: "Нохойны хуурай хоол",
                        sku: "01sh400389",
                        brand: null,
                        salable_qty: 24,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хуурай хоол  мах болон ногоотой 2.5кг Darling",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22319,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/k/o/korm-dlya-sobak-darling-25-kg-myaso-s-ovoshchami.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojny-huuraj-hool",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613249,
                        name: "Муурны хоол засуулсан",
                        sku: "01sh400387",
                        brand: null,
                        salable_qty: 69,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол засуулсан үржил хязгаарласан үед туулайны махтай 1.5г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 22859,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/r/friskiescatchickenandvegetables15kg.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/r/friskiescatchickenandvegetables15kg.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/r/friskiescatchickenandvegetables15kg.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-zasuulsan-613249",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613248,
                        name: "Муурны хоол засуулсан",
                        sku: "01sh400386",
                        brand: null,
                        salable_qty: 69,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол засуулсан үржил хязгаарласан үед туулайны махтай 300г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5039,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/i/t/item_l_37005035_151457981.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/i/t/item_l_37005035_151457981.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/i/t/item_l_37005035_151457981.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-zasuulsan",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 613244,
                        name: "Нохойны нойтон хоол",
                        sku: "01sh400382",
                        brand: null,
                        salable_qty: 262,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны нойтон хоол үхрийн махтай 85г Friskies",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1229,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-03-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/5/355030-800x800.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/3/5/355030-800x800.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/3/5/355030-800x800.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojny-nojton-hool",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 485495,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_7",
                        brand: null,
                        salable_qty: 282,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065375980",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/2/02060124_7.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/2/02060124_7.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/2/02060124_7.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02060124_7",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443821,
                        name: "Муурны хоол 85гр",
                        sku: "02180212",
                        brand: null,
                        salable_qty: 118,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Kitekat Хурганы мах А Е Амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4607065735098.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_4607065735098.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_4607065735098.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443821",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443818,
                        name: "Муурны хоол 85гр",
                        sku: "02180154",
                        brand: null,
                        salable_qty: 210,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Хониний мах Ногоотой Уураг Эрдэс бодис агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036590198.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613036590198.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036590198.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443818",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 443817,
                        name: "Муурны хоол 85гр",
                        sku: "02180152",
                        brand: null,
                        salable_qty: 290,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Цацагт хяруулын мах Уураг Эрдэс бодис Омега 6-тай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036504263.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613036504263.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613036504263.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-443817",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441077,
                        name: "Муурны хоол 390гр",
                        sku: "02574571_2",
                        brand: null,
                        salable_qty: 280,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 390гр Kitekat Дайвар мах Хүнсний ногоо Омега  Амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 4199,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/b/bb9cc4f50ac6dc88f21a032f736f6e9e500e0859.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-441077",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441072,
                        name: "Муурны хоол 350гр",
                        sku: "02574133_2",
                        brand: null,
                        salable_qty: 30,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Тахианы махан Хоолны дуршил сайжируулах дэмтэй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/b/5b95ccf2384e1f22153a53fa-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-441072",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 441069,
                        name: "Нохойны хоол 85гр",
                        sku: "02574026_2",
                        brand: null,
                        salable_qty: 548,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол 85гр Педигри тахиан махан соус шаардлагатай бүх амин дэмтэй",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1449,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/2/121fcba6-dff9-092f-eb83-243dca685722.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-441069",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440937,
                        name: "Муурны хоол 350гр",
                        sku: "02380744_6",
                        brand: null,
                        salable_qty: 231,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Загасны гурил Үр Тариа Кальци Фосфор D Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/6/f/6fc25680-951a-7f13-8409-f035ad0b2e51.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440937",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440935,
                        name: "Муурны хоол 350гр",
                        sku: "02380744_2",
                        brand: null,
                        salable_qty: 11,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 350гр Whiskas Муурийн зулзаганд зориулсан А Д Е Б Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 6299,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/u/full_55645f2b6465340016040f00.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/u/full_55645f2b6465340016040f00.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/u/full_55645f2b6465340016040f00.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440935",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440934,
                        name: "Нохойн хоол 600гр",
                        sku: "02380719_2",
                        brand: null,
                        salable_qty: 44,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол 600гр Chappi Мах ногоо үр тариа бүх төрлийн витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 4799,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/b/e/bebd56a9-46ae-27db-1bcc-f8ab79a447a5.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "nohojn-hool-440934",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440655,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_8",
                        brand: null,
                        salable_qty: 536,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065376000",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e33d384e1f6a080f0fb5.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f72e33d384e1f6a080f0fb5.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e33d384e1f6a080f0fb5.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440655",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440654,
                        name: "Муурны хоол Kitekat",
                        sku: "02060124_6",
                        brand: null,
                        salable_qty: 235,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол Kitekat 24*85гр 024334-4607065375966",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1099,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/6/4607065375966_original.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/4/6/4607065375966_original.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/4/6/4607065375966_original.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440654",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 440649,
                        name: "Муурны хоол 85гр",
                        sku: "02060119_2",
                        brand: null,
                        salable_qty: 19,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Вискас тахианы мах хүнсний ногоо амин дэм агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/6/e61dfe63e47741d240fd7b59baac4b69.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-440649",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 425823,
                        name: "Нохойн хоол Гөлөгөн",
                        sku: "02180138",
                        brand: null,
                        salable_qty: 61,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол Гөлөгөн нохойн  2 кг",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 13699,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983_1_.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115983.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983.png",
                                label: null,
                                position: 1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115983_1_.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115983_1_.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p02180138",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 425633,
                        name: "Нохойн хоол насанд",
                        sku: "02180135",
                        brand: null,
                        salable_qty: 48,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойн хоол насанд хүрсэн нохойн 600 гр",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5999,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115952.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/6/8658000115952.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/6/8658000115952.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "p02180135",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414946,
                        name: "Муурны хоол 85гр",
                        sku: "02809385",
                        brand: null,
                        salable_qty: 156,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Filex Тахианы махтай Зулзаганд зориулсан амин дэмтэй ",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1629,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/a/7af53ae0d4a46d46404f596651371706.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/a/7af53ae0d4a46d46404f596651371706.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/a/7af53ae0d4a46d46404f596651371706.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-414946",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414944,
                        name: "Муурны хоол ",
                        sku: "02809340",
                        brand: 10166,
                        salable_qty: 35,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол  400гр Friskies 1-12 сар болон хээлтэй мууранд зориулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 5819,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/5/05997204512741_c1l1_friskies_cat_with_chicken_with_milk_and_with_wholesome_vegetables_400g_43898449.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809340",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414923,
                        name: "Муурны хоол 85гр",
                        sku: "02809181",
                        brand: 10166,
                        salable_qty: 154,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Улаан лооль Үхрийн махтай А Д Е Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/u/purina_12297857_images_2036333832.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/p/u/purina_12297857_images_2036333832.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/p/u/purina_12297857_images_2036333832.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809181",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414922,
                        name: "Муурны хоол 85гр",
                        sku: "02809180",
                        brand: 10166,
                        salable_qty: 90,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Лууван Тахианы махтай А Д Е Витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/6/7613034482587-11.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/6/7613034482587-11.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/6/7613034482587-11.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809180",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414921,
                        name: "Муурны хоол 85гр",
                        sku: "02809179",
                        brand: 10166,
                        salable_qty: 80,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Бууцай ба Нугасны махтай А Д Е Витамин агуулсан",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/o/foreign.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/f/o/foreign.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/f/o/foreign.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809179",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 414920,
                        name: "Муурны хоол 85гр",
                        sku: "02809178",
                        brand: 10166,
                        salable_qty: 223,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Сагамхай ба хулд загасны махтай А Д Е Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/e/t/ets-cache-images-item-883-8b025afd9bcb520755774e35661af28b-700x550.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02809178",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413433,
                        name: "Нохойны хоол Kira&Pups",
                        sku: "02701140",
                        brand: null,
                        salable_qty: 39,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Нохойны хоол Kira&Pups 2кг 5650534",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 18499,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2021-12-22 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/s/dsc_9308-removebg-preview.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/s/dsc_9308-removebg-preview.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/s/dsc_9308-removebg-preview.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02701140",
                        url_suffix: ".html",
                        mp_label_data: [
                            {
                                __typename: "LabelRules",
                                enabled: 1,
                                name: "Made In Mongolia",
                                priority: "2",
                                label_template: null,
                                label_image:
                                    "https://cdn.nomin.mn/media/mageplaza/productlabels/product/b/a/badge-2-08.png",
                                to_date: "2121-12-31",
                            },
                        ],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413041,
                        name: "Муурны хоол 85гр",
                        sku: "02575289",
                        brand: 10166,
                        salable_qty: 200,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Туулайн махтай царцмаг Уургийн ханд А Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/1/71607019.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/7/1/71607019.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/7/1/71607019.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575289",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413040,
                        name: "Муурны хоол 85гр",
                        sku: "02575287",
                        brand: 10166,
                        salable_qty: 230,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Тахианы махтай царцмаг Уургийн ханд А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/8/1/811fnmfjvfl._ac_sl1500_.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575287",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413039,
                        name: "Муурны хоол 85гр",
                        sku: "02575286",
                        brand: null,
                        salable_qty: 355,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Тахианы мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e338384e1f6a080f0d45.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/5/f/5f72e338384e1f6a080f0d45.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/5/f/5f72e338384e1f6a080f0d45.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413039",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413038,
                        name: "Муурны хоол 85гр",
                        sku: "02575285",
                        brand: 10166,
                        salable_qty: 344,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Хурганы мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940.jpg",
                                label: null,
                                position: -1,
                            },
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940_1.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/0/7/07613034969323_c1n1_friskies_cat_lamb_85g_1_43895940_1.jpg",
                                label: null,
                                position: 2,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413038",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 413037,
                        name: "Муурны хоол 85гр",
                        sku: "02575284",
                        brand: null,
                        salable_qty: 409,
                        brand_name: null,
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Friskies Нугасны мах Үр тариа Эрдэс бодис А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613034969439.png",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/1/_/1_7613034969439.png",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/1/_/1_7613034969439.png",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "muurny-hool-friskies-413037",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 387511,
                        name: "Муурны хоол 85гр",
                        sku: "02575290",
                        brand: 10166,
                        salable_qty: 259,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Хулд загасны махтай царцмаг А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_12__5.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/o/download_12__5.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_12__5.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575290",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 387510,
                        name: "Муурны хоол 85гр",
                        sku: "02575288",
                        brand: 10166,
                        salable_qty: 76,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол 85гр Felix Үхрийн махтай царцмаг Уургийн ханд А Д Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1599,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-07-31 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_11__1_2.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/d/o/download_11__1_2.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/d/o/download_11__1_2.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575288",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                    {
                        __typename: "SimpleProduct",
                        id: 387509,
                        name: "Муурны хоол ",
                        sku: "02575283",
                        brand: 10166,
                        salable_qty: 232,
                        brand_name: "NESTLE",
                        new_to_date: null,
                        short_description: {
                            __typename: "ComplexTextValue",
                            html: "Муурны хоол  85гр Friskies Үхрийн мах Үр тариа Эрдэс бодис Сахар Витаминтай",
                        },
                        price: {
                            __typename: "ProductPrices",
                            regularPrice: {
                                __typename: "Price",
                                amount: {
                                    __typename: "Money",
                                    currency: "MNT",
                                    value: 1189,
                                },
                            },
                        },
                        special_price: null,
                        special_to_date: "2022-02-28 00:00:00",
                        small_image: {
                            __typename: "ProductImage",
                            url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/_/8/_85_.jpg",
                        },
                        media_gallery: [
                            {
                                __typename: "ProductImage",
                                file_small:
                                    "https://cdn.nomin.mn/media/catalog/product/cache/a5a4e4ac6f1ef521fa59ac223494c832/_/8/_85_.jpg",
                                url: "https://cdn.nomin.mn/media/catalog/product/cache/bd17883bad23a829eaada8baa847422f/_/8/_85_.jpg",
                                label: null,
                                position: -1,
                            },
                        ],
                        url_key: "02575283",
                        url_suffix: ".html",
                        mp_label_data: [],
                    },
                ],
                page_info: {
                    __typename: "SearchResultPageInfo",
                    total_pages: 2,
                },
                total_count: 59,
            },
        },
        loading: false,
        networkStatus: 7,
    },
];

export default async (req, res) => {
    // const listOfCategories = await getIncludeInTheMenu(2);

    // const categoryPaths = getCategoryPaths(listOfCategories, "category_id");

    // const categoryIdentifiers = await Promise.all(
    //     categoryPaths.map(async (category_complete_url_path) => {
    //         const {
    //             params: { category_id },
    //         } = category_complete_url_path;
    //         const nominWeirdURLsuffix = ".html";
    //         const resolveURL = category_id.join("/") + nominWeirdURLsuffix;
    //         return await getCategoryIdFromURL(resolveURL);
    //     })
    // );

    // const allCategoryItemData = await Promise.all(
    //     categoryIdentifiers.map(async (category_id) => {
    //         const {
    //             data: {
    //                 urlResolver: { id: resolvedID },
    //             },
    //         } = category_id;

    //         const variables = {
    //             currentPage: 1,
    //             filters: {
    //                 category_id: {
    //                     eq: `${resolvedID}`,
    //                 },
    //             },
    //             pageSize: 50,
    //         };
    //         return await getCategoryItems(variables, true);
    //     })
    // );

    const allCategoryItemData = [];

    while (categoryIdentifiers.length) {
        // 5 at a time
        const res = await Promise.all(
            categoryIdentifiers
                .splice(0, 10)
                .map(async (category_id, index) => {
                    const {
                        data: {
                            urlResolver: { id: resolvedID },
                        },
                    } = category_id;

                    const variables = {
                        currentPage: 1,
                        filters: {
                            category_id: {
                                eq: `${resolvedID}`,
                            },
                        },
                        pageSize: 50,
                    };
                    console.log(index);
                    return await getCategoryItems(variables, true);
                })
        );

        allCategoryItemData.push(res);
    }

    // const paths = getCategoryItemPaths(allCategoryItemData);
    // console.log(paths);
    console.log("SHIT");

    //FOR PRODUCTION ONLY !!!

    // VERY EXPENSIVE QUERY

    // const allCategoryItemURLkeys = await Promise.all(
    //     categoryIdentifiers.map(async (category_id) => {
    //         const {
    //             data: {
    //                 urlResolver: { id: resolvedID },
    //             },
    //         } = category_id;
    //         const variables = {
    //             currentPage: 1,
    //             filters: {
    //                 category_id: {
    //                     eq: `${resolvedID}`,
    //                 },
    //             },
    //             pageSize: 50,
    //         };

    //         return await getAllCategoryURLkeys(variables);
    //     })
    // );

    // const formatted = allCategoryItemURLkeys
    //     .map((categoryData) => {
    //         const {
    //             data: {
    //                 products: { items },
    //             },
    //         } = categoryData;

    //         return items.map((item) => item.url_key);
    //     })
    //     .reduce((collector, setOfURLkeys) => [...collector, ...setOfURLkeys]);
    res.json(allCategoryItemData);
};
