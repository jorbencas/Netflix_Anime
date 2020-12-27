<template>
  <header>
    
<section class="header">
 <!-- <article class="music_player"> <?=RenderModule('MusicPlayer');?> </article> -->
  <article class="langs">
    <ul>
      <li class='active'><a href="">Español</a> </li>
      <li><a href="">Ingles</a> </li>
      <li><a href="">Catalan</a> </li>
      <li><a href="">Valenciano</a> </li>
    </ul>
  </article>
</section>
<div class="menu_bar">
  <a href="#" class="bt-menu"><i class="fas fa-bars"></i>Menu</a>
  <div class='seachitem'>
    <!-- <?= RenderModule('Buscador') ?> -->
  </div>
</div>

  <nav id='navbar'>
    <ul>
      <li><a modulo='Home' href="/Home">
        <i class="fas fa-home"></i>
        <span class='texto'>Cosas de Anime</span> 
      </a></li>
      <li><a modulo='Anime, AnimeDetails, EpisodesDetails' href="/Anime">
        <i class="fas fa-list-ul"></i>
        <span class='texto'>Animes</span></a>
        <span v-if="$currentUser" class="badge">3</span>
        <ul class='children'>
          <li><a href="Anime"><i class="fab fa-twitter"></i>twitter</a></li>
          <li><a href="Anime"><i class="fab fa-facebook"></i>facebook</a></li>
          <li><a href="Anime"><i class="fab fa-skype"></i>skype</a></li>
          <li><a href="Anime"><i class="fab fa-youtube"></i>youtube</a></li>
        </ul>
      </li>
      <li><a modulo='ComingSoon' href="ComingSoon">
        <i class="fas fa-book-open"></i>
        <span class='texto'>Mangas</span>
        <span v-if="$currentUser" class="badge">3</span>
      </a></li>
      <li><a modulo='Blog, news' href="Blog">
        <i class="fas fa-blog"></i>
        <span class='texto'>Blog</span>
        <span v-if="$currentUser" class="badge">3</span>
      </a></li>

      <li v-if="!$currentUser" ><a modulo='Login' href="Login">
        <i class="far fa-user-circle"></i>
        <span class='texto'>Iniciar Sessión</span>
      </a></li>
      <li v-if="!$currentUser" ><a  modulo='User' href="User">
        <i class="far fa-user"></i>
        <span class='texto'>Registrar-se</span>
      </a></li>
      <li v-if="!$currentUser" ><a  modulo='EpisodesDetails' href="AnimeDetails&p=">
        <i class="fas fa-random"></i>
        <span class='texto'>Aleatorio</span>
      </a></li>
        <li v-if="$currentUser"><a  modulo='Configuration' class='user' href="Configuration">
            <img :src="$currentUser.avatar" alt="usuario">
            <p>Usuario</p>
          </a>
        </li>
        <li v-if="$currentUser"><a  modulo='Descargas' href="Descargas">
          <i class="fas fa-download"></i>Descargas
        </a></li>
        <li v-if="$currentUser"><a  onclick="logout()">
          <i class="fas fa-sign-out-alt"></i>Salir
        </a></li>
        <li v-if="$currentUser"><a  modulo='Cart' href="Cart">
          <div class="caret">0</div>
          <i class="fas fa-shopping-cart"></i>
        </a></li>
      <!-- <?= RenderModule('Buscador') ?> -->
    </ul>
  </nav>

  <div class="lateralbar" v-if="$currentUser">
    <div id="mySidenav" class="sidenav">
      <div class='element' id="about" onclick="openmodal('Edit')">
        <p> Editar </p> 
        <i class='fas fa-pen'></i>
      </div>

      <div class='element' id="blog" onclick="openmodal('Edit')">
        <p> Media </p> 
        <i class="fas fa-photo-video"></i>
      </div>

      <div class='element' id="projects" onclick="openmodal('Edit')">
        <p> Actualizar </p> 
        <i class="fas fa-cloud-upload-alt"></i>
      </div>

      <div class='element' id="contact" onclick="openmodal('Edit')">
        <p>Mangas </p> 
        <i class="fas fa-book-reader"></i>
      </div>

      <div class='element' id="import" onclick="openmodal('Edit')">
        <p>Importador </p> 
        <i class="fas fa-file-import"></i>
      </div>

      <div class='element' id="download" onclick="openmodal('Edit')">
        <p>Descargas </p> 
        <i class="fas fa-download"></i>
      </div>

    </div>
  </div>
  </header>
</template>

<script>
import Vue from 'vue'
import Core from "../mixings";

export default {
  name: 'Header',
  mixins: [Core],
  data: function(){
    return {numberofslides: 10}
  },
  mounted: function(){
    this.getsomething();
  },
  methods: {
    getsomething(){
      Vue.axios.get(this.api + "Anime").then((resp) => {
        if (resp.data.status.code === 200) {
          this.personages = resp.data.data;
        }
      })
      
      this.axios.get(this.api + "Anime").then((resp) => {
        if (resp.data.status.code === 200) {
          this.personages = resp.data.data;
        }
      })
      
      this.$http.get(this.api + "Anime").then((resp) => {
        if (resp.data.status.code === 200) {
          this.personages = resp.data.data;
        }
      })
    },
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    
  }
}
</script>

<style scoped lang="css">
  @import url('../../styles/components/Header.css');
</style>