require "uv"
require "haml/filters"

module Haml
  module Filters
    module Highlight_Ruby
      include Base

      def render(text)
        text = text.strip
        result = Uv.parse( text, "xhtml", "ruby", false, "sunburst")
        Haml::Helpers.preserve result
      end
    end

    module Javascript
      include Base

      remove_method :render_with_options

      def render(text)
        text = text.strip
        result = Uv.parse( text, "xhtml", "javascript", false, "sunburst")
        Haml::Helpers.preserve result
      end
    end

    module Html
      include Base

      def render(text)
        text = text.strip
        result = Uv.parse( text, "xhtml", "html", false, "sunburst")
        Haml::Helpers.preserve result
      end
    end

    module Highlight_Plain
      include Base

      def render(text)
        result = "<pre class='sunburst'>#{Haml::Helpers.preserve(text)}</pre>"
      end
    end
  end
end
