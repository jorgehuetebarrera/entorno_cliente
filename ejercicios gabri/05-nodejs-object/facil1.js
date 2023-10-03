function toArray(obj) {
    const result = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]]);
      }
    }
  
    return result;
  }
  

  const myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const arrayResult = toArray(myObject);
  console.log(arrayResult);