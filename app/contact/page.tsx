import { Suspense } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactPageContent() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-background to-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products? Our expert team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="p-8 bg-secondary rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Phone</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <a
                      href="tel:8777619134"
                      className="text-primary hover:opacity-75 transition-opacity font-semibold"
                    >
                      8777619134
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:8274057437"
                      className="text-primary hover:opacity-75 transition-opacity font-semibold"
                    >
                      8274057437
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-8 bg-secondary rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Email</h3>
                <a
                  href="mailto:kolindustrial8@gmail.com"
                  className="text-primary hover:opacity-75 transition-opacity font-semibold"
                >
                  kolindustrial8@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="p-8 bg-secondary rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Address</h3>
                <p className="text-muted-foreground">
                  Santoshpur Station Road<br />
                  Kolkata – 700141, India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="bg-secondary rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Product Information</h4>
                        <p className="text-sm text-muted-foreground">
                          Get detailed specifications and features of our equipment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Custom Quotes</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive personalized pricing based on your specific needs
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Technical Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Expert assistance with equipment selection and installation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Bulk Orders</h4>
                        <p className="text-sm text-muted-foreground">
                          Special pricing available for large quantity purchases
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock size={24} />
                    <div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <p className="text-sm opacity-90 mt-2">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Quick access:</p>
                  <Link
                    href="/products"
                    className="block p-3 bg-secondary border border-border rounded-lg text-foreground hover:border-primary transition-colors font-medium"
                  >
                    Browse All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-background" />}>
      <ContactPageContent />
    </Suspense>
  );
}
