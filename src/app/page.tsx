
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          MyWebsite
        </h1>

        <div className="hidden gap-6 sm:flex">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Welcome to my website
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Build Something
          <span className="block text-blue-600">
            Amazing Today
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          This is a simple Next.js layout using Tailwind CSS.
          Edit the code, preview your changes, and commit your work.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-3">
        {[
          {
            title: "Fast",
            description: "Build fast and responsive web pages.",
            icon: "⚡",
          },
          {
            title: "Modern",
            description: "Use clean design and modern styling.",
            icon: "✨",
          },
          {
            title: "Responsive",
            description: "Works on mobile, tablet, and desktop.",
            icon: "📱",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold">
              {feature.title}
            </h3>
            <p className="mt-2 leading-7 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-6 text-center text-sm text-gray-500">
        © 2026 MyWebsite. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
