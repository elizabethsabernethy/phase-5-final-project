class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def show
        appointment = Appointment.find()
        render json:  appointment
    end

    def index
        appointments = Appointment.all
        render json: appointment
    end

    def create
        client = Client.find_by(id: session[:user_id])
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end
    
    def update
        appointment = Client.find_by(id: session[:user_id]).appointments.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = Client.find_by(id: session[:user_id]).appointments.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params
        params.permit(:stylist_id, :client_id, :service_id, :date, :time)
    end

    def render_not_found_response
        render json: { error: "Appointment not found" }, status: :not_found
    end
end
