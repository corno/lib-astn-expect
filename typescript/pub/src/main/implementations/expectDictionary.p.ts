

import { expectDictionary } from "../definition/api.generated"

export const $$:expectDictionary = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'dictionary') {
            $i.unexpected(null)
        }
     return   $i.handler($)
    }
}