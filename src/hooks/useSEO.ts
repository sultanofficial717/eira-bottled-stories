import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
}

export const useSEO = (config: SEOConfig): void => {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", config.description);
  }, [config.title, config.description]);
};
