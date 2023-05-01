export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const queryResponse = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const categoryResponse = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const categoryAndQueryResponse = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  let data = '';

  if (categoryId && query) {
    data = categoryAndQueryResponse;
  } else if (!query && categoryId) {
    data = categoryResponse;
  } else {
    data = queryResponse;
  }

  return fetch(data).then((reposta) => reposta.json());
}

export async function pegarProdutoPorID(id) {
  const IDresponse = `https://api.mercadolibre.com/items/${id}`;
  return fetch(IDresponse).then((resposta) => resposta.json());
}
