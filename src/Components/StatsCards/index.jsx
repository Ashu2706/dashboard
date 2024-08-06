import React from 'react'
import './StatsCards.css'
import { BiSolidBasket } from "react-icons/bi";
import { AiFillShopping, AiFillDollarCircle } from "react-icons/ai";

export default function StatsCards() {
    return (
        <div className='stats-cards-wrapper flex flex-row gap-4 justify-between sm:justify-start flex-wrap lg:flex-nowrap'>
            <div className='stats-card w-[47.4%] lg:w-1/4 p-5'>
                <div className='stats-card-content'>
                    <div className='stats-card-icon-wrapper'>
                        <BiSolidBasket className='stats-card-icon' id="orders" />
                    </div>
                    <div className='stats-card-info'>Total Orders</div>
                    <div className='flex flex-row items-end justify-between mt-4'>
                        <div className='stats-card-count text-3xl font-bold'>75</div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='arrow text-sm' style={{ color: 'var(--green-color)' }}>&#9650;</span>
                            <div className='stats-card-percentage text-md font-semibold' style={{ color: 'var(--green-color)' }}>3%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats-card w-[47.4%] lg:w-1/4 p-5'>
                <div className='stats-card-content'>
                    <div className='stats-card-icon-wrapper'>
                        <AiFillShopping className='stats-card-icon' id="delivery" />
                    </div>
                    <div className='stats-card-info'>Total Delivered</div>
                    <div className='flex flex-row items-end justify-between mt-4'>
                        <div className='stats-card-count text-3xl font-bold'>70</div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='arrow text-sm' style={{ color: 'var(--red-color)' }}>▼</span>
                            <div className='stats-card-percentage text-md font-semibold' style={{ color: 'var(--red-color)' }}>3%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats-card w-[47.4%] lg:w-1/4 p-5'>
                <div className='stats-card-content'>
                    <div className='stats-card-icon-wrapper'>
                        <AiFillShopping className='stats-card-icon' id="cancelled" />
                    </div>
                    <div className='stats-card-info'>Total Cancelled</div>
                    <div className='flex flex-row items-end justify-between mt-4'>
                        <div className='stats-card-count text-3xl font-bold'>55</div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='arrow text-sm' style={{ color: 'var(--green-color)' }}>&#9650;</span>
                            <div className='stats-card-percentage text-md font-semibold' style={{ color: 'var(--green-color)' }}>3%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats-card w-[47.4%] lg:w-1/4 p-5'>
                <div className='stats-card-content'>
                    <div className='stats-card-icon-wrapper'>
                        <AiFillDollarCircle className='stats-card-icon' id="revenue" />
                    </div>
                    <div className='stats-card-info'>Total Revenue</div>
                    <div className='flex flex-row items-end justify-between mt-4'>
                        <div className='stats-card-count text-3xl font-bold'>$12k</div>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='arrow text-sm' style={{ color: 'var(--red-color)' }}>▼</span>
                            <div className='stats-card-percentage text-md font-semibold' style={{ color: 'var(--red-color)' }}>3%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
