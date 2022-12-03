import './TaskChats.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import {
    useTaskQuery,
    ProjectQueryVariables,
    TaskQueryVariables,
    Chat,
    CreateChatMutationVariables,
    useCreateChatMutation
} from '@/graphql/generated';

import { Chats } from '../../molecules/Chats';

export type TaskChatsProps = {
    className?: string;
};
TaskChats.defaultProps = {
    className: ''
};

export function TaskChats({ className }: TaskChatsProps) {
    const [chats, setChats] = useState<Chat[]>([]);
    const { id, taskId } = useParams();
    const queryClient = useQueryClient();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const mutator = useCreateChatMutation();
    const form = useForm<CreateChatMutationVariables>();

    useEffect(() => {
        if (!query.isLoading) {
            setChats(query.data?.task?.chats as Chat[]);
        }
    }, [query.isLoading, query.data?.task?.chats]);

    const onSend = async () => {
        const data: CreateChatMutationVariables = {
            content: form.getValues('content'),
            project_id: id as string,
            task_id: taskId
        };
        form.setValue('content', '');
        await mutator.mutateAsync(data);
        if (taskId) {
            await queryClient.invalidateQueries([
                'task',
                { project_id: id, id: taskId } as TaskQueryVariables
            ]);
        } else {
            await queryClient.invalidateQueries([
                'project',
                { id } as ProjectQueryVariables
            ]);
        }
    };

    return (
        <Chats
            className={`TaskChats ${className}`}
            chats={chats}
            onSend={onSend}
            config={form.register('content', {
                required: true
            })}
            buttonDisabled={!form.formState.isValid || mutator.isLoading}
        />
    );
}
