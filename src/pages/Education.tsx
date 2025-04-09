import React from 'react';
import { GraduationCap, Book } from 'lucide-react';

function Education() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Education</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Bachelor of Science in Software Engineering</h2>
                <p className="text-blue-400 mb-2">Institute of Information Technology, University of Dhaka</p>
                <p className="text-gray-400 mb-4">2021 - Present</p>
                <p className="text-gray-300">
                  Currently pursuing my undergraduate degree with a focus on software engineering principles,
                  algorithms, data structures, and modern development practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <Book className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h2>
                <p className="text-green-400 mb-2">Gaibandha Govt College</p>
                <p className="text-gray-400 mb-4">2019 - 2021</p>
                <p className="text-gray-300">Science Group</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-start gap-4">
              <Book className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Secondary School Certificate (SSC)</h2>
                <p className="text-yellow-400 mb-2">Gaibandha Govt Boys High School</p>
                <p className="text-gray-400 mb-4">2014 - 2019</p>
                <p className="text-gray-300">Ranked first in admission test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;