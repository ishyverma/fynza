import Link from "next/link";
import NavInput from "./nav-input";
import Github from "../../../public/gtihub";
import NavTheme from "./nav-theme";
interface NavItem {
  itemName: string;
  redirectLink: string;
}

const navItems: NavItem[] = [
  {
    itemName: "Docs",
    redirectLink: "/docs",
  },
  {
    itemName: "Components",
    redirectLink: "/components",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/30 border-b-[1px] border-dashed border-gray-600/70 backdrop-blur-md z-50">
      <div className="max-w-[90vw] mx-auto flex justify-between items-center px-5 border-x-[1px] border-gray-600/70 border-dashed py-4 w-auto overflow-x-hidden">
        <div className="flex items-center justify-center gap-7">
          <p className="font-semibold text-lg text-white">fynza</p>
          <ul className="flex justify-center items-center gap-7">
            {navItems.map((item, id) => (
              <li
                className="text-sm text-white/70 hover:text-white transition-all"
                key={id}
              >
                <Link href={item.redirectLink}>{item.itemName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          <NavInput />
          <div className="cursor-pointer hover:bg-[#27272A] p-2 rounded-lg transition-all">
            <Github />
          </div>
          <NavTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;