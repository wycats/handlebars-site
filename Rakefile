require "bundler/setup"

desc "Build the website"
task :build do
  system "staticmatic build ."
end

task :man do
  # @TODO
end

desc "Deploy the website to github pages"
task :deploy do |t, args|
  require "highline/import"
  message = ask("Provide a deployment message:  ") do |q|
    q.validate = /\w/
    q.responses[:not_valid] = "Can't be empty."
  end

  system "staticmatic build ."

  Dir.chdir "site" do
    File.open("CNAME", "w") do |file|
      file.puts "handlebarsjs.com"
    end

    unless File.exist?(".git")
      system "git init"
      system "git remote add github https://github.com/wycats/handlebars-site.git"
    end

    system "git fetch github"
    system "git add -A"
    system "git commit -m '#{message.gsub("'", "\\'")}'"
    system "git rebase github/gh-pages"
    system "git push github master:gh-pages"
  end
end

