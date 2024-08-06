import React from 'react'
import './Progress.css'
export default function Progress() {
    return (
        <div className="progress-wrapper px-6 py-5 flex justify-between items-center">
            <div className='profit-section flex flex-col gap-4'>
                <span className='title'>Net Profit</span>
                <p className='profite-value text-3xl sm:text-4xl font-bold'>$ 6759.25</p>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='arrow text-sm' style={{ color: 'var(--green-color)' }}>&#9650;</span>
                    <div className='text-md font-semibold' style={{ color: 'var(--green-color)' }}>3%</div>
                </div>
            </div>
            <div className="relative w-28 h-28">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="stroke-current progress-remaining"
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                    ></circle>
                    <circle
                        className="progress-ring__circle stroke-current progress-fill"
                        strokeWidth="10"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset="calc(251.2px - (251.2px * 70) / 100)"
                    ></circle>
                </svg>
                <div className='progress-text'>
                    <span>70%</span>
                    <p>Goal Completed</p>
                </div>
                <span className="note">*The values has been rounded off</span>
            </div>
        </div>
    )
}
