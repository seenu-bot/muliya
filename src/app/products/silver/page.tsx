'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SilverRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new silver-jewellery-banglore URL
    router.replace('/products/silver-jewellery-banglore');
  }, [router]);

  // Show a loading message while redirecting
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E92247] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Silver Jewellery...</p>
      </div>
    </div>
  );
}
