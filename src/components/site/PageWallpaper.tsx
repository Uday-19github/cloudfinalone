import type { CSSProperties, ReactNode } from "react";
import { wallpaperImageSet } from "@/lib/wallpaper";
import { cn } from "@/lib/utils";

type PageWallpaperProps = {
  src: string;
  className?: string;
  overlay?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
};

export function PageWallpaper({ src, className, overlay, children, style }: PageWallpaperProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-background", className)}
      style={{
        backgroundImage: wallpaperImageSet(src),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
    >
      {overlay}
      {children}
    </section>
  );
}
