/* eslint-disable import/no-extraneous-dependencies */
import { graphql } from 'msw';

import { project, chat, task, sub1Task, sub2Task } from './data';

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
            ctx.delay(1000),
            ctx.data({
                chat
            })
        )
    ),

    graphql.query('task', (req, res, ctx) => {
        const { id } = req.variables;
        let data = task;
        // if((id??'').match('^root')){
        //     data = task;
        // }
        if ((id ?? '').match('^sub1')) {
            data = sub1Task;
        }
        if ((id ?? '').match('^sub2')) {
            data = sub2Task;
        }
        return res(
            ctx.delay(1000),
            ctx.data({
                task: data
            })
        );
    }),
    graphql.mutation('createTask', (req, res, ctx) =>
        res(
            ctx.delay(1000),
            ctx.data({
                task
            })
        )
    )
];
