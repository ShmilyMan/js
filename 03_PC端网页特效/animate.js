function animate(obj, target, calback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      // 对 step 取整，防止出现小数数字不精确的问题
      // 如果step大于0则向上取整反正则向下取整
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft === target) {
        clearInterval(obj.timer);
        // 在动画停止之后，调用回调函数
        /*if (calback) {
          calback()
        }*/
        calback && calback(); // 上面 if 判断的高级写法
      }
      obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}