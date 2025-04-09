import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:bsse1431@iit.du.ac.bd" className="text-white hover:text-blue-400 transition-colors">
                    bsse1431@iit.du.ac.bd
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+880 1745330624</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Facebook className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-gray-400">Facebook</p>
                  <a href="https://www.facebook.com/suvo.suvokarmoker/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                    Pronob Karmoker
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;