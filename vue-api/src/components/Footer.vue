<template>
  <footer>
    <div class="footer-list">
        <a v-for="anime in animes" :key="anime.id" class='element_container' :to="'AnimeDetails/'+ anime.id">
           <!--  <div class="element_img" style='background:url("<?=$anime['caratula']?>");background-repeat: no-repeat; background-size: cover;'></div> -->
            <div class="element_text"><p>{{anime.titulo_es}}</p></div>
        </a>
    </div>
    <div class="footer-logo">
      <h4 class="logo">
        <a href="Home">Cosas de Anime 2017 - {{year}}</a>
      </h4>

      <ul class="contador">
        <li v-for="(meta, index) in metadata" :key="index">
          <i class="far fa-bookmark">
            <span>{{ meta }}</span>
          </i>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import Core from "../mixings";

export default {
  name: "Footer",
  mixins: [Core],
  data: function() {
    return {
      animes: [],
      year: new Date().getFullYear(),
      numberofslides: 10,
      metadata: []
    };
  },
  mounted: function() {
    let that = this;
    axios.get(this.api + "Anime&as=" + this.numberofslides).then(response => {
      if (response.data.status.code === 200) {
        that.personages = response.data.data;
      } else {
        //console.log(response.data.status.message);
      }
    });
    axios.get(this.api + "Footer").then(response => {
      if (response.data.status.code === 200) {
        that.metadata = response.data.data.visiteds;
      }
    });
  },
  methods: {}
};
</script>

<style scoped lang="css">
  @import url('../../styles/components/Footer.css');
</style>