import React from 'react'
import './Reviews.css'
import { BiSolidStar } from "react-icons/bi";
export default function Reviews() {
    return (
        <div className='reviews-wrapper px-5 py-4 flex flex-col gap-4'>
            <h2 className='reviews-heading text-2xl font-semibold mb-1'>Customer's Feedback</h2>
            <div className='reviews-card flex flex-col gap-4'>
                <div className='review-card'>
                    <div className='review-card-header flex gap-2 items-center'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Jenny Wilson
                        </p>
                    </div>
                    <div className='reviews-icon-wrapper flex mt-1.5 gap-0.5'>
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-empty' />
                    </div>
                    <p className='review-card-text mt-2'>
                        The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies
                    </p>
                </div>
                <div className='review-card'>
                    <div className='review-card-header flex gap-2 items-center'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Dianne Russell
                        </p>
                    </div>
                    <div className='reviews-icon-wrapper flex mt-1.5 gap-0.5'>
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                    </div>
                    <p className='review-card-text mt-2'>
                        We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service
                    </p>
                </div>
                <div className='review-card'>
                    <div className='review-card-header flex gap-2 items-center'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            John Wayne
                        </p>
                    </div>
                    <div className='reviews-icon-wrapper flex mt-1.5 gap-0.5'>
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-empty' />
                    </div>
                    <p className='review-card-text mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='review-card'>
                    <div className='review-card-header flex gap-2 items-center'>
                        <div className='profile'>
                            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='profile-image' />
                        </div>
                        <p className='profile-name'>
                            Devon Lane
                        </p>
                    </div>
                    <div className='reviews-icon-wrapper flex mt-1.5 gap-0.5'>
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                        <BiSolidStar className='reviews-icon-fill' />
                    </div>
                    <p className='review-card-text mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}
