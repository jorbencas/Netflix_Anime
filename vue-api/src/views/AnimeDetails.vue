<template>
  <p>
      Hola Mundo
  </p>
</template>

<script>
import axios from 'axios'
import Core from "../mixings";
export default {
  name: 'AnimeDetails',
  mixins:[Core],
  data: function (){
    return {
    anime: {}
    }
  },
  mounted: function(){
    let that = this;
       axios.get(this.api + "Anime&ap=" + this.numberofslides).then((response) => {
        if (response.data.status.code === 200) {
           that.anime = response.data.data
        }else{
          //console.log(response.data.status.message);
        }
      });
  }
}
</script>

<style scoped>

</style>