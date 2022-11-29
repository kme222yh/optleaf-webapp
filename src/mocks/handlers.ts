/* eslint-disable import/no-extraneous-dependencies */
import { graphql } from 'msw';

export const handlers = [
    graphql.query('project', (req, res, ctx) => {
        console.log('hoge');
        return res(
            ctx.data({
                project: {
                    name: 'hoge',
                }
            })
        );
    })
];
