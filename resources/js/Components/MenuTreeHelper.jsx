import $ from 'jquery';
// global.jQuery = $;

export function loadTreeview() {
    $('[data-widget="treeview"]').each(function () {
        if ($(this).data('treeview-init') === undefined) {
            $(this).Treeview('init');
            $(this).data('treeview-init', true);
        }
    });
}