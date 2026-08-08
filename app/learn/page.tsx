import React from "react";

export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          My Learning Journey 🚀
        </h1>

        <p className="text-lg text-gray-700 leading-8 mb-6">
          Welcome to my learning page. I am a Computer Science and
          Engineering student who is continuously improving my skills in
          programming, web development, and software engineering.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Currently Learning</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Java Programming</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures & Algorithms</li>
          <li>React.js and Next.js</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Git and GitHub</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">My Goals</h2>
        <p className="text-lg text-gray-700 leading-8">
          My goal is to become a skilled software developer and build
          modern web applications that solve real-world problems. I enjoy
          learning new technologies and creating projects to strengthen my
          practical knowledge.
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Apudas29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}