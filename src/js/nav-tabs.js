import $ from 'jquery';

export default (function() {
  const $navTabs = $('.js-nav-tabs');
  const $tabContent = $('.js-tab-content');

  $navTabs.on('click', '.js-nav-tab', function(e) {
    e.preventDefault();

    const $this = $(this);

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');

    const $tabContentTarget = $tabContent.children(this.hash);

    $tabContentTarget
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
})();
