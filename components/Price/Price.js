export default function Price({ specialPrice, normalPrice }) {
    return (
        <>
            {specialPrice && (
                <span className="font-medium">{specialPrice}₮</span>
            )}
            <span
                className={` ${
                    specialPrice ? "ml-2 text-base line-through" : "font-medium"
                }`}
            >
                {normalPrice?.toLocaleString()}₮
            </span>
        </>
    );
}
