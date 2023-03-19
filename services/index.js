const BASEURL = "http://localhost:3001";
const APITOKEN =
  "???123456789Azsxdcfvgnbhknljopimuhytgrfqew127364lpñokmni**/-++89¿juhvtcfdr65es123\\~~xza_qw";
const headers = {
  "Content-Type": "application/json",
  authorization: APITOKEN,
  "X-Requested-With": "XMLHttpRequest",
};

export const getEpisode = async (id) => {
  return await fetch(`${BASEURL}/api/episodes/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getMedia = async (media) => {
  headers["Content-Type"] = "video/mp4";
  return await fetch(`${BASEURL}/media/${media}`, {
    headers: headers,
  })
    .then((response) => response.blob())
    .then((res) => URL.createObjectURL(res));
};

export const getEnding = async (id) => {
  return await fetch(`${BASEURL}/api/endings/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getOpening = async (id) => {
  return await fetch(`${BASEURL}/api/openings/${id}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getGeneres = async () => {
  return await fetch(`${BASEURL}/api/filters/generes/`, {
    headers: headers,
  }).then((response) => response.json());
};

export const insertFilters = (genere) => {
  return fetch(`${BASEURL}/api/filters`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(genere),
  }).then((response) => response.json());
};

export const getAnime = async (siglas, edit = false) => {
  return await fetch(`${BASEURL}/api/animes/${siglas}/${edit}`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getTemporadas = () => {
  return fetch(`${BASEURL}/api/filters/temporadas`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getIdiomaLista = () => {
  return fetch(`${BASEURL}/api/filters/languajes`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getSeasions = async (siglas) => {
  return await fetch(`${BASEURL}/api/seasions/${siglas}`, {
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

export const editAnime = async (anime) => {
  return await fetch(`${BASEURL}/api/animes/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(anime),
  }).then((response) => response.json());
};

export const insertEnding = async (ending) => {
  return await fetch(`${BASEURL}/api/endings/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(ending),
  }).then((response) => response.json());
};

export const editEnding = async (ending) => {
  return await fetch(`${BASEURL}/api/endings/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(ending),
  }).then((response) => response.json());
};

export const insertOpening = async (opening) => {
  return await fetch(`${BASEURL}/api/openings/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(opening),
  }).then((response) => response.json());
};

export const editOpening = async (opening) => {
  return await fetch(`${BASEURL}/api/openings/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(opening),
  }).then((response) => response.json());
};

export const insertEpisode = async (episode) => {
  return await fetch(`${BASEURL}/api/episodes/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(episode),
  }).then((response) => response.json());
};

export const editEpisode = async (episode) => {
  return await fetch(`${BASEURL}/api/episodes/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(episode),
  }).then((response) => response.json());
};

export const defaultSiglas = async () => {
  return await fetch(`${BASEURL}/api/media/`, {
    headers: headers,
  }).then((response) => response.json());
};

export const getListIds = async ({ siglas, kind }) => {
  return await fetch(`${BASEURL}/api/${kind}/getListIds/${siglas}`, {
    headers: headers,
  }).then((response) => response.json());
};
