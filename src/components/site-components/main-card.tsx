import React from 'react'

type Props = {
    children: React.ReactNode
}

const MainCard = ({ children }: Props) => {
  return (
    <div className='w-full h-96 border border-[#27272A] mt-5 rounded-xl flex items-center justify-center'>
        {children}
    </div>
  )
}

export default MainCard