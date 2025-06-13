import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer1() {
  return (
    <footer className="w-full bg-dark-200 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">VX Software Solutions</h3>
            <p className="text-sm text-light-400">
              End-to-end medical coding and billing services tailored to optimize cash flow, reduce claim denials, and
              simplify compliance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-light-500 hover:text-brand-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-light-500 hover:text-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-light-500 hover:text-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-light-500 hover:text-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-light-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-light-100">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  href="/support#knowledge-base"
                  className="text-sm text-light-400 hover:text-brand-blue transition-colors"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/support#submit-ticket"
                  className="text-sm text-light-400 hover:text-brand-blue transition-colors"
                >
                  Submit a Ticket
                </Link>
              </li>
              <li>
                <Link href="/services/v-healtcare/contact" className="text-sm text-light-400 hover:text-brand-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-light-100">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-light-400">
                <span className="font-medium text-light-300">Email:</span> support@vxsoftwaresolutions.com
              </li>
              <li className="text-sm text-light-400">
                <span className="font-medium text-light-300">Phone:</span> +91-XXXXXXXXXX
              </li>
              <li className="text-sm text-light-400">
                <span className="font-medium text-light-300">Office:</span> Hyderabad, Telangana, India
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-dark-100 pt-6">
          <p className="text-center text-sm text-light-500">
            © {new Date().getFullYear()} VX Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
