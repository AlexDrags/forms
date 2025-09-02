export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const dataJson = await response.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
}
