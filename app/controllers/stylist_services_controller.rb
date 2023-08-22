class StylistServicesController < ApplicationController

    def index
        stylist_service = Stylist_Service.all
        render json: stylist_service
    end
end
