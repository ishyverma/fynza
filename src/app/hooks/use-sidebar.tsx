import { SidebarContext } from "@/contexts/sidebar-context";
import { useContext } from "react";

const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        return {
            name: "",
            description: "",
            codeStyle: "",
            code: <div></div>
        }
    }

    const { changeItem, selectedItem } = context

    return {
        selectedItem, changeItem
    }
}

export default useSidebar;