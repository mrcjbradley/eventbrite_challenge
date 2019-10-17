import secret from "./secret";

export async function fetchAllCategories() {
  const categories = await fetch(
    `https://www.eventbriteapi.com/v3/categories/?token=${secret.key}`,
    {
      headers: {
        Authorization: `Bearer ${secret.key}`
      }
    }
  );

  return categories.json();
}
