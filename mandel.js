function mandel(width, max_iter) {

  f = 2.5 / width;

  for (y = 0; y < width; y++) {
    for(x = 0; x < width; x++) {
      cr = -2.0 + x * f;
      ci = 1.25 - y * f;

      zr = cr;
      zi = ci;
      color = 0;

      for (i = 1; i < max_iter; i++) {
        tmp = zr;
        zr = zr*zr - zi*zi + cr;
        zi = 2 * tmp * zi + ci;
        
        if (zr * zr + zi * zi > 4) {
          color = Math.max(0, 256 - i);

          break;
        }
      }
      
      postMessage({ 'x':x, 'y':y, 'c':color });
    }
  }
}

addEventListener('message', function(e) {
  var data = e.data;
  
  switch (data.cmd) {
    case 'start':
      console.log("Worker started!"); 
      console.log("width=" + data.width);
      console.log("max_iter=" + data.max_iter);

      mandel(data.width, data.max_iter);
      break;
    case 'stop':
      close();
  }
}, false);
