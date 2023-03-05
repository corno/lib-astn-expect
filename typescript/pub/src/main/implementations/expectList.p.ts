

import { expectList } from "../definition/api.generated"

export const $$:expectList = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'list') {
            $i.unexpected(null)
        }
        return $i.handler($)
    }
}