export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '134f4bcee9msh4e4e59a8707d66cp12ed5fjsn1611d06ed5b5',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '134f4bcee9msh4e4e59a8707d66cp12ed5fjsn1611d06ed5b5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};