import React from 'react'
import './OrderList.css'
export default function OrderList() {
    return (
        <div className='order-list-wrapper p-5'>
            <h2 className='order-heading text-2xl font-semibold mb-4'>Recent Orders</h2>
            <div className='order-list flex flex-col'>
                <div className='order-list-header w-[800px] lg:w-full lg:flex'>
                    <h2 className='text-sm font-semibold pr-6 inline-block w-[350px] lg:w-full'>Customer</h2>
                    <h2 className='text-sm font-semibold pr-6 inline-block w-[150px] lg:w-[40%]'>Order No.</h2>
                    <h2 className='text-sm font-semibold pr-6 inline-block w-[150px] lg:w-[40%]'>Amount</h2>
                    <h2 className='text-sm font-semibold pr-6 inline-block w-[150px] lg:w-[40%]'>Status</h2>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Jenny Wilson
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>15478256</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$124.00</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="delivered">Delivered</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                        Dianne Russell
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>48965786</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$365.02</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="delivered">Delivered</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                        Devon Lane
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>78958215</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$45.88</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="alert">Cancelled</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                        John Wayne
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>20965732</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$65.00</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="alert">Pending</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Cody Fisher
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>95715620</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$545.00</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="delivered">Delivered</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Savannah Nguyen
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>78514568</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$128.20</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="delivered">Delivered</span>
                    </div>
                </div>
                <div className='order w-[800px] lg:w-full lg:flex items-center'>
                    <div className='order-customer pr-6 w-[350px] lg:w-full inline-block '>
                        <div className='flex items-center gap-2'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Shaun Garry
                        </p>
                        </div>
                    </div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>68914569</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>$200.40</div>
                    <div className='text-sm font-semibold pr-6 inline-block translate-y-[-80%] lg:translate-y-0 w-[150px] lg:w-[40%]'>
                        <span className='order-status' id="delivered">Delivered</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
