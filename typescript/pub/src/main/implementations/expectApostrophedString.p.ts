

import { CexpectApostrophedString } from "../definition/api.generated"

export const $$:CexpectApostrophedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'apostrophe') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}