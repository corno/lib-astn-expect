

import { A } from "../api.generated"

export const $$: A.createExpectApostrophedString = () => {

    return ($is) => {
        return ($) => {
            if ($.token.wrapping[0] !== 'apostrophe') {
                $is.unexpected(null)
            }
            $is.handler($)
        }
    }
}