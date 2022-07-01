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
