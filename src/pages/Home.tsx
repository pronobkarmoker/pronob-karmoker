import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/481276607_2043319896174682_917476293767354069_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtkbWMRL0Lv7Pgipf1jRqn0p7d6KjCdNLSnt3oqMJ00jvYEELzGg57AmP5FvwaqNwNw__IGUqKmJQFlC7_9gPv&_nc_ohc=nvMKKry6LNcQ7kNvwHivbIs&_nc_oc=Adk6YO_Jp-Evk352250Z-puTTnnY7K_naLxxw71RL56eVNrmq_wBAjXockmE4RmYCLw&_nc_zt=23&_nc_ht=scontent.fdac24-3.fna&_nc_gid=ZXn2N9XMi3ZoRN_PzH4KJg&oh=00_AfGFM6jLttJLI8l_uN5NfaBIM8b2NEO7EfOUss_MQ33gfw&oe=67FBD977" 
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