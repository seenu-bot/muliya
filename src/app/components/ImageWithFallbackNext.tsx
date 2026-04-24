"use client";

import { useMemo, useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src?: string | "" | null;
  fallbackSrc?: string;
  fill?: boolean;
};

const DEFAULT_FALLBACK_SRC = "/images/Gemini_Generated_Image_hhlctbhhlctbhhlc.png";

export function ImageWithFallbackNext({ src, fallbackSrc, alt, ...rest }: Props) {
  const [didError, setDidError] = useState(false);

  const resolvedSrc = useMemo(() => {
    const candidate = src || fallbackSrc || DEFAULT_FALLBACK_SRC;
    return candidate;
  }, [src, fallbackSrc]);

  const finalSrc = didError ? fallbackSrc || DEFAULT_FALLBACK_SRC : resolvedSrc;

  const {
    fill,
    style,
    className,
    onError,
    width,
    height,
    ...imgProps
  } = rest;

  return (
    <img
      {...imgProps}
      src={finalSrc}
      alt={alt}
      className={className}
      width={fill ? undefined : (width as number | undefined)}
      height={fill ? undefined : (height as number | undefined)}
      style={
        fill
          ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              ...style,
            }
          : style
      }
      onError={(e) => {
        setDidError(true);
        onError?.(e);
      }}
    />
  );
}
