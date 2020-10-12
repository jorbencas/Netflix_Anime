import React from 'react'

export class OpeningsDetails extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }


      $("#add").click(function () {
        let cant = $("#cant").val();
        if (cant >= 0) $("#cant").val(parseInt(cant) + 1);
      });
      
      $("#remove").click(function () {
        let cant = $("#cant").val();
        if (cant > 0) $("#cant").val(parseInt(cant) - 1);
      });

      
    render() {
        return (
            <section class="episode-page">
    <?= $v['linkmenutop']?>
    <div class="element video">
        <div class="element_title">
            <h1><?= $v["page_tittle"]?> <?= $v['episode']['num']  . "-" . $v['titulo'] ?></h1>
        </div>
        <div class="element_video">
            <?= render("video", $v['video']) ?>
        </div>
        <div class="options">
            <ul class="options">
                <?= $v['prev'] ?>
                <?= $v['next'] ?>
            </ul>
        </div>
    </div>

    <?php if (isLogged() && ($v['modulo'] == 'aleatory' ||  $v['modulo'] == 'EpisodesDetails')) : ?>
    <div class="element">
        <div class="options">
            <div class="option">
                <p>Audio: </p>
                <select name="episode_languaje" id="selector episode" onchange='setlang()'>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                    <option value="va">Valencia</option>
                </select>
            </div>
            <div class="option">
                <p>Subtitulos: </p>
                <select name="episode_sub" id="selector episode">
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="option actions">
                <button class='submit' id='remove'><i class="fas fa-minus"></i></button>
                <input type="number" name="cant" id="cant" min='0' max='100' value='0'>
                <button class='submit' id='add'><i class="fas fa-plus"></i></button>
            </div>
            <div class="option actions">
                <button class='submit' type="submit"><i class="fas fa-shopping-cart"></i> Añadir al carrito</button>
            </div>
            <!-- <div class="option actions">
                <button onclick='setvisiblitycollections(event.target)' class='submit' type="submit"><i
                        class="fas fa-bookmark"></i> <i class="far fa-bookmark"></i> Añadir una coleción</button>
            </div> -->
        </div>
    </div>
    <?= render('Collections');?>
    <?php endif; ?>
    <?= render('Comments')?>
</section>
<?php if (!empty($v['animes'])): ?>
<section class="animes_intereseted">
    <h3>ASnimes que pueden interesarte</h3>
    <?=render("Anime_Grid", $v['animes'])?>
</section>
<?php endif;?></section>
        )
    }
}

export default OpeningsDetails
