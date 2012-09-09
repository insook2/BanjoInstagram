require 'spec_helper'

describe "StaticPages" do
  describe "home page" do
    it "should have the right css elements" do
      visit '/'
      within 'h1' do
        page.should have_content('Popular Images From Instagram')
      end
      within '#main_container' do
        page.should have_css('#instagram')
      end
    end
  end
end