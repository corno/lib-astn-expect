

import { A } from "../api.generated"

export const $$: A.createExpectDictionary = () => {
    ($is) => {
        return ($) => {
            if ($.token.type[0] !== 'dictionary') {
                $is.unexpected(null)
            }
            return $is.handler($)
        }
    }
}