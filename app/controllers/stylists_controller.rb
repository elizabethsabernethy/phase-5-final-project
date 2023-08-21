class StylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        stylists = Stylist.all.order(name: :asc)
        render json: stylists
    end

    private

    def stylist_params
        params.permit(:name, :job_title)
    end

    def render_not_found_response
        render json: { error: "Stylist not found" }, status: :not_found
    end
end
