<template>
<div></div>
<!--   <section>
    <a v-for="anime in animes" :key="anime.id" :to="'/AnimeDetails' + anime.id" class="grid-anime" id="{{anime.id}}" l="{{ anime.titulo}}" g="{{anime.generes_text}}" y="" k="{{anime.kind}}" a="" i="" s="">
    <div class="element_img" style="background:url('{{anime.caratula}}');background-repeat: no-repeat; background-size: cover;"></div>
    <div class="element_text">
        <p class='titulo'>{{ anime.titulo_es }}</p>
        <p> {{anime.sinopsis_es]}</p>
        <div v-if="Core.$currentUser" class='buttons' onclick="openmodal('Anime_Edit', {{anime.id}} );"><i class='fa fa-pen'></i>Editar</div>
        <div v-if="Core.$currentUser" class='buttons' onclick="openmodal('Anime_Edit', {{anime.id}} );"><i class="fa fa-trash"></i>Borrar</div>
    </div>
    </a>
  </section> -->
</template>

<script>
    import Core from "../mixings";
export default {
    name: 'AnimeGrid',
    mixins:[Core],
    props: ['animes'],
}
</script>

<style type="text/css">
  @import url('../../styles/components/AnimeGrid.css');
</style>