import './ProjectChats.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import {
    useProjectQuery,
    ProjectQueryVariables,
    Chat,
    CreateChatMutationVariables,
    useCreateChatMutation
} from '@/graphql/generated';

import { Chats } from '../../molecules/Chats';

export type ProjectChatsProps = {
    className?: string;
};
ProjectChats.defaultProps = {
    className: ''
};

export function ProjectChats({ className }: ProjectChatsProps) {
    const [chats, setChats] = useState<Chat[]>([]);
    const { id, taskId } = useParams();
    const queryClient = useQueryClient();
    const query = useProjectQuery({ id: id as string });
    const mutator = useCreateChatMutation();
    const form = useForm<CreateChatMutationVariables>();

    useEffect(() => {
        if (!query.isLoading) {
            setChats(query.data?.project.chats as Chat[]);
        }
    }, [query.isLoading, query.data?.project.chats]);

    const onSend = async () => {
        const data: CreateChatMutationVariables = {
            content: form.getValues('content'),
            project_id: id as string,
            task_id: taskId
        };
        form.setValue('content', '');
        await mutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id } as ProjectQueryVariables
        ]);
    };

    return (
        <Chats
            className={`ProjectChats ${className}`}
            chats={chats}
            onSend={onSend}
            config={form.register('content', {
                required: true
            })}
            buttonDisabled={!form.formState.isValid || mutator.isLoading}
        />
    );
}
