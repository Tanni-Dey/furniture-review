import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import useReviews from '../useReviews/useReviews';

const Home = () => {
    const [reviews, setReviews] = useReviews([])
    const someReview = reviews.slice(0, 3)
    return (
        <div className=''>
            <div className='text-left px-10 grid md:grid-cols-2 flex items-center'>
                <div>
                    <h2 className='text-6xl font-sans text-orange-400'>Quality Furniture</h2>
                    <h2 className='text-6xl text-blue-900 font-sans py-5'>At Afforable Prices</h2>
                    <p className='text-gray-600 font-serif'>Furniture store offers very high quality office furniture designed to effectively incorporate computer machinery into the executive office or home office.</p>
                    <button className='p-3 border-orange-400 mt-5 text-xl rounded-md text-orange-400 font-sans border-2 hover:border-blue-900 hover:text-blue-900'>See Furniture</button>
                </div>
                <img src="https://minhazfurniture.com/wp-content/uploads/2021/04/pngwing.com-1.png" alt="" />
            </div>
            <div className='bg-gray-200 p-10'>
                <h2 className='text-4xl font-sans text-blue-900'>Customers Reviews</h2>
                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        someReview.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <Link to="/reviews" className='p-3 border-blue-900 mt-5 text-xl rounded-md text-blue-900 font-sans border-2 hover:border-orange-400 hover:text-orange-400'>See All Reviews</Link>
            </div>
        </div>

    );
};

export default Home;