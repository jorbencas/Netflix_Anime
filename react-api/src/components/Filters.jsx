import React from 'react';
import '../styles/components/Filters.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Filters extends React.Component {












    
function tooglefilter(event){
    let id = event.parentNode.attributes[1].value;
    let tittle = event.parentNode.attributes[3].value;

    if ($("#" + id + " > .link").hasClass("collapsed")) {
        $(".filters .list").css('height', '0');
        $('.letra-link').each((index, element) => {
            $(element.children[0]).text($(element).attr('title'));
        });
        // switch (id) {
        //     case 'g': height = '315px'; break;
        //     case 'y': height = '270px'; break;
        //     default: height = '75px'; break;
        // }
        height = "auto";
        switchoption(id, height,'Cerrar X','expanded', 'collapsed');
    } else {
        switchoption(id, '0',tittle,'collapsed', 'expanded');
    }
}

function switchoption(element, height, text, newclass, oldclass) {
    switch (element) {
        case "g": $("#genere-list").css("height", height); break;
        case "k": $("#kind-list").css('height', height); break;
        case "y": $("#year-list").css('height', height); break;
        case 'a': $("#author-list").css('height', height); break;
        case 'i': $("#languaje-list").css('height', height); break;
        case 's': $("#studio-list").css('height', height); break;
        case 't': $("#temporadas-list").css('height', height); break;
    }

    $('#' + element +' > .link').text(text);
    $('#' + element +' > .link').removeClass(oldclass).addClass(newclass);

}






    render() {
        return (
            <div class="filters">
    <ul class='menu' role="menu">
        <ul>
            <?php foreach ($v['letters'] as $letter): ?>
            <li>
                <a class="link" role="menuitem" href="<?= hrefMake("{$v['lang']}/Anime&f=letters_$letter") ?>">
                    <?=$letter?>
                </a>
            </li>
            <?php endforeach;?>
        </ul>
        <?php foreach ($v['filters'] as $key => $filter): ?>
        <li class="letra-link" id='<?=$filter['id']?>' onclick="tooglefilter(event.target)"
            title="<?=$filter['title']?>">
            <div class='link collapsed' role="button">
                <?=$filter['title']?> ↓
            </div>
        </li>
        <?php endforeach;?>
    </ul>
    <ul class="list" id="genere-list">
        <?php if (!empty($v['generes'])): ?>
        <?php foreach ($v['generes'] as $genere): ?>
        <li>
            <a class='link' href="<?= hrefMake("{$v['lang']}/Anime&f=generes_{$genere['filter']}") ?>">
                <?=$genere['filter']?>
            </a>
        </li>
        <?php endforeach;?>
        <?php endif;?>
    </ul>
    <ul class="list" id="year-list">
        <?php if (!empty($v['years'])): ?>
        <?php foreach ($v['years'] as $years): ?>
        <li>
            <a class='link' href="<?= hrefMake("{$v['lang']}/Anime&f=years_$years") ?>">
                <?=$years?>
            </a>
        </li>
        <?php endforeach;?>
        <?php endif;?>
    </ul>
    <ul class="list" id="kind-list">
        <?php foreach ($v['kinds'] as $kinds): ?>
        <li>
            <a class='link' href="<?= hrefMake("{$v['lang']}/Anime&f=kinds_$kinds") ?>">
                <?=$kinds?>
            </a>
        </li>
        <?php endforeach;?>
    </ul>
    <ul class="list" id="languaje-list">
        <?php if (!empty($v['languajes'])): ?>
        <?php foreach ($v['languajes'] as $languaje): ?>
        <li>
            <a class='link' href="<?= hrefMake("{$v['lang']}/Anime&f=languajes_$languaje") ?>">
                <?=$languaje?>
            </a>
        </li>
        <?php endforeach;?>
        <?php endif;?>
    </ul>
    <ul class="list" id="temporadas-list">
        <?php if (!empty($v['temporadas'])): ?>
        <?php foreach ($v['temporadas'] as $temporada): ?>
        <li>
            <a class='link' href="<?= hrefMake("{$v['lang']}/Anime&f=temporadas_$temporada") ?>">
                <?=$temporada?>
            </a>
        </li>
        <?php endforeach;?>
        <?php endif;?>
    </ul>
</div>
        )
    }
}

export default Filters
