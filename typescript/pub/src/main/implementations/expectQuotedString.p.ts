

import { CexpectQuotedString } from "../definition/api.generated"

export const $$:CexpectQuotedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'quote') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}