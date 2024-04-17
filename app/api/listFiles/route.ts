// pages/api/[folder].js

import fs from "fs";
import path from "path";

export async function POST(request: Request) {

  const { searchParams } = new URL(request.url);
  const { folder } = Object.fromEntries(searchParams);

  console.log(searchParams);
  console.log(folder);

  const folderPath = path.join("/media/ajmal/SanDisk/", folder, "/videos/"); // Assuming the folder is in the home directory

  try {
    const files = fs.readdirSync(folderPath);
    return Response.json({ files });
  } catch (error) {
    return Response.json({ error: "Failed to read directory" });
  }
}
