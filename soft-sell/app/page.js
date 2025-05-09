'use client'; // This is a client component in Next.js
import { ArrowRight, Star } from 'lucide-react'; // Importing ArrowRight and Star from lucide-react
import { motion, useInView } from 'framer-motion'; // Importing motion from framer-motion for animations
import { use, useRef } from "react"; // Importing useRef from React
import { useEffect, useState } from "react"; // Importing useEffect and useState from React

// Reviews data
const reviews = [
  {
    title: 'Smooth process!',
    text: 'Selling my unused software license to Soft Shell was easier than expected. Great service!',
    rating: 5,
  },
  {
    title: 'Good platform',
    text: 'Solid experience managing licenses and receiving quotes quickly. Could use a few more features.',
    rating: 4,
  },
  {
    title: 'Decent',
    text: 'Takes a bit of time to receive a quote, but overall a good tool.',
    rating: 3,
  },
];

// Function to render star ratings
function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#FFD700' : 'none'}
        color={i < rating ? '#FFD700' : '#D1D5DB'}
      />
    );
  }
  return stars;
}

export default function Home() {
  const MotionArrowRight = motion(ArrowRight); // Create a motion version of the ArrowRight component
  const [isDark, setIsDark] = useState(true); // State to manage dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev); // Toggle dark mode state
  }
  const duration = 0.2; // Animation duration
  const delay = duration - 0.4 * duration; // Animation delay

  return (
    <div className="font-sans">
      {/* Header Section */}
      <div className="bg-gray-100 p-4 shadow-md flex justify-between items-center dark:bg-gray-800">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">Soft Shell</div>
        <div className="space-x-4 text-gray-600 dark:text-gray-300">
          <a href="#features">How it Works</a>
          <a href="#about">About us</a>
          <a href="#pricing">Get Quote</a>
          <a href="#help">Help Center</a>
          <a href="#contact">Contact us</a>
          <a href="#faqs">FAQs</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="space-x-2">
          <button className="text-blue-500 dark:text-blue-300">Login</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">Try for free</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className=" bg-indigo-600 text-center py-16 dark:bg-indigo-800">
        <h1 className="text-4xl font-bold text-gray-200">Sell Your Software Licenses with Ease</h1>
        <p className="mt-2 text-sm text-gray-300">Soft Shell helps individuals and businesses sell their software licenses directly to us.</p>
        <button className="mt-4 bg-white px-6 py-2 rounded-full font-semibold text-blue-500">Sign up</button>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About us</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          Soft Shell is a tech startup focused on enabling users to sell their software licenses directly to our company. We make it simple and secure to offload unused licenses and get compensated fairly.
        </p>
        <button className="border px-6 py-2 rounded-full text-blue-500 border-blue-500">Learn more</button>
      </div>

      {/* Why Choose Us Section */}

      <div className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 ">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✓</span>
            <p><strong>Secure Transactions:</strong> We ensure every license transfer is safe, verified, and compliant.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✓</span>
            <p><strong>Fast Valuations:</strong> Get real-time quotes for your unused software—no waiting days.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">✓</span>
            <p><strong>Trusted by Users:</strong> Hundreds of customers have already sold their licenses with ease.</p>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div id="HowItWork" className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How it Works:</h2>
        <div className="flex items-center justify-between p-10 h-full">
          {/* Step 1 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }} // Initial state for animation
            whileInView={{ x: 0, opacity: 1}}
            viewport={{ once: true, amount: 1 }} // Animation will only trigger once when in view
            // animate={useInView ? { x: 0, opacity: 1} : {}}
            transition={{ duration: duration, ease: 'easeInOut' }} // Animation transition
            className="bg-white p-6 rounded-xl shadow text-center w-1/4 h-full">
            <div className="text-xl font-semibold text-gray-800">Upload License</div>
            <div className="mt-2 text-sm text-gray-700">
              <img src="/upload-icon.png" alt="Upload License" className="mx-auto mb-4 w-12 h-12" />
              <p>Simply upload your unused software license to our platform.</p>
            </div>
          </motion.div>

          <MotionArrowRight
            initial={{ x: 30, opacity: 0 }} // Initial state for animation
            whileInView={{ x: 0, opacity: 1}}
            viewport={{ once: true, amount: 1 }} // Animation will only trigger once when in view
            transition={{ duration: duration, ease: 'easeInOut', delay: delay }} // Animation transition
          size={48} className="text-gray-500" />

          {/* Step 2 */}
          <motion.div 
          initial={{ x: 30, opacity: 0 }} // Initial state for animation
          whileInView={{ x: 0, opacity: 1}}
          viewport={{ once: true, amount: 1 }} // Animation will only trigger once when in view
          transition={{ duration: duration, ease: 'easeInOut', delay: duration }} // Animation transition
          className="bg-white p-6 rounded-xl shadow text-center w-1/4 h-full">
            <div className="text-xl font-semibold text-gray-800">Get Valuation</div>
            <div className="mt-2 text-sm text-gray-700">
              <img src="/valuation-icon.png" alt="Get Valuation" className="mx-auto mb-4 w-12 h-12" />
              <p>Receive a fair and fast valuation for your software license.</p>
            </div>
          </motion.div>

          <MotionArrowRight 
          initial={{ x: 30, opacity: 0 }} // Initial state for animation
          whileInView={{ x: 0, opacity: 1}}
          viewport={{ once: true, amount: 1 }} // Animation will only trigger once when in view
          transition={{ duration: duration, ease: 'easeInOut', delay: 2 * delay + duration }} // Animation transition
          size={48} className="text-gray-500" />

          {/* Step 3 */}
          <motion.div 
          initial={{ x: 30, opacity: 0 }} // Initial state for animation
          whileInView={{ x: 0, opacity: 1}}
          viewport={{ once: true, amount: 1 }} // Animation will only trigger once when in view
          transition={{ duration: duration, ease: 'easeInOut', delay: 2 * delay + duration }}
          className="bg-white p-6 rounded-xl shadow text-center w-1/4 h-full">
            <div className="text-xl font-semibold text-gray-800">Get Paid</div>
            <div className="mt-2 text-sm text-gray-700">
              <img src="/payment-icon.png" alt="Get Paid" className="mx-auto mb-4 w-12 h-12" />
              <p>Get paid quickly and securely for your unused licenses.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="text-3xl font-bold text-center text-gray-800 mb-12">Customer Reviews</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <div className="text-xl font-semibold text-gray-800 mb-2">{review.title}</div>
              <div className="text-sm text-gray-700 mb-4">{review.text}</div>
              <div className="flex space-x-1">
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white text-center py-16">
        <div>
          <div className="text-3xl font-bold mb-4">Getting started</div>
          <button className="bg-pink-500 px-6 py-2 rounded-full text-white font-semibold">Sign Up</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-6 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-500">Get Quote</a>
          <a href="#" className="text-blue-500">About us</a>
          <a href="#" className="text-blue-500">How it Works</a>
          <a href="#" className="text-blue-500">Help Center</a>
          <a href="#" className="text-blue-500">Contact us</a>
          <a href="#" className="text-blue-500">FAQs</a>
          <a href="#" className="text-blue-500">Careers</a>
        </div>
        <div>© 2022 Soft Shell, Inc. • Privacy • Terms • Sitemap</div>
      </div>
    </div>
  );
}
