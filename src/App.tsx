import { Phone, Mail, Zap, Home, Building2, Wrench, Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';

function App() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      const scrollLeft = galleryRef.current.scrollLeft;
      galleryRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkblalo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-gray-900">P. K. Quality Electrical</h1>
          </div>
          <a href="tel:720-327-4582" className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-600">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">(720) 327-4582</span>
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/L4zQD30s/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-1739.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <div>P. K. Quality</div>
            <div className="mt-2">Electrical Services</div>
          </h2>
          <p className="text-2xl sm:text-3xl mb-10 text-yellow-100">Reliable Electrical Services in the Denver Metro & surrounding areas</p>
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
                Trusted local electrician with 20 plus years of experience serving homes and businesses in Denver and surrounding areas.
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

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Work</h3>
          <div className="relative group">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 z-20 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-x-auto pb-4 scrollbar-hide" ref={galleryRef}>
              <div className="flex gap-6 min-w-min">
                {[
                  'https://i.postimg.cc/L4zQD30s/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-1739.jpg',
                  'https://i.postimg.cc/B6XRBJSP/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-1177.jpg',
                  'https://i.postimg.cc/ryRvdyZv/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-774.jpg',
                  'https://i.postimg.cc/Prh2ttGT/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-1191.jpg',
                  'https://i.postimg.cc/3xfBCmdb/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-3174.jpg',
                  'https://i.postimg.cc/4xyvdyWC/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-2605.jpg',
                  'https://i.postimg.cc/PrrY3NsC/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-3166.jpg',
                  'https://i.postimg.cc/63f4zxMh/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-3173.jpg',
                  'https://i.postimg.cc/hPfhQmRK/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-3168.jpg',
                  'https://i.postimg.cc/C1rSwv1b/0981dd85-a034-479f-ab8c-2aac2d97a635-1-all-3180.jpg',
                  'https://i.ibb.co/G3VX9HPL/image.jpg',
                ].map((imageUrl, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-80 h-60 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={imageUrl}
                      alt={`Electrical work example ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 z-20 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Message Sent!</h4>
                  <p className="text-gray-600 text-center">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
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
                <h5 className="text-xl font-bold">P. K. Electrical</h5>
              </div>
              <p className="text-gray-400">Licensed & Insured Electrician</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Location</h5>
              <p className="text-gray-400">
                Serving Denver Metro<br />
                and surrounding areas
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <div className="space-y-3 text-gray-400">
                <div>
                  <a href="tel:720-327-4582" className="hover:text-yellow-400 transition-colors">
                    (720) 327-4582
                  </a>
                </div>
                <div>
                  <a href="mailto:p.kqualityelectricalservices@gmail.com" className="hover:text-yellow-400 transition-colors block text-sm">
                    p.kqualityelectricalservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} P. K. Electrical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
