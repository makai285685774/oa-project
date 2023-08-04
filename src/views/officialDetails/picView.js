
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

function previewImage(url,degree) {
    const img = document.createElement('img')
    img.src = url
    const viewer = new Viewer(img, {
      title: 0,
      navbar: 0,
      
      toolbar: {
        zoomIn: 1,
        zoomOut: 1,
        oneToOne: 1,
        reset: 1,
        rotateLeft: 1,
        rotateRight: 1,
        flipHorizontal: 1,
        flipVertical: 1,
      },
      viewed() {
        if (degree) {
          this.viewer.zoomTo(0.8).rotateTo(degree);
        }
      }
    })
    img.onload = function() {
      viewer.show()
      
    }

}

export default previewImage