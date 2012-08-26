jQuery(function($) {

  var ERROR_TEMPLATE = Handlebars.compile('<div class="error">Error: {{error}}</div>')

  function Try(template, data, output) {
    var render     = $.proxy(this.render, this);
    this.$template = $(template).bind('blur', render);
    this.$data     = $(data).bind('blur', render);
    this.$output   = $(output);
  }

  Try.prototype.render = function() {
    var template = this.$template.val(),
        data,
        result;

    try {
      data = JSON.parse( this.$data.val() );
      template = Handlebars.compile( template );
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
