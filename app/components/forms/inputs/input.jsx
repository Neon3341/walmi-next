

export default function Input({ label = false, placeholder, value, onChange, id, autocomplete, type = "text", variant = "default", min = 0, max = 999999 }) {
    let classes = {
        label: "pl-3 -mb-2 text-neutral-500",
        input: "px-4 py-2 rounded-2xl cursor-pointer transition-all hover:brightness-110 flex flex-row justify-center items-center text-nowrap "
    }

    switch (variant) {
        case "outline":
            classes.input += "bg-gray/10 border-[.06rem] rounded-[.625rem]  border-black/30";
            break;
        case "clear":
            classes.input += " border border-netural-200 pl-4 pr-4 py-2 rounded-2xl bg-transparent text-netural-400 hover:brightness-95";
            break;
        default:
            classes.input += " ";
            break;
    }

    return (
        <>
            {label && <label htmlFor={id} className={classes.label}>{label}</label>}
            <input min={min} max={max} id={id} className={classes.input} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autocomplete}/>
        </>
    )
}