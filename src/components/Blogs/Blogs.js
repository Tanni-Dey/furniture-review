import React from 'react';

const Blogs = () => {
    return (
        <div className='px-10 text-left py-20'>
            <h2 className='font-sans text-2xl'>Q1: What is Context API ?</h2>
            <p className='font-serif text-xl mb-10'>Ans: Context api is a way to pass data globally in react app. Normally  props is use for passing data parent to child components. But context api can pass data without props drilling. This data set globally and can be passed this data from any child components by using useContext hook. This is easy way of passing data. </p>
            <h2 className='font-sans text-2xl'>Q2: What is Semantic Tag ?</h2>
            <p className='font-serif text-xl'>Ans: Semantic tag is some elements of html 5. This tag use in individual section in website. Those elements describe clearly that any work of  which section. Structure  of html tag is clearly readable to developer and machine for using semantic tag. Some semantic tags are header, footer, article etc.</p>
        </div>
    );
};

export default Blogs;