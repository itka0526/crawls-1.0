export default function Hamburger({ open, setOpen }) {
    return (
        <div
            className="relative z-50  flex h-5 w-8 flex-col items-center justify-between md:hidden"
            onClick={() => {
                setOpen(!open);
            }}
        >
            {/* hamburger button */}
            <span
                className={`h-[2.5px] w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                    open ? "translate-y-1.5 rotate-45" : ""
                }`}
            />
            <span
                className={`h-[2.5px] w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
                    open ? "w-0" : "w-full"
                }`}
            />
            <span
                className={`h-[2.5px] w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                    open ? "-translate-y-[0.7rem] -rotate-45" : ""
                }`}
            />
        </div>
    );
}
