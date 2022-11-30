/* eslint-disable import/no-extraneous-dependencies */
import { graphql } from 'msw';

export const handlers = [
    graphql.query('project', (req, res, ctx) => {
        const project = {
            id: 'm0c25utmc23ut',
            name: 'Test Project',
            description:
                'This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. ',
            owner: {
                ID: '00000000000',
                icon_image: '',
                name: 'test user'
            },
            created_at: '2022/12/2',
            grant: {
                dangerZone: true,
                edit: true,
                operateTask: true
            }
        };
        return res(
            ctx.data({
                project
            })
        );
    }),

    graphql.mutation('updateProject', (req, res, ctx) => {
        const project = {
            id: 'm0c25utmc23ut'
        };
        return res(
            ctx.data({
                project
            })
        );
    }),

    graphql.mutation('deleteProject', (req, res, ctx) => {
        const project = {
            id: 'm0c25utmc23ut'
        };
        return res(
            ctx.data({
                project
            })
        );
    })
];
