export function imageCors(image) {
  let imageURL = image
  let imageDescription = "imag";

  let downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  // downloadedImg.addEventListener("load", imageReceived, false);
  // downloadedImg.alt = imageDescription;
  downloadedImg = imageURL;

  return downloadedImg
}