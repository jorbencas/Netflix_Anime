import router from "./router";
export default {
    name:'Core',
    computed: {
        $currentUser(){
            return localStorage.getItem('auth')
        }
    },
    data: function () {
        return {
            lang:'es',
            api: 'http://cosasdeanime.com?r=es/api&am='
        }
    },
    to(_param){
        router.push(_param);
    }
}