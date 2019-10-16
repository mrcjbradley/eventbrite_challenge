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
export async function fetchCategoryLocationEvents(
  location,
  distance,
  categoryId
) {
  const categories = await fetch(
    `https://www.eventbriteapi.com/v3/events/search/?location.within=${distance}mi&location.address=${location}&categories=${categoryId}&token=${secret.key}`,
    {
      headers: {
        Authorization: `Bearer ${secret.key}`
      }
    }
  );

  return categories.json();
}
