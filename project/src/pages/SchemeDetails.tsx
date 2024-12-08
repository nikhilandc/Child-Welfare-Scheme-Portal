import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { useScheme } from '../hooks/useScheme';

export default function SchemeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: scheme, isLoading } = useScheme(id!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!scheme) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Scheme not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 btn-primary"
        >
          Go back home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-indigo-600 hover:text-indigo-500 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to schemes
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-64 relative">
          <img
            src={scheme.imageUrl}
            alt={scheme.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl font-bold">{scheme.title}</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Deadline: {scheme.deadline || 'Ongoing'}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{scheme.state || 'National'}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>{scheme.category}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-6">{scheme.description}</p>

            <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
            <p className="text-gray-600 mb-6">{scheme.eligibility}</p>

            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <p className="text-gray-600 mb-6">{scheme.benefits}</p>
          </div>

          <div className="mt-8">
            <button className="btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}