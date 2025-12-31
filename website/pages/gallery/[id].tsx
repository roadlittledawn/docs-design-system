import { Heading, Button } from '@docs-design-system/ui';
import { GalleryData, GallerySite } from '@/types/gallery';
import galleryData from '../../data/gallery.json';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function GalleryItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const data = galleryData as GalleryData;
  const site = data.sites.find(s => s.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!site || !id) {
    return <div>Loading...</div>;
  }

  const nextImage = () => {
    if (site.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % site.images.length);
    }
  };

  const prevImage = () => {
    if (site.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + site.images.length) % site.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/gallery" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <Heading level={1} className="text-3xl">
            {site.name}
          </Heading>
          <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {site.category.replace('-', ' ')}
          </span>
        </div>
        
        {/* External Links */}
        <div className="flex gap-3">
          {site.links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              {link.label}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      {site.images.length > 0 && (
        <div className="mb-8">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <div className="relative aspect-[16/10]">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {/* Actual image would go here */}
              {/* <img src={site.images[currentImageIndex].url} alt={site.images[currentImageIndex].caption} className="w-full h-full object-cover" /> */}
              
              {/* Navigation buttons */}
              {site.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            {/* Caption */}
            <div className="px-4 py-3 bg-white border-t">
              <span className="text-gray-600">
                {site.images[currentImageIndex].caption}
              </span>
            </div>
          </div>

          {/* Image dots indicator */}
          {site.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {site.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <div className="prose max-w-none mb-8">
        <Heading level={2} className="text-xl font-semibold mb-3">
          Overview
        </Heading>
        <p className="text-gray-700 leading-relaxed">
          {site.description}
        </p>
      </div>

      {/* Highlights */}
      {site.highlights && site.highlights.length > 0 && (
        <div className="mb-8">
          <Heading level={2} className="text-xl font-semibold mb-3">
            What Makes It Great
          </Heading>
          <div className="grid gap-3 md:grid-cols-2">
            {site.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-green-500 mt-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-gray-700">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visit Site Button */}
      <div className="border-t pt-8">
        <Link
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
            Visit {site.name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </Link>
      </div>
    </>
  );
}
