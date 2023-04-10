export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '29cb6f12f9msh39225d50633d345p1bef88jsne715d769f9b2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '29cb6f12f9msh39225d50633d345p1bef88jsne715d769f9b2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};