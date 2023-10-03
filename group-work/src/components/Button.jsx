import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", ...props }) {
    const styles = {
        primary: "bg-green-400 hover:bg-green-500 border-white",
        secondary: "border-2 border-white hover:bg-green-400"
    }

    const variantClass = `flex gap-2 py-2 px-4 rounded ${styles[variant]} `

    return (
        <>
            {
                type === "link" ?
                    <Link href="#" {...props} className={variantClass}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={variantClass}>
                        {children}
                    </button>
            }
        </>
    )
}