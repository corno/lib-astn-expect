import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "create handlers that will validate that the received data is according to expectations",
    'license': "TBD",

    'dependencies': d({
        "lib-astn-dummyhandlers": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': glossary,
                'api': api,
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}