require "bundler/setup"

task :build do
  system "staticmatic build ."
end

task :man do
  # @TODO
end

task :release => [:build, :man] do
  Dir.chdir("site") { Bundler.with_clean_env { system ENV["CMD"] } }
end

