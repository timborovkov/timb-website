import {
  renderShareImage,
  shareImageAlt,
  shareImageContentType,
  shareImageSize,
} from "./share-image";

export const alt = shareImageAlt;
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default async function Image() {
  return renderShareImage();
}
