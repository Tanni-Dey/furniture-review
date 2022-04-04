import React from 'react';
import Review from '../Review/Review';
import useReviews from '../useReviews/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <div>
            <h2 className="font-sans text-7xl py-20 bg-local text-blue-900 bg-[url('https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2018/07/2018-07-12-604x270.png')] bg-cover bg-center bg-no-repeat" >Reviews</h2>
            <div className='grid md:grid-cols-3 gap-5 px-10 py-10'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;