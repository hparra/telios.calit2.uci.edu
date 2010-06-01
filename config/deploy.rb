default_run_options[:pty] = true
ssh_options[:forward_agent] = true

set :application, "telios"
set :domain, "marco.calit2.uci.edu"
set :deploy_to, "/var/www/telios"
set :use_sudo, true

#set :user, "hparra" # only Hector can upgrade
set(:user) do
  Capistrano::CLI.ui.ask "Give me a ssh user: "
end

set :scm, :git
set :repository,  "git@github.com:hparra/telios.calit2.uci.edu.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :git_enable_submodules, 1

role :app, domain
role :web, domain
role :db,  domain, :primary => true

namespace :deploy do
  
  desc "Restart Application (not really)"
  task :restart, :roles => :app do
    # does nothing
  end
  
end