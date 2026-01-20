import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[60vh] flex items-center justify-center bg-background py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                <Home size={20} />
                Go Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                <ArrowLeft size={20} />
                Browse Products
              </Link>
            </div>

            <div className="mt-12 p-8 bg-secondary rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                If you're looking for something specific, feel free to reach out to our team.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary hover:opacity-75 transition-opacity font-semibold"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
