

import { expectQuotedString } from "../definition/api.generated"

export const $$:expectQuotedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'quote') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}