

import { A } from "../api.generated"

export const $$: A.createExpectDictionary = () => {
    ($, $i) => {
        return ($) => {
            if ($.token.type[0] !== 'dictionary') {
                $i.unexpected(null)
            }
            return $i.handler($)
        }
    }
}