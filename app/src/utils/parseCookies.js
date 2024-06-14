export default function parseCookiesToArray(cookieStrings) {
  // Define the regex pattern to match key-value pairs in cookies
  const cookiePattern = /([^=]+)=([^;]*);?\s*/g;
  // Initialize an empty array to store parsed cookies as objects
  let cookiesArray = [];

  // Iterate over each cookie string in the input array
  cookieStrings.forEach((cookieString) => {
    let match;
    // Initialize an object to store the current cookie's attributes
    let cookieObj = {};
    let isFirstPair = true;

    // Iterate over all matches of the pattern in the current cookie string
    while ((match = cookiePattern.exec(cookieString))) {
      const key = decodeURIComponent(match[1].trim());
      const value = decodeURIComponent(match[2].trim());

      if (isFirstPair) {
        // The first key-value pair is the main cookie name-value pair
        cookieObj.name = key;
        cookieObj.value = value;
        isFirstPair = false;
      } else {
        // Subsequent key-value pairs are attributes of the cookie
        cookieObj[key] = value;
      }
    }

    // Push the parsed cookie object into the array
    cookiesArray.push(cookieObj);
  });

  return cookiesArray;
}
