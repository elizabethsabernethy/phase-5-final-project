class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize, only: [:show]   

    def show
        client = Client.find_by(id: session[:user_id])
        render json:  client
    end

    def create
        user = Client.create(client_params)
        if user.valid?
            session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        client = Client.find(params[:id])
        client.update!(client_params)
        render json: client, status: :updated
    end

    def destroy
        client = Client.find(params[:id])
        client.destroy
        head :no_content
    end

    private

    def client_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "Client not found" }, status: :not_found
    end

end