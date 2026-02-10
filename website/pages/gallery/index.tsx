import { Heading } from "@roadlittledawn/docs-design-system/react";
import { GalleryData } from "@/types/gallery";
import galleryData from "../../data/gallery.json";
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

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
        {data.sites.map((site) => (
          <Link
            key={site.id}
            href={`/gallery/${site.id}`}
            className="group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all group-hover:shadow-md min-w-0">
                {site.images[0] && (
                  <>
                    <img
                      src={site.images[0].url}
                      alt={site.name}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white">
                      {site.images.length}{" "}
                      {site.images.length === 1 ? "image" : "images"}
                    </div>
                  </>
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
    </>
  );
}
