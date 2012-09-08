class SearchController < ApplicationController
  #POST /search

  def create
    response = make_request()
    render json: response.body
  end

  private

  def make_request()
    uri = URI('https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e')
    Typhoeus::Request.get uri.to_s
  end
end