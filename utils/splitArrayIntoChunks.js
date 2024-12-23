export function splitArrayIntoChunks(array, numChunks) {
  const result = [];
  const chunkSize = Math.ceil(array.length / numChunks); // Размер каждого куска

  for (let i = 0; i < numChunks; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    result.push(array.slice(start, end)); // Добавляем часть массива
  }

  return result;
}