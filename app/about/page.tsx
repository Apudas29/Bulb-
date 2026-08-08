export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          Hello! My name is <strong>Apu Das</strong>. I am a B.Tech
          Computer Science and Engineering student with a strong interest
          in software development and modern web technologies.
        </p>

        <p className="text-lg text-gray-700 leading-8 mt-4">
          I enjoy learning Java, JavaScript, React, and Next.js. I am
          passionate about building websites, solving programming
          problems, and exploring new technologies.
        </p>

        <p className="text-lg text-gray-700 leading-8 mt-4">
          My goal is to become a skilled software engineer and create
          useful applications that make a positive impact on people's
          lives.
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Apudas29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}