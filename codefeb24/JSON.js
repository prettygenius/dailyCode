// Two variables are given key and value. Return these values in JSON notation, but as a string, not an JSON object.


function firstJSON(key, value) {
    const jsonObject = { [key]: value };
    return JSON.stringify(jsonObject);
  }
  