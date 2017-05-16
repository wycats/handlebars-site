# Handlebars Site

Source for handlebarsjs.com

## Building

`ruby` needs to be installed.

* Install bundler: `sudo gem install bundle`
* Install dependencies: `bundle`
* Update the site: `bundle exec rake build`
* Look at the result in `site`
* Remove the site-directory
* Deploy: `bundle exec rake deploy`
* Commit and push