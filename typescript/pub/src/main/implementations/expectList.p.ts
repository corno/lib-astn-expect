

import { CexpectList } from "../definition/api.generated"

export const $$:CexpectList = ($, $i) => {
    return ($) => {
        if ($.token.type[0] !== 'list') {
            $i.unexpected(null)
        }
        return $i.handler($)
    }
}