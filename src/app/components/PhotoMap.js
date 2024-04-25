const photoMap = {};

const addKeyWithArray = (itemId, image) => {
    if (!photoMap[itemId]) {
      photoMap[itemId] = []; // Initialize an array if it doesn't exist for the key
    }
    photoMap[itemId].push(image); // Push data into the array associated with the key
  };  

const deleteKeyWithArray = (key) => {
    if (myMap.hasOwnProperty(key)) {
      delete myMap[key];
    } else {
      console.log(`Key '${key}' does not exist.`);
    }
  };

export { photoMap, addKeyWithArray, deleteKeyWithArray };