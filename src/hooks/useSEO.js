import { useEffect } from "react";

/**
 * Custom hook to dynamically update page Title, Meta Description, Canonical URL, and OpenGraph tags
 *
 * @param {Object} options
 * @param {string} options.title - The page title
 * @param {string} [options.description] - The meta description
 * @param {string} [options.canonical] - The canonical path (e.g. "/about")
 */
export default function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Update or create Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);

      // OpenGraph Description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }

    // 3. Update OpenGraph Title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", title);
      }
    }

    // 4. Update Canonical URL & Social URLs
    if (canonical) {
      const formattedPath = canonical === "/" ? "" : (canonical.startsWith("/") ? canonical : `/${canonical}`);
      const fullUrl = `https://saraspa.in${formattedPath || "/"}`;

      // Update <link rel="canonical">
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", fullUrl);

      // Update OpenGraph URL
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", fullUrl);
      }

      // Update Twitter URL
      let twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute("content", fullUrl);
      }
    }
  }, [title, description, canonical]);
}
