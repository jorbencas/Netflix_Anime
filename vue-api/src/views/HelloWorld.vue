<template>
  
<div id="home">
  <div class="contenedor" id="contenedor">
    <div class="header-home">
      <!-- <?= RenderModule('Home_slider') ?> -->
    </div>
    <div class="lista_proximas">
      <h3>Proximos Estrenos</h3>
      <ul v-if="episodes">
            <li class="lista" v-for="episode in episodes" :key="episode.id">
              <a class="texto_line" href="EpisodesDetails">
              <div class="img" v-bind:style="{
                backgroundRepeat: 'no-repeat', 
                backgroundImage: 'url(\'' + episode.portada + '\')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
               }"></div>
                <p class="texto">
                    {{ episode.anime_titulo_lang }}
                    {{ episode.id }}
                    {{ episode.titulo }}
                    <i class="fa fa-play"></i>
                  </p>
              </a>
            </li>
      </ul>
    </div>
  </div>

  <div class="home_body">
    <div class="home_body_content">
        <div class="element">
        <h3>Listado de animes de la temporada</h3>
         <AnimeGrid animes:animes />
        </div>
      </div>
  </div>
  <div class="home_body">
    <div class="home_body_content">
        <div class="element">
          <h3>Nuevos personages</h3>
         <!-- <PersonageGrid personages:personages /> -->
        </div>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
import Core from "../mixings";
import AnimeGrid from "../components/AnimeGrid";

export default {
  name: 'HelloWorld',
  components: {
    AnimeGrid
  },
  props: {
    msg: String
  },
  mixins: [Core],
  data() {
    return {
      animes: [],
      episodes: [],
      personages: [],
      numberofslides: 10
    }
  },
  mounted(){
    let that = this;
     axios.get(this.api + "Anime&as=" + this.numberofslides).then((response) => {
        //console.log(response);
        if (response.data.status.code === 200) {
           that.animes = response.data.data
        }else{
          //console.log(response.data.status.message);
        }
      });

      this.axios.get(this.api + "Episodes&as=" + this.numberofslides).then((response) => {
        //console.log(response);
        if (response.data.status.code === 200) {
          that.episodes = response.data.data;
        }else{
         // console.log(response.data.status.message);
        }
      });
      
      this.$http.get(this.api + "Personages&as=" + this.numberofslides).then((response) => {
        //console.log(response);
        if (response.data.status.code === 200) {
          that.personages = response.data.data;
        }else{
          //console.log(response.data.status.message);
        }
      });
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  @import url('../../styles/views/HelloWorld.css');
</style>
