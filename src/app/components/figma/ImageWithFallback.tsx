import React, { useState } from 'react'

const DEFAULT_FALLBACK_SRC = '/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png'

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, fallbackSrc, loading, decoding, ...rest } = props
  const resolvedSrc = src || fallbackSrc || DEFAULT_FALLBACK_SRC

  return didError ? (
    <img
      src={fallbackSrc || DEFAULT_FALLBACK_SRC}
      alt={alt}
      className={className}
      style={style}
      loading={loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      {...rest}
      data-original-url={src}
    />
  ) : (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      {...rest}
      onError={handleError}
    />
  )
}
