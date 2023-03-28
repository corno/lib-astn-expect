
import * as g_h from "glo-astn-handlers"

import { A } from "../api.generated"

export const $$: A.createUnexpectedValueHandler = () => {

    return ($i) => {

        function createDummyObjectHandler<PAnnotation>():g_h.ASYNC.I.ObjectHandler<PAnnotation> {
            return {
                'data': {
                    'property': () => {
                        return createDummyRequiredValueHandler()
                    },
                    'anonymousProperty': () => {
                        return createDummyValueHandler()
                    },

                },
                'end': () => { },
            }
        }
        function createDummyArrayHandler<PAnnotation>():g_h.ASYNC.I.ArrayHandler<PAnnotation> {
            return {
                'data': () => {
                    return createDummyValueHandler()
                },
                'end': () => { }
            }
        }
        function createDummyTaggedUnionHandler<PAnnotation>():g_h.ASYNC.I.TaggedUnionHandler<PAnnotation> {
            return {
                option: () => createDummyRequiredValueHandler(),
                missingOption: () => createDummyRequiredValueHandler(),
            }
        }
        function createDummyValueHandler<PAnnotation>():g_h.ASYNC.I.ValueHandler<PAnnotation> {

            return {
                object: () => {
                    return createDummyObjectHandler()
                },
                array: () => {
                    return createDummyArrayHandler()
                },
                taggedUnion: () => {
                    return createDummyTaggedUnionHandler()
                },
                simpleString: () => {
                },
                multilineString: () => {
                }
            }
        }

        function createDummyRequiredValueHandler<PAnnotation>():g_h.ASYNC.I.RequiredValueHandler<PAnnotation> {
            return {
                'missing': () => {
                },
                'exists': createDummyValueHandler()
            }
        }
        return {
            'array': ($) => {
                $i({
                    'annotation': $.token.annotation,
                    'expected': $.expected,
                    'found': ['array', null],
                })
                return createDummyArrayHandler()
            },
            'multiline string': ($) => {
                $i({
                    'annotation': $.token.annotation,
                    'expected': $.expected,
                    'found': ['multiline string', null],
                })
            },
            'object': ($) => {
                $i({
                    'annotation': $.token.annotation,
                    'expected': $.expected,
                    'found': ['object', null],
                })
                return createDummyObjectHandler()
            },
            'simple string': ($) => {
                $i({
                    'annotation': $.token.annotation,
                    'expected': $.expected,
                    'found': ['simple string', null],
                })

            },
            'tagged union': ($) => {
                $i({
                    'annotation': $.token.annotation,
                    'expected': $.expected,
                    'found': ['tagged union', null],
                })
                return createDummyTaggedUnionHandler()
            },
        }
    }
}