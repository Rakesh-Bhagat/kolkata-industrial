import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const categories = [
  { name: 'Hoists & Lifts', count: '5+' },
  { name: 'Winches', count: '4+' },
  { name: 'Ropes & Slings', count: '10+' },
  { name: 'Material Handling', count: '6+' },
  { name: 'Safety Equipment', count: '6+' },
  { name: 'Hardware & Fittings', count: '12+' },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All products meet international safety and quality standards with certified testing.',
  },
  {
    icon: Zap,
    title: 'Expert Support',
    description: 'Dedicated team ready to help with product selection, technical guidance, and after-sales service.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times with reliable logistics to get equipment to your site efficiently.',
  },
  {
    icon: Shield,
    title: 'Competitive Pricing',
    description: 'Best value for money with transparent pricing and flexible payment options available.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Industrial Lifting & Material Handling Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Professional equipment supplier providing comprehensive solutions for material handling, lifting, and industrial operations across India since years of trusted service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    View Products <ArrowRight size={20} />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="/products/electric-hoist.jpg"
                  alt="Industrial Equipment"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96">
                <Image
                  src="/products/chain-pulley-block.jpg"
                  alt="About Kolkata Industrial"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Kolkata Industrial Company
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We are a trusted supplier of industrial lifting and material handling equipment serving businesses across India. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With years of experience and an extensive product range, we provide complete solutions for warehousing, manufacturing, construction, and industrial operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">
                      ✓
                    </div>
                    <p className="text-foreground">Wide range of 50+ industrial products</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">
                      ✓
                    </div>
                    <p className="text-foreground">Quality-certified equipment from trusted manufacturers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">
                      ✓
                    </div>
                    <p className="text-foreground">Expert technical support and consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of industrial lifting and material handling solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href="/products"
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary font-bold text-2xl">{category.count} Products</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver excellence through quality, expertise, and customer commitment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-secondary rounded-lg border border-border hover:border-primary transition-colors duration-300"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Our team is ready to help with product information and quotes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  📞
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:8777619134" className="hover:text-primary transition-colors">
                    8777619134
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:8274057437" className="hover:text-primary transition-colors">
                    8274057437
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  ✉️
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:kolindustrial8@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  kolindustrial8@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  📍
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  Santoshpur Station Road<br />
                  Kolkata – 700141, India
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Request a Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
