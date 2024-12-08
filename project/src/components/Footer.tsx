import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-300">Home</a></li>
              <li><a href="#" className="hover:text-indigo-300">All Schemes</a></li>
              <li><a href="#" className="hover:text-indigo-300">Resources</a></li>
              <li><a href="#" className="hover:text-indigo-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: support@childcare.gov<br />
              Phone: 1800-XXX-XXXX<br />
              Available 24/7
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with new schemes and policy changes</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 ChildCare Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}