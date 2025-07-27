import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), "public/images");
  const videosDir = path.join(process.cwd(), "public/videos");

  const images = fs
    .readdirSync(imagesDir)
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i));

  const videos = fs
    .readdirSync(videosDir)
    .filter((file) => file.match(/\.(mp4|webm)$/i));

  res.status(200).json({
    images: images.map((file) => `/images/${file}`),
    videos: videos.map((file) => `/videos/${file}`),
  });
}
