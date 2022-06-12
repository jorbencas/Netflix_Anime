<div class="form_oculto"><?= $v["web"]->render('Edit_Endings'); ?></div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['ending'])) : ?>
        <?php foreach ($v['ending'] as $key => $ending) : ?>
            <div class="list_element" elem='<?=$ending['id'] ?>' onclick="expand(event.currentTarget, 701)">
                <div class="img" style='background: url("<?= $ending['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $ending['num'] ?></div>
            </div>
            <?= $v["web"]->render('Edit_Endings', $ending); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= $v["web"]->render('Edit_Endings'); ?>
    <?php endif; ?>