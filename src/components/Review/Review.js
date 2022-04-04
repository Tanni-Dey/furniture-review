import React from 'react';

const Review = ({ review }) => {
    const { name, img, c_review, rating } = review;
    return (
        <div className='my-10 p-5 border-orange-400 text-left border-2 rounded-md '>
            <div className='flex items-center'>
                <img className='h-12 mr-10 ' src={img} alt="" />
                <h2 className='text-2xl font-sans text-orange-400'>{name}</h2>
            </div>
            <p className='font-serif py-3'>{c_review}</p>
            <p className='font-sans text-orange-400'>Ratings : {rating}</p>
        </div>
    );
};

export default Review;