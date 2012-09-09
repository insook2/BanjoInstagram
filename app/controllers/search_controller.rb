class SearchController < ApplicationController
  #POST /search

  def show
    uri = URI('https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e')
    response = Typhoeus::Request.get uri.to_s
            puts '*'* 80
    render json: response.body
  end

  private

end