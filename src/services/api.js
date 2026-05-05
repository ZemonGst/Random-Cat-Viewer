export const fetchRandomCatImage = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/cats/cat/random"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch cat image");
    }

    const data = await res.json();

    return data.data; // Return the whole data object to display more info
  } catch (error) {
    console.error(error);
    return null;
  }
};