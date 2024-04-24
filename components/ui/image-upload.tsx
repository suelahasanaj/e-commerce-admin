"use client";

import { useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (name: string) => void;
  onRemove: (name: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div>Image Upload</div>;
};

export default ImageUpload;
