$(document).ready(function () {
    $('.hide').hide();
    $('.infos-plus').click(function () {
        $(this).parent().siblings('.div2').find('p.hide').fadeToggle();
        return false;
    });
});
