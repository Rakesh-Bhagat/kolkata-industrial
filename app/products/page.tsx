'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';
import { Search, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const categories = [
  'All',
  'Hoists & Lifts',
  'Winches',
  'Ropes & Slings',
  'Material Handling',
  'Safety Equipment',
  'Hardware & Fittings',
  'Trolleys & Carriers',
  'Clamps & Hardware',
  'Cable Equipment',
  'Jacks & Supports',
  'Rollers & Wheels',
  'Scaffolding',
  'Safety & Traffic',
  'Brakes & Safety',
  'Electrical Equipment',
  'Control Equipment',
  'Measuring Equipment',
  'Maintenance & Supplies',
  'Tools',
];

const Loading = () => null;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-background to-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Product Catalog
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete range of 50+ industrial lifting and material handling solutions
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground border border-border hover:border-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-0 right-0 m-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View Details
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center text-muted-foreground">
              <p>
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export const dynamic = 'force-dynamic';

// export function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category.toLowerCase(),
//   }));
// }
