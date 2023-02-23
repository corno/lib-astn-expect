


import { CexpectQuotedString } from "../api"

export const $$:CexpectQuotedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'quote') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}