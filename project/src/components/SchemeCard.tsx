import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SchemeCardProps {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  imageUrl: string;
}

export default function SchemeCard({ id, title, description, eligibility, benefits, imageUrl }: SchemeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-indigo-600">Eligibility</h4>
            <p className="text-gray-600 text-sm">{eligibility}</p>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-600">Benefits</h4>
            <p className="text-gray-600 text-sm">{benefits}</p>
          </div>
        </div>
        
        <Link 
          to={`/schemes/${id}`}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}