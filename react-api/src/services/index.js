import axios from 'axios';
const BASEURL = 'http://cosasdeanime.com?r=es/api&am=';
const APITOKEN = '???123456789Azsxdcfvgnbhknljopimuhytgrfqew127364lpñokmni**/-++89¿juhvtcfdr65es123\\~~xza_qw';

const Communication = {
    getMethod(lang, endpoint, data = null) {
        if (data !== null) {
            return axios.post(BASEURL + endpoint, data, {
                headers: {
                    'api_token': APITOKEN,
                    'current_lang': lang,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(response => {
                if (response.data.data !== undefined) {
                    return response.data.data;
                } else {
                    return response.data;
                }
            })
        } else {
            return axios.get(BASEURL + endpoint, {
                headers: {
                    'api_token': APITOKEN,
                    'current_lang': lang,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(response => {
                if (response.data.data !== undefined) {
                    return response.data.data;
                } else {
                    return response.data;
                }
            })
        }
    }
}
export default Communication;