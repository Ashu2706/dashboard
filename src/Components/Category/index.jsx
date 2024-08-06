import React from 'react'
import { BiChevronRight, BiAtom, BiDish } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";
import './Category.css'

export default function Category() {
    return (
        <div className='category-wrapper p-5 flex flex-col justify-center gap-8'>
            <div className='category flex items-center gap-4' style={{ paddingTop: "0px" }}>
                <div className='category-icon' id="category-icon-1">
                    <BiAtom />
                </div>
                <div className='category-text flex-grow'>Goal</div>
                <div className='category-arrow'>
                    <BiChevronRight />
                </div>
            </div>
            <div className='category flex items-center gap-4'>
                <div className='category-icon' id="category-icon-2">
                    <PiHamburger />
                </div>
                <div className='category-text  text-sm md:text-base lg:text-lg flex-grow'>Popular Dishes</div>
                <div className='category-arrow'>
                    <BiChevronRight />
                </div>
            </div>
            <div className='category flex items-center gap-4' style={{ marginBottom: "10px" }}>
                <div className='category-icon' id="category-icon-3">
                    <BiDish />
                </div>
                <div className='category-text flex-grow'>Menus</div>
                <div className='category-arrow'>
                    <BiChevronRight />
                </div>
            </div>
        </div>
    )
}
