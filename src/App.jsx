import React from "react";

function App() {
  const projects = [
    {
      name: "Navaratna Jewellers",
      url: "https://navaratna-client-side.vercel.app/",
      imageUrl: "/images/navaratna.png",
      description: "A jewelry e-commerce platform"
    },
    {
      name: "Quarter",
      url: "https://quarter-sand.vercel.app/#/",
      imageUrl: "/images/quarter.png",
      description: "Real estate website"
    },
    {
      name: "Ninico Shop",
      url: "https://ninico-seven.vercel.app/",
      imageUrl: "/images/ninico.png",
      description: "International shopping platform"
    },
    {
      name: "Rentaly",
      url: "https://rentaly-one.vercel.app/",
      imageUrl: "/images/rently.png",
      description: "Car rental service website"
    },
    {
      name: "Bellaria",
      url: "https://bellaria.vercel.app/",
      imageUrl: "/images/bellaria.png",
      description: "Bakery and cake shop website"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-200">
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center align-middle text-center inline-block box-border border-2 border-black bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
