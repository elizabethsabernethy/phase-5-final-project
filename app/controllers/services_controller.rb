class ServicesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        services = Service.all.order(name: :asc)
        render json: services
    end

    private

    def render_not_found_response
        render json: { error: "Service not found" }, status: :not_found
    end
end
