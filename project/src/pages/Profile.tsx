import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, FileText, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Please log in to view your profile</h1>
          <button className="mt-4 btn-primary">Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-indigo-600 px-4 py-8 sm:px-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <User className="h-16 w-16 text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-indigo-100">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Role</dt>
                  <dd className="mt-1 text-sm text-gray-900 capitalize">{user.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Member since</dt>
                  <dd className="mt-1 text-sm text-gray-900">January 2024</dd>
                </div>
              </dl>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              <ul className="mt-4 space-y-4">
                <li className="text-sm text-gray-600">Viewed ICDS scheme details</li>
                <li className="text-sm text-gray-600">Updated contact information</li>
                <li className="text-sm text-gray-600">Downloaded scheme guidelines</li>
              </ul>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              <div className="mt-4 space-y-4">
                <button className="flex items-center text-gray-700 hover:text-indigo-600">
                  <Settings className="h-5 w-5 mr-2" />
                  Account Settings
                </button>
                <button className="flex items-center text-gray-700 hover:text-indigo-600">
                  <FileText className="h-5 w-5 mr-2" />
                  My Applications
                </button>
                <button 
                  onClick={logout}
                  className="flex items-center text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}