
import * as mapi from "../api"

export const $$: mapi.CexpectApostrophedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'apostrophe') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}