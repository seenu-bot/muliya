"use client";

import * as React from "react";

export default function GalleryPage() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="w-full h-full bg-white">
      <div className="relative w-full h-full">
        {!loaded ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-sm text-gray-600">Loading gallery…</div>
          </div>
        ) : null}

        <iframe
          src="https://gallery.muliya.in/"
          title="Muliya Gallery"
          className="absolute inset-0 w-full h-full"
          onLoad={() => setLoaded(true)}
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
