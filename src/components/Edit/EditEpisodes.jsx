 <div class="form_oculto"><?= $v["web"]->render('Edit_Episodes'); ?></div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['episode'])) : ?>
        <?php foreach ($v['episode'] as $key => $episode) : ?>
            <div class="list_element" elem='<?=$episode['id'] ?>' onclick="expand(event.currentTarget, 901)">
                <div class="img" style='background: url("<?= $episode['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $episode['num'] ?></div>
            </div>
            <?= $v["web"]->render('Edit_Episodes', $episode); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= $v["web"]->render('Edit_Episodes'); ?>
    <?php endif; ?> 