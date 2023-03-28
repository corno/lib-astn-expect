import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "create handlers that will validate that the received data is according to expectations",
    'license': "TBD",

    'dependencies': d({
        "lib-astn-dummyhandlers": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "h": external("glo-astn-handlers"),
                    }),

                },
                'api': {
                    'root': api,
                    'imports': d({
                        "this": this_(),
                    }),
                },
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({
        }),
        'bindings': [false],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}