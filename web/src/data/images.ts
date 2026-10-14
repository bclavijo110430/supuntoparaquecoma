import type { ImageMetadata } from "astro";

const imagenes = import.meta.glob<ImageMetadata>("../assets/menu/*.png", {
  eager: true,
  import: "default",
});

export function getFoto(nombre?: string): ImageMetadata | undefined {
  if (!nombre) return undefined;
  return imagenes[`../assets/menu/${nombre}`];
}
