import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo.')
    setFormData({
      fullName: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* BEGIN: MainHeader */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-indigo-600">Practice.</span>
          </div>
          {/* Mobile Back/Home Link */}
          <a className="text-sm font-medium text-gray-500 hover:text-indigo-600" href="#">Back</a>
        </nav>
      </header>
      {/* END: MainHeader */}

      <main className="pb-12">
        {/* BEGIN: ContactSection */}
        <section className="max-w-md mx-auto px-4 pt-12" data-purpose="contact-us-container">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in touch</h1>
            <p className="mt-4 text-lg text-gray-500">
              We'd love to hear from you. Please fill out this form and we will contact you shortly.
            </p>
          </header>

          {/* BEGIN: ContactForm */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100" data-purpose="form-wrapper">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">Name</label>
                <div className="mt-1">
                  <input
                    autoComplete="name"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    id="full-name"
                    name="fullName"
                    placeholder="Jane Doe"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <div className="mt-1">
                  <textarea
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors cursor-pointer"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* END: ContactForm */}

          {/* BEGIN: SocialLinks */}
          <div className="mt-12 text-center" data-purpose="social-media-links">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow us on social media</h2>
            <div className="mt-6 flex justify-center space-x-8">
              {/* Twitter/X */}
              <a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#" title="Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#" title="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.054 2.1.232 2.872.533a5.22 5.22 0 011.871 1.218 5.22 5.22 0 011.218 1.871c.301.772.479 1.732.533 2.872.044.926.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.054 1.14-.232 2.1-.533 2.872a5.22 5.22 0 01-1.218 1.871 5.22 5.22 0 01-1.871 1.218c-.772.301-1.732.479-2.872.533-.926.044-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.054-2.1-.232-2.872-.533a5.22 5.22 0 01-1.871-1.218 5.22 5.22 0 01-1.218-1.871c-.301-.772-.479-1.732-.533-2.872-.044-.926-.054-1.28-.054-3.71s.01-2.784.054-3.71c.054-1.14.232-2.1.533-2.872a5.22 5.22 0 011.218-1.871A5.22 5.22 0 015.74 2.587c.772-.301 1.732-.479 2.872-.533.926-.044 1.28-.054 3.71-.054zM12 6.865A5.135 5.135 0 1012 17.135 5.135 5.135 0 0012 6.865zm0 1.492a3.643 3.643 0 110 7.286 3.643 3.643 0 010-7.286zm6.487.834a1.057 1.057 0 11-2.114 0 1.057 1.057 0 012.114 0z" fillRule="evenodd"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* END: SocialLinks */}
        </section>
        {/* END: ContactSection */}
      </main>

      {/* BEGIN: Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400">© 2023 Practice Inc. All rights reserved.</p>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  )
}

export default App
