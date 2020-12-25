// inyectar un controlador para la opción personalizada `myOption`
Vue.mixin({
    created: function () {
      var myOption = this.$options.myOption
      if (myOption) {
        console.log(myOption)
      }
    }
  })
  
  new Vue({
    myOption: 'hola!'
  })
  // => "hola!"