jQuery(function($) {

  var ERROR_TEMPLATE = Handlebars.compile('Error: {{error}}')

  function Try(template, data, output) {
    var render     = $.proxy(this.render, this);
    this.$template = $(template).bind('blur', render);
    this.$data     = $(data).bind('blur', render);
    this.$output   = $(output);
  }

  Try.prototype.render = function() {
    var template, data, result;

    try {
      data = JSON.parse( this.$data.val() );
      template = Handlebars.compile( this.$template.val() );
    } catch(e) {
      data = { error: e };
      template = ERROR_TEMPLATE;
    }

    this.$output.text( template(data) );
  }

  new Try(
    '#try-hanldebars-template',
    '#try-hanldebars-data',
    '#try-handlebars-output'
  ).render()

});
