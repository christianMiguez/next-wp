import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLocalImage = (src: string) => {
  const imageArray = src.split("/");

  const fileName = imageArray[imageArray.length - 1];
  const path = imageArray.slice(4, imageArray.length - 1).join("/");

  return `/images/${path}/${fileName}`;
};
