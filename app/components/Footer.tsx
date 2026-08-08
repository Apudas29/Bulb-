export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Apu Das</h2>
            <p className="mt-3 text-gray-400">
              B.Tech CSE Student, Java Developer and Next.js Learner.
              Passionate about building modern web applications and
              interactive projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/learn" className="hover:text-white">
                  Learn
                </a>
              </li>

              <li>
                <a href="/bulb" className="hover:text-white">
                  💡 Bulb
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Connect
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a
                href="https://github.com/Apudas29"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:your@email.com"
                className="hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Apu Das. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}