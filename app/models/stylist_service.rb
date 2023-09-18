class StylistService < ApplicationRecord
    belongs_to :service
    belongs_to :stylist

    validate :relation_check

    def relation_check
        relation = StylistService.find_by(stylist_id: self.stylist_id, service_id: self.service_id)
        if relation
            errors.add("not unique")
        end
    end
end
