export async function getCharacters() {
  const API_URL = `https://rickandmortyapi.com/api/character`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los datos");

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
export async function addCharacter(id) {
  const API_URL = `https://rickandmortyapi.com/api/character/${id}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los datos");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
