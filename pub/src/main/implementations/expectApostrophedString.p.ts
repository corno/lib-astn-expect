import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectApostrophedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'apostrophe') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}