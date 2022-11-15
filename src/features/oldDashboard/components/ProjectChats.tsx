import '../scss/ProjectChats.scss';

import * as React from 'react';
import { useParams } from 'react-router-dom';
import {
    useChatsQuery,
    useCreateChatMutation,
    CreateChatMutationVariables
} from '@/graphql/generated';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import { InfoBlock } from '../layout/InfoBlock';

export function ProjectChats() {
    const { projectId, taskId } = useParams();
    const query = useChatsQuery({
        project_id: projectId as string,
        task_id: taskId
    });
    const chats = query?.data?.chats;
    const queryQrient = useQueryClient();
    const chatMutator = useCreateChatMutation();
    const chatForm = useForm<CreateChatMutationVariables>({
        defaultValues: {
            project_id: projectId as string,
            task_id: taskId
        }
    });

    const $chatList: React.ReactNode[] = [];
    if (query.isLoading === false && chats?.length) {
        chats.forEach((chat) => {
            $chatList.push(
                <li className="ProjectChats-item" key={chat?.id}>
                    <div className="ProjectChats-item-icon">
                        <div className="ProjectChats-item-icon-circle" />
                    </div>
                    <div className="ProjectChats-item-content">
                        <p className="ProjectChats-item-author">名無さん</p>
                        <p className="ProjectChats-item-text">
                            {chat?.content}
                        </p>
                    </div>
                    <small className="ProjectChats-item-date">
                        {chat?.created_at}
                    </small>
                </li>
            );
        });
    }

    const chatIsValid = async (chatData: CreateChatMutationVariables) => {
        await chatMutator.mutateAsync(chatData);
        chatForm.reset();
        await queryQrient.resetQueries([
            'chats',
            {
                project_id: projectId as string,
                task_id: taskId
            }
        ]);
    };

    return (
        <InfoBlock
            className="ProjectChats"
            isLoading={query.isLoading || chatForm.formState.isSubmitting}
        >
            <div className="ProjectChats-wrap">
                <ul className="ProjectChats-body">{$chatList}</ul>
            </div>
            <div className="ProjectChats-form">
                <form
                    className="ProjectChats-form-body"
                    onSubmit={chatForm.handleSubmit(chatIsValid)}
                >
                    <div className="ProjectChats-form-buttons">
                        <button type="submit" className="send">
                            send
                        </button>
                    </div>
                    <textarea
                        className="ProjectChats-form-input"
                        placeholder="メッセージを入力…"
                        {...chatForm.register('content', {
                            required: '入力してください'
                        })}
                    />
                </form>
            </div>
        </InfoBlock>
    );
}
