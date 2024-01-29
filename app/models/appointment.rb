class Appointment < ApplicationRecord
    belongs_to :service
    belongs_to :stylist
    belongs_to :client

    validates :stylist_id, presence: true
    validates :client_id, presence: true
    validates :service_id, presence: true
    validates :date, presence: true
    validates :time, presence: true
    # validates :time, uniqueness: { scope: [:date, :stylist],
    #     message: "booked for this date with this stylist" }

    validate :date_check

    def date_check
        same_day_apps = Appointment.where(:stylist_id => self.stylist_id, :date => self.date)
        same_day_apps_time_ranges = same_day_apps.map {|appointment| appointment.time_format_for_date_check}.map {|time| ((time - 3300)...(time + 3300))}
        app_time = self.time_format_for_date_check
        not_available = same_day_apps_time_ranges.map {|range| range.include?(app_time)}
        if not_available.include?(true)
            errors.add(:time, message:"overlaps with an existing appointment duration")
        end
    end

    def time_format_for_date_check
        app_time = self.time.strftime('%H:%M:%S')
        h = app_time.split(':').first.to_f
        m = app_time.split(':').second.to_f
        s = app_time.split(':').third.to_f
        tts = (h * 60 * 60) + (m * 60) + s
        time_in_sec = tts.to_i
    end

    def time_format
        self.time.strftime("%l:%M %p").strip
    end

    def form_time
        self.time.strftime("%k:%M").strip
    end

    def date_format
        self.date.strftime("%B %e, %Y").strip
    end

    def form_date
        self.date.strftime("%Y/%m/%d").strip
    end
end
