class Appointment < ApplicationRecord
    belongs_to :service
    belongs_to :stylist
    belongs_to :client

    validates :stylist_id, presence: true
    validates :client_id, presence: true
    validates :service_id, presence: true
    validates :date, presence: true
    validates :time, presence: true

    validate :date_check

    def date_check
        app = Appointment.find_by(stylist_id: self.stylist_id, date: self.date, time: self.time)
        if app
            errors.add(:time, message:"not available on this date with this provider")
        end
    end

    def time_format
        self.time.strftime("%l:%M %p").strip
    end

    def date_format
        self.date.strftime("%B %e, %Y").strip
    end
end
