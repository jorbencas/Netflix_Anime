import { observable, action, reaction } from "mobx";

class AnimeStore {
  constructor() {
    
  }
}

decorate(AnimeStore, {
  animes: observable,
 /*  agregarArepa: action,
  borrar: action,
  numeroArepas: computed */
});

export default new AnimeStore();
