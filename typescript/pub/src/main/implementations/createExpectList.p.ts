

import { A } from "../api.generated"

export const $$: A.createExpectList = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'list') {
            $i.unexpected(null)
        }
        return $i.handler($)
    }
}