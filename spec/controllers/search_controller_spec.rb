require 'spec_helper'

describe SearchController do
  describe '#show' do
    context 'when there is a valid response' do
      before do
        stub_request(:any, "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e").to_return(:body =>
                    '{"meta":{"code":200}, "data":[ {"attribution":null,
                              "images":{"low_resolution":{"url":"good_url","width":306,"height":306},
                              "caption":{"created_time":"1347149728",
                                         "text":"caption text",
                                         "id":"276234404848282980"},
                               "type":"image"}]}')
        get :show
      end
      subject { response.body }
      it { should == '{"meta":{"code":200}, "data":[ {"attribution":null,
                              "images":{"low_resolution":{"url":"good_url","width":306,"height":306},
                              "caption":{"created_time":"1347149728",
                                         "text":"caption text",
                                         "id":"276234404848282980"},
                               "type":"image"}]}' }
    end

    context 'when the response is empty' do
      before do
        stub_request(:any, "https://api.instagram.com/v1/media/popular?client_id=020a6a463e8845aab887d8304351ac7e").to_return(:body => '')
        get :show, format: 'json'
      end
      it { should respond_with(204) }
    end

  end
end