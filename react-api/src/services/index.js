import axios from 'axios';
const baseUrl = 'http://cosasdeanime.com?r=es/api&am=';

const Communication = {
    getMethod(lang, endpoint, data = null) {
        if (data !== null || data !== undefined) {
            return axios.post(baseUrl + endpoint, data, {
                headers: {
                    'api_token': '???123456789Azsxdcfvgnbhknljopimuhytgrfqew127364lpñokmni**/-++89¿juhvtcfdr65es123\\~~xza_qw',
                    'current_lang': lang
                }
            }).then(response => {
                if (response.data.data) {
                    return response.data.data;
                } else {
                    return response.data;
                }
            })
        } else {
            return axios.get(baseUrl + endpoint, {
                headers: {
                    'api_token': '???123456789Azsxdcfvgnbhknljopimuhytgrfqew127364lpñokmni**/-++89¿juhvtcfdr65es123\\~~xza_qw',
                    'current_lang': lang
                }
            }).then(response => {
                if (response.data.data) {
                    return response.data.data;
                } else {
                    return response.data;
                }
            })
        }
    }
}
export default Communication;