class StylistServicesController < ApplicationController

    def index
        stylist_services = StylistService.all
        render json: stylist_services
    end
end
