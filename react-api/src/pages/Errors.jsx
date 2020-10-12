import React from 'react';
import '../styles/pagres/Errors.css';
import 'font-awesome/css/font-awesome.min.css';

export class Errors extends React.Component {
    render() {
        return (
            <div class="error">
    <h1><?=$v['code']?></h1>
    <img src="<?=handleMedia('tema', 'no', 'jpg')?>" alt="No se ha podido cargar la imagen" srcset="">
    <h4 class='text'> <?=$v['text']?> </h4>
    <a class="link" href="<?=hrefMake("{$v['lang']}/Home")?>">Volver</a>
</div>
        )
    }
}

export default Errors
