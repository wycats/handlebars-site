# Handlebars Site

Source for handlebarsjs.com

## Building

`ruby` needs to be installed.

* Install bundler: `sudo gem install bundle`
* Install dependencies: `bundle`
* Update the site: `bundle exec rake build`
* Preview the site: `bundle exec rake preview`, then open http://localhost:3000
* Remove the site-directory
* Deploy: `bundle exec rake deploy`
* Commit and push