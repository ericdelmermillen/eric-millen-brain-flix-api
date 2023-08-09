export function getRandomLikesCount() {
  return Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
};

export function getRandomViewsCount() {
  return Math.floor(Math.random() * (200000 - 50000 + 1)) + 50000;
};


// function getRandomDuration() {
//   const randomMinutes = Math.floor(Math.random() * 10); 
//   const randomSeconds = Math.floor(Math.random() * 60); 
//   const formattedMinutes = String(randomMinutes).padStart(2, '0'); 
//   const formattedSeconds = String(randomSeconds).padStart(2, '0'); 

//   return `${formattedMinutes}:${formattedSeconds}`;
// }

console.log(getRandomDuration()); // Example usage



// export {
//   getRandomLikesCount,
//   getRandomViewsCount
// };
