function isSimilar(objX, objY) {
    if (typeof objX !== typeof objY) {
      return false;
    }
  
    if (Array.isArray(objX)) {
      if (objX.length !== objY.length) {
        return false;
      }
  
      for (let i = 0; i < objX.length; i++) {
        if (!isSimilar(objX[i], objY[i])) {
          return false;
        }
      }
    } else if (objX instanceof Map) {
      if (objX.size !== objY.size) {
        return false;
      }
  
      for (const [key, value] of objX) {
        if (!objY.has(key) || !isSimilar(value, objY.get(key))) {
          return false;
        }
      }
    } else if (typeof objX === 'object') {
      const keysX = Object.keys(objX);
      const keysY = Object.keys(objY);
  
      if (keysX.length !== keysY.length) {
        return false;
      }
  
      for (const key of keysX) {
        if (!keysY.includes(key) || !isSimilar(objX[key], objY[key])) {
          return false;
        }
      }
    } else {
      // For non-object, non-array, and non-map values
      return objX === objY;
    }
  
    return true;
  }