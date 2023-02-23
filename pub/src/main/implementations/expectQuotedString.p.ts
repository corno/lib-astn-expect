
import * as mapi from "../api"

export const $$: mapi.CexpectQuotedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'quote') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}