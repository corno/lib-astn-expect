
import * as uglystuff from "res-pareto-ugly-stuff"

import * as test from "../imp"


test.createTestContext(
    {
        callback: ($) => {

            test.doTests($)
        }
    },
    {
        ctc: {
            createDummyValueHandler: test.createDummyValueHandler,
            arrayLength: uglystuff.$.arrayLength,
            push: uglystuff.$.push,
            getElement: uglystuff.$.getElement,
            includes: uglystuff.$.includes,
        },
        JSONStringify: uglystuff.$.jsonStringify,
        toRawArray: uglystuff.$.toRawArray,
        toRawDictionary: uglystuff.$.toRawDictionary,

    }
)
