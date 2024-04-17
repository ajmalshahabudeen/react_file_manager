"use client";
// Your Next.js component file

import { useState, useEffect } from "react";

export function YourComponent() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch(
          `/api/listFiles?folder=Downloads`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ folder: "/media/ajmal/SanDisk" }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          console.error("Failed to fetch files");
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    }

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Files in Folder:</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
