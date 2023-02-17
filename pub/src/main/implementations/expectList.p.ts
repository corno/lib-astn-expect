import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CexpectList = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'list') {
            $i.unexpected(null)
        }
        return $i.handler($)
    }
}