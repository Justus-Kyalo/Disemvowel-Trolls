function disemvowel(str) {
  // Array of vowels to be removed
  const vowels = ["a", "e", "i", "o", "u"];

  // Split the string into an array of characters
  // Filter out the vowels using the filter method
  // Join the resulting array back into a string
  return str
    .split("")
    .filter((c) => {
      // Check if the current character is not a vowel
      return !vowels.includes(c.toLowerCase());
    })
    .join("");
}
