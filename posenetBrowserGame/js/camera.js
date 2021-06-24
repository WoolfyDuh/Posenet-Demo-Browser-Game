export async function loadVideo(screenWidth, screenHeight) {
    const video = await setupCamera(screenWidth, screenHeight);
    video.play();
    return video;
  }
  async function setupCamera(screenWidth, screenHeight) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
          width: screenWidth,
          height: screenHeight
        }
      });
      video.width = screenWidth;
      video.height = screenHeight;
      video.srcObject = stream;
      return new Promise(resolve => {
        video.onloadedmetadata = () => {
          resolve(video);
        };
      });
    } else {
      const errorMessage = "This browser does not support video capture, or this device does not have a camera";
      alert(errorMessage);
      return Promise.reject(errorMessage);
    }
  }