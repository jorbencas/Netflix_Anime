<template>
  <p>Hola Anime</p>
</template>

<script>
export default {
    name: 'Anime',
    props: ['animes'],
    methods: {
       comprovarestado(item) { // let state = 'danger';
            return item === 'No' ? 'danger' : 'succees';
        },
        parseestado(item) {
            switch (item) {
                case 'No':
                    item = 'No Servido';
                    break;
                case 'Parcial':
                    item = 'Parcial';
                    break;
                default:
                    item = 'Servido';
                    break;
            }
            return item;
        },
        cargarlineapedido(idpedido) {
            let that = this;
            let random = Math.floor(Math.random() * 10000);
            fetch("/es/JSON/apibridge?" + random, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        rutaapi: "/lineaspedidos/" + idpedido
                    }
                )
            }).then(function (response) {
                response.json().then(function (json) {
                    that.lineapedido = json.sql_response.lineas;
                    that.cabezerapedido = json.sql_response.cabecera[0];
                    that.cargando = true;
                });
            });
        },
        openModal(idpedido, codpedido) {
            this.cargando = false;
            this.codpedido = codpedido;
            this.cargarlineapedido(idpedido);
           /*  $('.contenido').css('opacity', '1');
            $('.contenido').css('display', 'block');
            $('.modal_linea').css('opacity', '0.6');
            $('.modal_linea').css('display', 'block'); */
        },
        closeModal() {
           /*  $('.contenido').css('opacity', '0');
            $('.contenido').css('display', 'none');
            $('.modal_linea').css('opacity', '0');
            $('.modal_linea').css('display', 'none'); */
        },
        ordenar(tipo, estado) {
            this.limpiarorden();
            let state = estado.attributes[0].value;

            switch (tipo) {
                case 'fecha':
                    if (state === "true") {
                        //$(estado.children[0]).attr('class', 'glyphicon glyphicon-arrow-down');
                        estado.attributes[0].value = false;
                        return this.postList.sort((a, b) => (a.fecha > b.fecha) ? 1 : -1)
                    } else {
                        //$(estado.children[0]).attr('class', "glyphicon glyphicon-arrow-up");
                        estado.attributes[0].value = true;
                        return this.postList.sort((a, b) => (b.fecha > a.fecha) ? 1 : -1)
                    }
                case 'fechasalida':
                    if (state === "true") {
                        //$(estado.children[0]).attr('class', 'glyphicon glyphicon-arrow-down');
                        estado.attributes[0].value = false;
                        return this.postList.sort((a, b) => (a.fechasalida > b.fechasalida) ? 1 : -1)
                    } else {
                        //$(estado.children[0]).attr('class', 'glyphicon glyphicon-arrow-up');
                        estado.attributes[0].value = true;
                        return this.postList.sort((a, b) => (b.fechasalida > a.fechasalida) ? 1 : -1)
                    }
                default:
                    if (state === "true") {
                        //$(estado.children[0]).attr('class', 'glyphicon glyphicon-arrow-down');
                        estado.attributes[0].value = false;
                        return this.postList.sort((a, b) => (a.codigo > b.codigo) ? 1 : -1)
                    } else {
                        //$(estado.children[0]).attr('class', 'glyphicon glyphicon-arrow-up');
                        estado.attributes[0].value = true;
                        return this.postList.sort((a, b) => (b.codigo > a.codigo) ? 1 : -1)
                    }
            }

        },
        limpiarorden() {
           /*  if ($("th span").hasClass("glyphicon glyphicon-arrow-down")) {
                $("th span").removeClass("glyphicon glyphicon-arrow-down");
            }
             
            if ($("th span").hasClass("glyphicon glyphicon-arrow-up")) {
                $("th span").removeClass("glyphicon glyphicon-arrow-up");
            } */
            
            //this.postList = array_pedidos;
        },
        renderimg(referencia) {
            return "/fotos/min/" + referencia + "_1.jpg";
        }
    }
}
</script>

<style scoped>

</style>