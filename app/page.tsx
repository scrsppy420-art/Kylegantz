import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">KGL</h2>
          <div className="space-x-6">
            <Link href="#services" className="text-slate-300 hover:text-white transition">Services</Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition">About</Link>
            <Link href="#contact" className="text-slate-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">Kyle Gantz LLC</h1>
          <p className="text-xl text-slate-300 mb-8">
            Professional software design, development, and digital solutions for modern businesses.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', description: 'Modern, responsive websites built with cutting-edge technologies' },
              { title: 'Software Design', description: 'Clean, scalable architecture and user-centric design solutions' },
              { title: 'Freelance Solutions', description: 'Flexible, project-based work tailored to your business needs' }
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2024 Kyle Gantz LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
