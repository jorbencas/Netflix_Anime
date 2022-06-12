 <div class="form_oculto"><?= $v["web"]->render('Edit_Openings'); ?> </div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['opening'])) : ?>
        <?php foreach ($v['opening'] as $key => $opening) : ?>
            <div class="list_element" elem='<?=$opening['id'] ?>' onclick="expand(event.currentTarget, 701)">
                <div class="img" style='background: url("<?= $opening['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $opening['num'] ?></div>
            </div>
            <?= $v["web"]->render('Edit_Openings', $opening); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= $v["web"]->render('Edit_Openings'); ?>
    <?php endif; ?> 