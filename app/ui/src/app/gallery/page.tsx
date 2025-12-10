import { Heading } from "@docs-design-system/ui";
import { GalleryData } from "@/types/gallery";
import galleryData from "../../../data/gallery.json";
import Link from "next/link";

export default function GalleryPage() {
  const data = galleryData as GalleryData;

  return (
    <>
      <div className="mb-12">
        <Heading level={1} className="mb-4">
          Documentation Gallery
        </Heading>
        <p className="text-xl text-gray-600 max-w-3xl">
          Explore exemplary documentation sites that set the standard for
          clarity, usability, and design. Click on any site to see detailed
          analysis and screenshots.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.sites.map((site) => (
          <Link
            key={site.id}
            href={`/gallery/${site.id}`}
            className="group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all group-hover:shadow-md">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {/* Thumbnail image will go here when available */}
                {site.images[0] && (
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white">
                    {site.images.length}{" "}
                    {site.images.length === 1 ? "image" : "images"}
                  </div>
                )}
              </div>
              <div>
                <Heading
                  level={4}
                  className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {site.name}
                </Heading>
                <span className="text-xs text-gray-500 capitalize">
                  {site.category.replace("-", " ")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-6 bg-gray-50 rounded-lg">
        <Heading level={4} className="mb-2">
          Contributing to the Gallery
        </Heading>
        <p className="text-gray-600">
          Have a great documentation site to showcase? Add it to the gallery by
          editing the{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            app/ui/data/gallery.json
          </code>{" "}
          file and adding screenshots to the{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            app/ui/public/gallery/
          </code>{" "}
          directory.
        </p>
      </div>
    </>
  );
}
