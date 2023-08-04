// 导出 pdf 封装方法
// by zhangxinxu(.com)
// 访问 https://www.zhangxinxu.com/wordpress/?p=10854 了解更新信息
export async function exportPdf (element, filename = '未命名', callback = () => {}) {
    if (!element) {
      callback();
      return;
    }
  
    // 尺寸的确定
    const originWidth = element.offsetWidth || 700;
  
    // 创建一个容器，用于克隆元素
    const container = document.createElement('div');
    // 16px是为了生成的PDF有安全边距
    container.style.cssText = `position:fixed;left: ${-2 * originWidth}px; top:0;padding:16px;width:${originWidth}px;box-sizing:content-box;`;
    // 插入到body中
    document.body.appendChild(container);
    // 克隆元素
    container.appendChild(element.cloneNode(true));
  
    // 依赖的库
    var jsPDF;
  
    if (typeof html2canvas == 'undefined') {
      html2canvas = await import('html2canvas').then(module => module.default);
    }
  
    if (typeof jspdf == 'undefined') {
      jsPDF = await import('jspdf').then(module => module.jsPDF);
    } else {
      jsPDF = jspdf.jsPDF;
    }
  
    // 为了保证显示质量，2倍PDF尺寸
    const scale = 2;
    const width = originWidth + 32;
  
    const PDF_WIDTH = width * scale;
    const PDF_HEIGHT = width * 1.414 * scale;
  
    // 渲染方法
    const render = function () {
      // 渲染为图片并下载
      html2canvas(container, {
        scale: scale
      }).then(function(canvas) {
        const contentWidth = canvas.width;
        const contentHeight = canvas.height;
  
        // 一页pdf显示html页面生成的canvas高度
        const pageHeight = contentWidth / PDF_WIDTH * PDF_HEIGHT;
  
        // canvas图像在画布上的尺寸
        const imgWidth = PDF_WIDTH;
        const imgHeight = PDF_WIDTH / contentWidth * contentHeight;
  
        let leftHeight = contentHeight;
        let position = 0;
  
        const doc = new jsPDF('p', 'px', [PDF_WIDTH, PDF_HEIGHT]);
  
        // 不足一页
        if (leftHeight < pageHeight) {
          doc.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight);
        } else {
          // 多页
          while (leftHeight > 0) {
            doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= PDF_HEIGHT;
            //避免添加空白页
            if (leftHeight > 0) {
              doc.addPage();
            }
          }
        }
  
        doc.save(filename + '.pdf');
  
        // 移除创建的元素
        container.remove();
  
        // 隐藏全局loading提示
        callback();
      });
    }
  
    // 图像地址替换成base64地址
    const eleImgs = container.querySelectorAll('img');
    const length = eleImgs.length;
    let start = 0;
    container.querySelectorAll('img').forEach(ele => {
      let src = ele.src;
  
      if (!src) {
        return;
      }
  
      // 事件处理，必须成功或失败
      ele.onload = function () {
        if (!/^http/.test(ele.src)) {
          start++;
          if (start == length) {
            render();
          }
        }
      };
  
      // 请求图片并转为base64地址
      fetch(src).then(res => res.blob()).then(blob => {
        var reader = new FileReader() ;
        reader.onload = function () {
          ele.src = this.result;
        };
        reader.readAsDataURL(blob) ;
      }).catch(() => {
        // 请求异常处理
        start++;
        if (start == length) {
          render();
        }
      });
    });
  }