import { useState, useEffect } from "react";

export default function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lazy-image-wrapper">
      {!loaded && <div className="loader">Loading...</div>}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
