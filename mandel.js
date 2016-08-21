function mandel(cr, ci, max_iter) {

  zr = cr;
  zi = ci;
  
  for (i = 1; i < max_iter; i++) {
    tmp = zr;
    zr = zr*zr - zi*zi + cr;
    zi = 2 * tmp * zi + ci;
    
    if (zr * zr + zi * zi > 4)
      return max(0, 256 - i);
  }
  
  return 0;
}

postMessage(mandel(0, 0, 50))
