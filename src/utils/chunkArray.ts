export function chunkArray<T>(array: T[], limit: number) {
  const result = [];
  for (let i = 0; i < array.length; i += limit) {
    result.push(array.slice(i, i + limit));
  }
  return result;
}
