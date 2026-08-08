import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <Image
        src="/black-myth-wukong-7680x4320-18300.jpg"
      alt="Wukong"
      width={1000}
      height={600}
      className="w-full max-w-[500px] h-auto rounded-3xl"
      priority
      />

      <h1 className="text-5xl font-bold mb-4">
        Hello, I'm Apu Das 👋
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
        B.Tech CSE Student | Java Developer | Next.js Learner
        <br />
        Passionate about web development and building modern applications.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/Apudas29"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          GitHub Profile
        </a>

        <a
          href="/about"
          className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          About Me
        </a>
      </div>
    </main>
  );
}