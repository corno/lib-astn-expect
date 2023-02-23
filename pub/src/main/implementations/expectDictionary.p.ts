
import * as mapi from "../api"

export const $$: mapi.CexpectDictionary = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'dictionary') {
            $i.unexpected(null)
        }
     return   $i.handler($)
    }
}