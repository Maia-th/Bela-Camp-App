const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const MealAPI = {
  // buscar refeição pelo nome
  searchMealsByName: async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Erro ao buscar refeições pelo nome:", error);
      return [];
    }
  },

  // buscar detalhes completos da refeição pelo id
  getMealById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Erro ao obter refeição pelo id:", error);
      return null;
    }
  },

  // buscar uma refeição aleatória
  getRandomMeal: async () => {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error("Erro ao obter refeição aleatória:", error);
      return null;
    }
  },

  // buscar várias refeições aleatórias
  getRandomMeals: async (count = 6) => {
    try {
      const promises = Array(count)
        .fill()
        .map(() => MealAPI.getRandomMeal());
      const meals = await Promise.all(promises);
      return meals.filter((meal) => meal !== null);
    } catch (error) {
      console.error("Erro ao obter refeições aleatórias:", error);
      return [];
    }
  },

  // listar todas as categorias de refeições
  getCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/categories.php`);
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error("Erro ao obter categorias:", error);
      return [];
    }
  },

  // filtrar por ingrediente principal
  filterByIngredient: async (ingredient) => {
    try {
      const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Erro ao filtrar por ingrediente:", error);
      return [];
    }
  },

  // filtrar por categoria
  filterByCategory: async (category) => {
    try {
      const response = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Erro ao filtrar por categoria:", error);
      return [];
    }
  },

  // transformar os dados da TheMealDB para o formato do nosso app
  transformMealData: (meal) => {
    if (!meal) return null;

    // extrair ingredientes do objeto da refeição
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        const measureText = measure && measure.trim() ? `${measure.trim()} ` : "";
        ingredients.push(`${measureText}${ingredient.trim()}`);
      }
    }

    // extrair instruções
    const instructions = meal.strInstructions
      ? meal.strInstructions.split(/\r?\n/).filter((step) => step.trim())
      : [];

    return {
      id: meal.idMeal,
      title: meal.strMeal,
      description: meal.strInstructions
        ? meal.strInstructions.substring(0, 120) + "..."
        : "Refeição deliciosa do TheMealDB",
      image: meal.strMealThumb,
      cookTime: "30 minutos",
      servings: 4,
      category: meal.strCategory || "Prato Principal",
      area: meal.strArea,
      ingredients,
      instructions,
      originalData: meal,
    };
  },
};