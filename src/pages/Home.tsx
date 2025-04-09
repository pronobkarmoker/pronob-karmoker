import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="https://media.licdn.com/dms/image/D5603AQGvOPVFpgVxQw/profile-displayphoto-shrink_800_800/0/1697644660942?e=1715212800&v=beta&t=Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs" 
            alt="Pronob Karmoker" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4">Pronob Karmoker</h1>
          <p className="text-xl text-gray-300 mb-8">Software Engineering Student | University of Dhaka</p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://www.linkedin.com/in/pronob-bsse1431/" target="_blank" rel="noopener noreferrer" 
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/pronobkarmoker" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:bsse1431@iit.du.ac.bd"
              className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate software engineering student with a focus on full-stack development.
            Currently pursuing my undergraduate degree at the University of Dhaka,
            while working on exciting projects and expanding my technical skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;