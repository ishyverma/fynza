import Link from "next/link";

interface NavItem {
    itemName: string;
    redirectLink: string;
}

const navItems: NavItem[] = [
    {
        itemName: "Docs",
        redirectLink: "/docs"
    },
    {
        itemName: "Components",
        redirectLink: "/components"
    }
]

const Navbar = () => {
    return <nav className="px-20 py-5 border-b-[1px] border-dashed border-gray-600/70 flex justify-between items-center">
        <div className="flex items-center gap-7">
            <p className="font-sans font-semibold text-lg">fynza 💦</p>
            <ul className="flex items-center justify-center gap-7">
                {navItems.map((item, id) => (
                    <li className="text-sm text-white/70 hover:text-white transition-all" key={id}>
                        <Link href={item.redirectLink}>
                            {item.itemName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>

        </div>
    </nav>
}

export default Navbar;