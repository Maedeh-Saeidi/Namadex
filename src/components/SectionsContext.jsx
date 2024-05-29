import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SectionsContext = createContext();

export const SectionsProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSections = async () => {
    try {
      const response = await axios.get("https://api.namadex.ir/api/v1/section");
      const sortedSections = response.data.data
        .map((section) => ({
          ...section,
          posts: section.posts.sort((a, b) => a.id - b.id),
        }))
        .sort((a, b) => a.id - b.id);
      setSections(sortedSections);
      setIsLoading(true);
    } catch (error) {
      console.error("Error fetching sections data:", error);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <SectionsContext.Provider value={{ sections, isLoading }}>
      {children}
    </SectionsContext.Provider>
  );
};
