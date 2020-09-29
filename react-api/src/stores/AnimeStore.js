import { decorate, observable, action, computed, reaction } from "mobx";

class AnimeStore {
  constructor() {
    this.animes = [];

    

  }

   agregarArepa = arepa => {
    this.animes.push(arepa);
  };
/*
  borrar = () => {
    this.animes = [];
  };

  get numeroArepas() {
    return this.animes.length;
  } */
}

decorate(AnimeStore, {
  animes: observable,
 /*  agregarArepa: action,
  borrar: action,
  numeroArepas: computed */
});

const animeStore = new AnimeStore();

export default AnimeStore;
