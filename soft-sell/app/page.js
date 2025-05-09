'use client';
import { ArrowRight, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const reviews = [
  {
    title: 'Smooth process!',
    text: 'Selling my unused software license to Soft Shell was easier than expected. Great service!',
    rating: 5,
    name: 'John Doe',
    position: 'Software Engineer',
    company: 'TechCorp',
  },
  {
    title: 'Good platform',
    text: 'Solid experience managing licenses and receiving quotes quickly. Could use a few more features.',
    rating: 4,
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Innovatech',
  },
  {
    title: 'Decent',
    text: 'Takes a bit of time to receive a quote, but overall a good tool.',
    rating: 3,
    name: 'Alex Johnson',
    position: 'Freelancer',
    company: 'Self-Employed',
  },
];

function renderStars(rating) {
  return Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      size={16}
      fill={i < rating ? '#FFD700' : 'none'}
      color={i < rating ? '#FFD700' : '#D1D5DB'}
    />
  ));
}

export default function Home() {
  const MotionArrowRight = motion(ArrowRight);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const duration = 0.4;
  const delay = 0.1;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission, e.g., send data to a server
      console.log('Form submitted successfully', formData);
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="font-sans bg-neutral-100 dark:bg-neutral-900 flex flex-col">
      <header className="bg-gray-100 p-4 shadow-md flex w-full justify-between items-center dark:bg-neutral-900">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">Soft Sell</div>
        <nav className="space-x-4 w-full items-center justify-center text-gray-600 dark:text-gray-300 hidden md:flex md:text-xs lg:flex lg:text-base xl:text-lg xl:space-x-6 flex-4/6">
          <a href="#features">How it Works</a>
          <a href="#about">About us</a>
          <a href="#pricing">Get Quote</a>
          <a href="#help">Help Center</a>
          <a href="#contact">Contact us</a>
          <a href="#faqs">FAQs</a>
          <a href="#careers">Careers</a>
        </nav>

        <div className="space-x-2 md:mt-0 flex items-center justify-center">
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 mr-4">
            <img src={isDark ? '/lightmode.png' : '/darkmode.png'} alt="Toggle Theme" className="w-6 h-6" />
          </button>
          <button className="text-blue-500 dark:text-blue-300">Login</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">Try for free</button>
        </div>
      </header>

      <section className="bg-[url(/backgroundLight.png)] text-center py-12 dark:bg-[url(/backgroundDark.png)] bg-cover bg-no-repeat bg-center">
        <h1 className="text-4xl font-bold text-gray-200 px-4">Sell Your Software Licenses with Ease</h1>
        <p className="mt-2 text-sm text-gray-300 px-4">Soft Shell helps individuals and businesses sell their software licenses directly to us.</p>
        <button className="mt-4 bg-blue-400 px-6 py-2 rounded-full font-semibold text-white">Sign up</button>
      </section>

      <section id="about" className="py-12 px-4 text-center bg-gray-50 dark:bg-neutral-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-gray-300">About us</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700 dark:text-gray-400">
          Soft Shell is a tech startup focused on enabling users to sell their software licenses directly to our company. We make it simple and secure to offload unused licenses and get compensated fairly.
        </p>
        <button className="border px-6 py-2 rounded-full text-blue-500 border-blue-500 dark:border-blue-400 dark:text-blue-400">Learn more</button>
      </section>

      <section className="py-12 px-4 bg-gray-50 dark:bg-neutral-800 border-t-2 border-neutral-700">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-400">
          {["Secure Transactions: We ensure every license transfer is safe, verified, and compliant.", "Fast Valuations: Get real-time quotes for your unused software—no waiting days.", "Trusted by Users: Hundreds of customers have already sold their licenses with ease."].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <p><strong>{text.split(':')[0]}:</strong> {text.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="HowItWork" className="py-8 px-4 bg-gray-100 dark:bg-neutral-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 dark:text-gray-300">How it Works:</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {[
            { title: 'Upload License', img: '/upload.png', text: 'Simply upload your unused software license to our platform.' },
            { title: 'Get Valuation', img: '/quote.png', text: 'Receive a fair and fast valuation for your software license.' },
            { title: 'Get Paid', img: '/payment.png', text: 'Get paid quickly and securely for your unused licenses.' }
          ].map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration, ease: 'easeOut', delay: delay * idx }}
              className="bg-gray-50 p-6 rounded-xl shadow text-center w-4/5 md:w-1/3 dark:bg-neutral-700"
            >
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">{step.title}</div>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <img src={step.img} alt={step.title} className="mx-auto mb-4 w-12 h-12" />
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-8 dark:bg-blue-800 mb-8 mt-0 mx-8 rounded-2xl">
        <div>
          <h2 className="text-3xl font-bold mb-4">Getting started</h2>
          <button className="bg-gray-100 px-6 py-2 rounded-full text-blue-600 dark:text-blue-800 font-semibold">Sign Up</button>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 dark:bg-neutral-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto flex space-x-6 overflow-x-auto text-gray-700 dark:text-gray-400 no-scrollbar">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow dark:bg-neutral-700 flex-shrink-0 w-80">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{review.title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{review.text}</p>
              <div className="mt-2 flex justify-center">{renderStars(review.rating)}</div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p><strong>{review.name}</strong>, {review.position}</p>
                <p>{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-neutral-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow dark:bg-neutral-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 dark:text-gray-300">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                value={formData.company}
                onChange={handleChange}
                required
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="licenseType" className="block text-gray-700 dark:text-gray-300">License Type</label>
              <select
                id="licenseType"
                name="licenseType"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                value={formData.licenseType}
                onChange={handleChange}
                required
              >
                <option value="">Select License Type</option>
                <option value="Software License">Software License</option>
                <option value="Subscription License">Subscription License</option>
                <option value="Cloud License">Cloud License</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-50 p-6 text-center text-sm text-gray-600 dark:bg-neutral-700 dark:text-gray-300">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {["Get Quote", "About us", "How it Works", "Help Center", "Contact us", "FAQs", "Careers"].map((link, i) => (
            <a key={i} href="#" className="text-blue-500 dark:text-gray-300">{link}</a>
          ))}
        </div>
        <div>© 2025 Soft Shell, Inc. • Privacy • Terms • Sitemap</div>
      </footer>
    </div>
  );
}
