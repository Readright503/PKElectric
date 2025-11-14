import { Phone, Mail, Zap, Home, Building2, Wrench, Star } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-gray-900">P. K. Electrical</h1>
          </div>
          <a href="tel:720-327-4582" className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-600">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">(720) 327-4582</span>
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">P. K. Electrical Services</h2>
          <p className="text-2xl sm:text-3xl mb-10 text-yellow-100">Reliable Electrical Services in Arvada</p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-slate-900 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About Us</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Trusted local electrician with years of experience serving homes and businesses in Arvada and surrounding areas.
                Licensed, insured, and committed to quality workmanship on every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on punctuality, professionalism, and transparent pricing. Your safety and satisfaction are our top priorities.
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg h-80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg')] bg-cover bg-center opacity-30"></div>
              <Zap className="relative w-32 h-32 text-yellow-500 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-6">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Residential Electrical Work</h4>
              <p className="text-gray-600">
                Complete home electrical services including wiring, panel upgrades, lighting installation, and safety inspections.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-6">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Commercial Installations</h4>
              <p className="text-gray-600">
                Professional electrical solutions for businesses, including new construction, renovations, and ongoing maintenance.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Repairs & Upgrades</h4>
              <p className="text-gray-600">
                Fast, reliable repairs and system upgrades to keep your property safe and up to code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Paul was wonderful to work with. He finished work on time and was very fair! I would highly recommend him for all electrical work."
              </p>
              <p className="font-semibold text-gray-900">- Kelly Khalifi</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Paul is a hands on, quality electrician. Honest and quick to finish your job. I'll call him every time!!"
              </p>
              <p className="font-semibold text-gray-900">- Tierrinney Strickland</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing service! Very prompt and professional. Love the education the company has for the customers. Got the job done fast and cleaned up after them selves. Definitely recommend them for any projects with electrical needs"
              </p>
              <p className="font-semibold text-gray-900">- Haven Kreitler</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:720-327-4582" className="text-lg font-semibold text-yellow-600 hover:text-yellow-700">
                      (720) 327-4582
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:p.kqualityelectricalservices@gmail.com" className="text-lg font-semibold text-yellow-600 hover:text-yellow-700 break-all">
                      p.kqualityelectricalservices@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h5 className="text-xl font-bold">Paul Keller Electrical</h5>
              </div>
              <p className="text-gray-400">Licensed & Insured Electrician</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Location</h5>
              <p className="text-gray-400">
                Serving Arvada, CO<br />
                and surrounding areas
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">
                <a href="tel:720-327-4582" className="hover:text-yellow-400 transition-colors">
                  (720) 327-4582
                </a>
                <br />
                <a href="mailto:p.kqualityelectricalservices@gmail.com" className="hover:text-yellow-400 transition-colors break-all">
                  p.kqualityelectricalservices@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Paul Keller Electrical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
