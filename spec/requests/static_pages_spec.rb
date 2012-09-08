require 'spec_helper'

describe "StaticPages" do
  describe "home page" do
    it "should have the right css elements " do
      visit '/'
      page.should have_css('#instagram')
    end
  end
end
