

import { A } from "../api.generated"

export const $$: A.createExpectQuotedString = () => {
    return ($, $i) => {
        return ($) => {
            if ($.token.wrapping[0] !== 'quote') {
                $i.unexpected(null)
            }
            $i.handler($)
        }
    }
}