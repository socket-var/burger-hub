export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await fetch(
    "https://burgerhub00.github.io/data/products.json"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return data.products;
};

export const fetchMenuItemById = async (id: string): Promise<MenuItem> => {
  const data = await fetchMenu();

  const matchedItem = data.find((item) => item.id === id);

  if (!matchedItem) {
    throw new Error(`Menu item not found`);
  }

  return matchedItem;
};
