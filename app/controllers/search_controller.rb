class SearchController < ApplicationController
  #GET /search

  def show
    response = get_response

    length = response.body.size
    if length > 0
      render json: response.body
    else
      head 204
    end
  end

  def get_response
    uri = URI('https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e')
    Typhoeus::Request.get uri.to_s
  end

end