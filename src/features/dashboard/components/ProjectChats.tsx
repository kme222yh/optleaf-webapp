import * as React from 'react'
import { useParams } from 'react-router-dom';
import { useProjectQuery, useCreateChatMutation, CreateChatMutationVariables } from '@/graphql/generated'
import { useForm } from 'react-hook-form'

import { Loading } from './Loading'


export function ProjectChats() {
    const { projectId, taskId } = useParams();
    const project = useProjectQuery({ id: projectId });
    const chats = project?.data?.project?.chats;
    const chatMutator = useCreateChatMutation();
    const chatForm = useForm<CreateChatMutationVariables>(
        {
            defaultValues: {
                project_id: projectId as string,
                task_id: taskId as string,
            }
        }
    );

    const $chatList: React.ReactNode[] = [];
    if (project.isLoading === false && chats?.length) {
        chats.forEach(chat => {
            $chatList.push(
                <li className="chatList-item" key={chat?.id}>
                    <div className="chatList-item-icon">
                        <div className="chatList-item-icon-circle" />
                    </div>
                    <div className="chatList-item-content">
                        <p className="chatList-item-author">名無さん</p>
                        <p className='chatList-item-text'>{chat?.content}</p>
                    </div>
                    <small className='chatList-item-date'>{chat?.created_at}</small>
                </li>
            )
        })
    }

    const chatIsValid = async (chatData: CreateChatMutationVariables) => {
        await chatMutator.mutateAsync(chatData);
        chatForm.reset();
    }
    const chatIsInValid = async (erros: any) => {
        console.log('Fail to post chat.');
    }

    return (
        <div className="chatList">
            {project.isLoading || chatForm.formState.isSubmitting ? <Loading /> : null}
            <div className="chatList-wrap">
                <ul className="chatList-body">
                    {$chatList}
                </ul>
            </div>
            <div className="chatList-form">
                <form className="chatList-form-body" onSubmit={chatForm.handleSubmit(chatIsValid, chatIsInValid)} >
                    <div className='chatList-form-buttons'>
                        <button type='submit' className='send'>send</button>
                    </div>
                    <textarea className='chatList-form-input' placeholder='メッセージを入力…' {...chatForm.register('content', { required: '入力してください' })} />
                </form>
            </div>
        </div>
    );
}