const NavInput = () => {
  return (
    <div className="relative group">
        <button className="text-sm cursor-pointer border border-[#212124] bg-[#18181A] px-3 py-[5px] pr-24 rounded-lg hover:bg-[#27272A] text-white/70 hover:text-white transition-all">Search documentation...</button>
        <kbd className="absolute flex group-hover:text-white items-center cursor-pointer justify-center gap-1 text-white/70 top-1 right-2 bg-[#27272A] rounded-lg px-2">
            <span>⌘</span>
            <span className="text-xs">K</span>
        </kbd>
    </div>
  )
}

export default NavInput