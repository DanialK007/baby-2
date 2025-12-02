"use client";
import { useEffect, useState } from "react";

export default function RecentUploads({ limit = 30 }: { limit?: number }) {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch previous images from Cloudinary folder on mount
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("/api/get-photos");
        const data = await res.json();
        if (data.urls) setUploadedUrls(data.urls);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch previous photos", err);
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (loading || !uploadedUrls.length)
    return (
      <div className="grid grid-cols-3 gap-2 p-2 animate-pulse">
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300 col-span-2 row-span-2"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300 col-span-2 row-span-2"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
        <div className="rounded-xl md:rounded-3xl relative group aspect-4/3 bg-rose-300"></div>
      </div>
    );

  const generateBigIndexes = (count: number) => {
    const big = [0];
    const jumps = [7, 5];
    for (let n = 1; n < count; n++) {
      big.push(big[n - 1] + jumps[(n - 1) % 2]);
    }
    return big;
  };

  const patternBig = generateBigIndexes(uploadedUrls.length);

  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {[...uploadedUrls]
        .slice(0, limit)
        .sort(() => Math.random() - 0.5)
        .map((url, i) => {
          const isBig = patternBig.includes(i);

          return url ? (
            <div
              key={i}
              className={
                isBig
                  ? "rounded-xl md:rounded-3xl relative group overflow-hidden col-span-2 row-span-2"
                  : "rounded-xl md:rounded-3xl relative group overflow-hidden"
              }
            >
              <div className="absolute inset-0 z-10 bg-rose-400/30 group-hover:opacity-0 duration-1000"></div>
              <img
                src={url.replace("/upload/", "/upload/q_auto:low,f_auto/")}
                alt={`Uploaded ${i + 1}`}
                className="size-full object-cover object-bottom group-hover:scale-110 duration-1000 ease-out saturate-0 group-hover:saturate-100"
              />
            </div>
          ) : null;
        })}
    </div>
  );
}
