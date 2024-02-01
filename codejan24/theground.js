// Given is an object obj each with two properties (name & category) of type String. Return the value of the property with the longer string. If both are of equal length, return the value of the name property.


function theGround(obj) {
    const { name, category } = obj;
    
    if (name.length > category.length) {
      return name;
    } else if (category.length > name.length) {
      return category;
    } else {
      return name;
    }
  }
  