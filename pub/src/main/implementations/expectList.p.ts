
import * as mapi from "../api"

export const $$: mapi.CexpectList = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'list') {
            $i.unexpected(null)
        }
        return $i.handler($)
    }
}