import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';
import { ArrowLeft, Check } from 'lucide-react';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Kolkata Industrial Company`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                {product.category}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:opacity-75 transition-opacity font-medium mb-8"
            >
              <ArrowLeft size={20} />
              Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Product Image */}
              <div className="relative h-96 md:h-full min-h-96 bg-secondary rounded-lg overflow-hidden border border-border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className=" object-center"
                  priority
                />
              </div>

              {/* Product Information */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.specifications && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                    <div className="border border-border rounded-lg overflow-hidden">
                      {product.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between px-4 py-3 border-b last:border-none"
                        >
                          <span className="font-medium text-muted-foreground">
                            {spec.label}
                          </span>
                          <span className="text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-secondary rounded-lg p-8 border border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to get this product?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      Request Quote
                    </Link>
                    <a
                      href="tel:8777619134"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                    >
                      Call Us
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Need More Information?</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href="tel:8777619134" className="text-primary hover:opacity-75 transition-opacity">
                        8777619134
                      </a>
                      {' / '}
                      <a href="tel:8274057437" className="text-primary hover:opacity-75 transition-opacity">
                        8274057437
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:kolindustrial8@gmail.com" className="text-primary hover:opacity-75 transition-opacity">
                        kolindustrial8@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/products/${relatedProduct.id}`}
                      className="group bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProduct.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
