import React from "react";

const works = [
  { name: "Практическая работа по 1С Предприятие", file: "/works/work1.pdf" },
  // Add more works here as needed
];

const PracticalWorksPage = () => {
  return (
    <main className="container mx-auto my-8 w-full max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Мои практические работы</h2>
      <div className="grid grid-cols-1 gap-8">
        {works.map((work, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-800 px-6 py-4 border-b border-gray-200">{work.name}</h3>
            <div className="p-6">
              <iframe
                src={work.file}
                className="w-full h-[600px] border-none"
                title={work.name}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PracticalWorksPage;
