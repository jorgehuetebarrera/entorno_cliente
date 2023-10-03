function volumeOfBox(sizes) {
  if (sizes && typeof sizes === 'object' && 'width' in sizes && 'length' in sizes && 'height' in sizes) {
    const volume = sizes.width * sizes.length * sizes.height;
    return volume;
  } else {
    return "Invalid input: the object should have 'width,' 'length,' and 'height' properties.";
  }
}