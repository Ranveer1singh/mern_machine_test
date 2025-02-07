import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container_header flex justify-around bg-transparent items-center w-full">
                <div className="logo">
                    <div className="flex gap-2 items-center">
                <i class="ri-vip-crown-fill text-2xl"></i>
                <h4 className='font-bold'>Landguru</h4>
                </div>
                </div>
                <div className="menu_section">
                    <div className="">
                        <ul className='flex gap-4 items-center cursor-pointer'>
                            <li>Home</li>
                            <li>Adversite <i class="ri-arrow-down-s-line"></i></li>
                            <li>Support <i class="ri-arrow-down-s-line"></i></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="button_section">
                <button className='bg-red-100 p-2 rounded'>
                    Try For Free
                </button>
                </div>
        </div>
    </header>
  )
}

export default Header