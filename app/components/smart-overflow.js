import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['smart-overflow'],
  didInsertElement() {
    this._super(...arguments);
    var $headerSpan = this.$('span');
    var $header = this.$();
    $header.attr('data-content', $headerSpan.text());
    $header.attr('data-variation', 'tiny');
    while ($headerSpan.outerHeight() > $header.height()) {
      $headerSpan.text((index, text) => {
        return text.replace(/\W*\s(\S)*$/, '...');
      });
      $header.popup({
        position: 'top center'
      });
      this.set('$header', $header);
    }
  },
  willDestroyElement() {
    this._super(...arguments);
    if (this.get('$header')) {
      this.get('$header').popup('destroy');
    }
  }
});
