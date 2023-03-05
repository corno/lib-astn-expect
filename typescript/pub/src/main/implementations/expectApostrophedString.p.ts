

import { expectApostrophedString } from "../definition/api.generated"

export const $$:expectApostrophedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'apostrophe') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}