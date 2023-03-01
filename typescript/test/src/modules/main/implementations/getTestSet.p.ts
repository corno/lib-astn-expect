
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gpub from "../../../../../pub"
import * as gtest from "lib-pareto-test"

import { CgetTestSet } from "../api"

export const $$:CgetTestSet = () => {

        const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>(  )
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                'type': ['test', {
                    type: ['short string', {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pa.asyncValue({
            elements: builder.getDictionary()
        })
    }