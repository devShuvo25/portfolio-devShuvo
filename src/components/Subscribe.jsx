import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 my-10'>
            <h1 className='text-4xl font-bold'>Subscribe to our news letter For Design Insights</h1>
            <p className='text-sm opacity-70  mx-100 text-center'>Get exclusive updates on projects and design trends. Learn how to transform spaces with style and function.Subscribe today and never miss an insight.</p>
            <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item">Join</button>
</div>
        </div>
    );
};

export default Subscribe;