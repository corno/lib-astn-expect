import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectQuotedString = ($, $i) => {
    return ($) => {
        if ($.token.wrapping[0] !== 'quote') {
            $i.unexpected(null)
        }
        $i.handler($)
    }
}