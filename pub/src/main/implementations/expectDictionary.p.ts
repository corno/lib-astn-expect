import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectDictionary = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'dictionary') {
            $i.unexpected(null)
        }
     return   $i.handler($)
    }
}