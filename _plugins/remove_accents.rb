require 'i18n'

module Jekyll
  module RemoveAccentsFilter
    # Initialize the I18n library with the default locale
    I18n.config.available_locales = :en

    # Define the remove_accents filter
    def remove_accents(input)
      # Use I18n to normalize and remove accents
      I18n.transliterate(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RemoveAccentsFilter)
