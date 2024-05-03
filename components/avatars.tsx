import React from "react";
import { Avatar as NextUIAvatar } from "@nextui-org/avatar";

interface AvatarProps {
  src?: string; // src sekarang opsional, karena kita akan menentukannya berdasarkan size
  className?: string;
  size: "sm" | "md" | "lg"; // Menggunakan union type untuk membatasi nilai yang diterima oleh properti size
}

const Avatar: React.FC<AvatarProps> = ({ src, className, size }) => {
  const imageSources: { [key: string]: string } = {
    sm: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    md: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    lg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  };

  // Menggunakan src jika ada, jika tidak, gunakan URL gambar sesuai dengan size
  const imageUrl = src || imageSources[size];

  return <NextUIAvatar src={imageUrl} className={className} size={size} />;
};

export default function Avatars() {
  return (
    <div className="flex gap-4 items-center">
      {/* Panggil komponen Avatar dengan properti src yang mengacu pada URL gambar */}
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </div>
  );
}
