
function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-6">
              Software Engineering Student at IIT, University of Dhaka | Publicity secretary, IEEE CS SB DU | Executive member, IITSEC.
              Passionate about creating innovative solutions through technology and actively involved in various technical communities.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl mb-3 text-blue-400">Programming Languages</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-blue-400">Web Technologies</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>HTML5/CSS3</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl mb-3 text-blue-400">Databases</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-3 text-blue-400">Tools & Others</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Linux</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;