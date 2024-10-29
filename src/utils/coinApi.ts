export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '93f9b5f30emshe55bf66f37be1eap1cac97jsneb8e09131c7f',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
export const newsOptions = {
  method: 'GET',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '93f9b5f30emshe55bf66f37be1eap1cac97jsneb8e09131c7f',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

export const useFetch = async (url:string, options:any) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
