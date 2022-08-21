const BASEURL = "http://localhost:3001";
const APITOKEN =
  "???123456789Azsxdcfvgnbhknljopimuhytgrfqew127364lpñokmni**/-++89¿juhvtcfdr65es123\\~~xza_qw";
const headers = {
  api_token: APITOKEN,
  "X-Requested-With": "XMLHttpRequest",
};

export const getLangs = async () => {
  return await fetch(`${BASEURL}/api/langs/es`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getGeneres = async (lang) => {
  return await fetch(`${BASEURL}/api/generes/${lang}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getAnimes = async (genre) => {
  return await fetch(`${BASEURL}/api/animes/es/${genre}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getAnime = async (siglas) => {
  return await fetch(`${BASEURL}/api/animes/es/${siglas}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getAnimeByName = async (name) => {
  return await fetch(`${BASEURL}/api/animes/es/${name}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const insertAnime = async (anime) => {
  return await fetch(`${BASEURL}/api/animes/es`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(anime),
  }).then((response) => response.json());
};
