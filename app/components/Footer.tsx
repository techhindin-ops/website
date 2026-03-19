"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { company, contact, footer } = siteData;

  return (
    <>
      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white" />
        <span className="font-semibold text-sm hidden sm:block">Chat on WhatsApp</span>
      </a>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{company.shortName}</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                  {company.name}
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">{company.tagline}</p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm group">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <a href={`mailto:${contact.email}`} className="hover:text-teal-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <a href={`tel:${contact.phone}`} className="hover:text-teal-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  <span>{contact.address}</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href={contact.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-blue-500 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={contact.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-sky-500 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-sky-400 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-700 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-green-600 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-green-500 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                {footer.links.product.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {footer.links.company.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                {footer.links.resources.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-teal-400">{company.name}</span>. All rights reserved.
                Made with ❤️ for Indian Solar Industry.
              </p>
              <div className="flex space-x-6">
                {footer.links.legal.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
