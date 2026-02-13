import {
  Heading,
  Button,
  Card,
  CardGrid,
} from "@roadlittledawn/docs-design-system/react";
import { GalleryData } from "@/types/gallery";
import galleryData from "../../data/gallery.json";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageCarousel from "@/components/ImageCarousel";

export default function GalleryItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const data = galleryData as GalleryData;
  const site = data.sites.find((s) => s.id === id);

  if (!site || !id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/gallery"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
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
          <span className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
            {site.category.replace("-", " ")}
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
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
            >
              {link.label}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <ImageCarousel images={site.images} />

      {/* Description */}
      <div className="prose max-w-none mb-8">
        <Heading level={2} className="text-xl font-semibold mb-3">
          Overview
        </Heading>
        <p>{site.description}</p>
      </div>

      {/* Highlights */}
      {site.highlights && site.highlights.length > 0 && (
        <div className="mb-8">
          <Heading level={2} className="text-xl font-semibold mb-3">
            What Makes It Great
          </Heading>
          <CardGrid columns={2}>
            {site.highlights.map((highlight, index) => (
              <Card key={index}>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 dark:text-green-400 mt-0.5">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p>{highlight}</p>
                </div>
              </Card>
            ))}
          </CardGrid>
        </div>
      )}
    </>
  );
}
