interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: OptimizedImageProps) {
  const baseSrc = src.replace(/\.[^.]*$/, '')

  return (
    <picture>
      {/* AVIF (melhor compressão) */}
      <source
        srcSet={`${baseSrc}.avif`}
        type="image/avif"
      />
      {/* WebP (bom suporte) */}
      <source
        srcSet={`${baseSrc}.webp`}
        type="image/webp"
      />
      {/* Fallback PNG/JPG */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}
