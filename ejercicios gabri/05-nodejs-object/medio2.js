function invert(o) {
    const inverted = {};
  
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        inverted[o[key]] = key;
      }
    }
  
    return inverted;
  }