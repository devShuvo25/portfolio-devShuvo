import React from "react";

const Subscribe = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Subscribe to Our Newsletter for Design Insights
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Get exclusive updates on projects and design trends. Learn how to
          transform spaces with style and function. Subscribe today and never
          miss an insight.
        </p>

        {/* Email input + Button */}
        <div className="flex flex-col sm:flex-row w-full sm:max-w-xl gap-3 mt-4">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="w-full px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600 transition"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="M22 7 L13.03 12.7 A1.94 1.94 0 0 1 11 12.7 L2 7"></path>
            </svg>
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
            Join
          </button>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
