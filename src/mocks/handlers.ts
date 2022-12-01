/* eslint-disable import/no-extraneous-dependencies */
import { graphql } from 'msw';

import { project, chat } from './data';

export const handlers = [
    graphql.query('project', (req, res, ctx) =>
        res(
            ctx.data({
                project
            })
        )
    ),
    graphql.mutation('updateProject', (req, res, ctx) =>
        res(
            ctx.data({
                project
            })
        )
    ),
    graphql.mutation('deleteProject', (req, res, ctx) =>
        res(
            ctx.data({
                project
            })
        )
    ),

    graphql.mutation('createChat', (req, res, ctx) =>
        res(
            ctx.delay(2000),
            ctx.data({
                chat
            })
        )
    )
];
