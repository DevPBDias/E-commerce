export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categoryAndQueryResponse = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(categoryAndQueryResponse).then((reposta) => reposta.json());
}

export async function getProductsFromCategory(categoryId) {
  const categoryResponse = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  return fetch(categoryResponse).then((reposta) => reposta.json());
}

export async function getProductsFromQuery(query) {
  const queryResponse = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(queryResponse).then((reposta) => reposta.json());
}

export async function getProductByID(id) {
  const IDresponse = `https://api.mercadolibre.com/items/${id}`;
  return fetch(IDresponse).then((resposta) => resposta.json());
}
