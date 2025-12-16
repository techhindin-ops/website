"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { company, contact, footer } = siteData;

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm">{company.shortName}</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-teal to-primary-purple bg-clip-text text-transparent">{company.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {company.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm group">
                <Mail className="h-5 w-5 text-primary-teal" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-teal transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm group">
                <Phone className="h-5 w-5 text-primary-teal" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary-teal transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary-teal" />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Product</h3>
            <ul className="space-y-3">
              {footer.links.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-teal transition-colors text-sm"
                  >
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-teal transition-colors text-sm"
                  >
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-teal transition-colors text-sm"
                  >
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
              © {currentYear} <span className="text-primary-teal">{company.name}</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footer.links.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-primary-teal transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

