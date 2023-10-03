function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
  }
  

  const myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const [sortedKeys, sortedValues] = keysAndValues(myObject);
  console.log(sortedKeys);   
  console.log(sortedValues); 