export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_API_KEY!,
  apiSecret: process.env.CLOUDINARY_API_SECRET!,
};

export function getOptimizedImageUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  }
): string {
  const { width = 800, height, quality = 80, format = 'webp' } = options || {};
  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    `w_${width}`,
    height ? `h_${height}` : '',
    'c_fill',
  ]
    .filter(Boolean)
    .join(',');
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transforms}/${publicId}`;
}

export function uploadToCloudinary(
  file: File,
  folder = 'ugramm-fitness'
): Promise<{ url: string; publicId: string }> {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ugramm_fitness');
    formData.append('folder', folder);

    fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      { method: 'POST', body: formData }
    )
      .then((res) => res.json())
      .then((data) => resolve({ url: data.secure_url, publicId: data.public_id }))
      .catch(reject);
  });
}
