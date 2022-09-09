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

export const getEpisode = async (id) => {
  return await fetch(`${BASEURL}/api/episodes/es/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getEnding = async (id) => {
  return await fetch(`${BASEURL}/api/endings/es/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getOpening = async (id) => {
  return await fetch(`${BASEURL}/api/openings/es/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getGeneres = async () => {
  return await fetch(`${BASEURL}/api/generes/`, {
    headers: headers,
  }).then((response) => response.json());
};

export const insertGeneres = async (genere) => {
  return await fetch(`${BASEURL}/api/generes/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(genere),
  }).then((response) => response.json());
};

export const getAnime = async (siglas) => {
  return await fetch(`${BASEURL}/api/animes/es/${siglas}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getTemporadas = async () => {
  return await fetch(`${BASEURL}/api/filters/temporadas`, {
    headers: headers,
  }).then((response) => response.json());
};

export const insertAnime = async (anime) => {
  return await fetch(`${BASEURL}/api/animes/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(anime),
  }).then((response) => response.json());
};

export const defaultSiglas = async () => {
  return await fetch(`${BASEURL}/api/media/`, {
    headers: headers,
  }).then((response) => response.json());
};

export const insertMedia = async (media) => {
  return await fetch(`${BASEURL}/api/media/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(media),
  }).then((response) => response.json());
};

export const getListIds = async ({ siglas, kind }) => {
  return await fetch(`${BASEURL}/api/${kind}/${siglas}`, {
    headers: headers,
  }).then((response) => response.json());
};
