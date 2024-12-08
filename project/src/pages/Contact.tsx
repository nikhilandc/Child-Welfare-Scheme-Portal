import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with our support team for any queries about child welfare schemes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">support@childcare.gov</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">1800-XXX-XXXX (Toll Free)</p>
                <p className="text-gray-600">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  Child Welfare Department<br />
                  Government Complex<br />
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}