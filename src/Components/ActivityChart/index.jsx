import React from 'react'
import './ActivityChart.css'
export default function ActivityChart() {
    let heights = [40, 120, 50, 45, 60, 60, 52, 56, 50, 20, 80, 90, 60, 140, 100, 160, 200, 134, 100, 50, 70, 134, 100, 70]
    return (
        <>
            <div className='activity-chart-wrapper px-2 py-4'>
                <div className='activity-header flex flex-row justify-between px-4'>
                    <h2 className='activity-heading text-2xl font-semibold'>Activity</h2>
                    <div className='activity-btn flex items-center'>
                        <span>Weekly</span>
                        <span className='arrow text-[10px] ml-2 mt-[3px]' style={{ color: 'var(--text-color)' }}>▼</span>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='graph-y-axis pl-5 pb-11 flex flex-col gap-12 justify-end'>
                        <span className='numbers'>15k</span>
                        <span className='numbers'>10k</span>
                        <span className='numbers'>5k</span>
                        <span className='numbers'>0</span>
                    </div>
                    <div className='w-full p-4'>
                        <div className='graph-lines-wrapper relative top-9 flex flex-col gap-16'>
                            <div className='graph-line'></div>
                            <div className='graph-line'></div>
                            <div className='graph-line'></div>
                            <div className='graph-line'></div>
                        </div>
                        <div className='activity-chart flex flex-row items-end gap-2 lg:gap-3 2xl:gap-4'>
                            {
                                heights.map((height, index) => <div className='bar' style={{ height: `${height}px` }} key={index}></div>)
                            }

                        </div>
                        <div className='graph-x-axis flex flex-row ml-2 gap-4 sm:gap-[34px] lg:gap-[60px] 2xl:gap-[69px] mt-11'>
                            <span className='numbers'>5</span>
                            <span className='numbers'>9</span>
                            <span className='numbers'>11</span>
                            <span className='numbers'>13</span>
                            <span className='numbers'>15</span>
                            <span className='numbers'>17</span>
                            <span className='numbers'>19</span>
                            <span className='numbers'>21</span>
                            <span className='numbers'>23</span>
                            <span className='numbers'>25</span>
                            <span className='numbers'>27</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
