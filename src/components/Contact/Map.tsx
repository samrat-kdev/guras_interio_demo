import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  // When the iframe loads, set loading state to false
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <div className="relative text-right w-full h-[495px]">
        <div className="overflow-hidden bg-none w-full h-full">
          {/* Show Skeleton while loading */}
          {isLoading && <Skeleton className="w-full h-full" />}

          {/* The actual iframe */}
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8223425659229!2d85.32837677857171!3d27.681527176647055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19003bf59091%3A0x222209e175c9419e!2sCivil%20Solution%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1737706623076!5m2!1sen!2snp"
            allowFullScreen
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
