

import { CexpectDictionary } from "../definition/api.generated"

export const $$:CexpectDictionary = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'dictionary') {
            $i.unexpected(null)
        }
     return   $i.handler($)
    }
}