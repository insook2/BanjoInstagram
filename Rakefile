#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
ENV['USE_JASMINE_RAKE'] = 'true'
ENV['JASMINE_SPEC_FORMAT'] = 'documentation'

require File.expand_path('../config/application', __FILE__)

Banjo::Application.load_tasks
