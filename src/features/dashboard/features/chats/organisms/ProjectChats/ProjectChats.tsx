import './ProjectChats.scoped.scss';

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
    const { id, taskId } = useParams();
    const queryClient = useQueryClient();
    const query = useProjectQuery({ id: id as string });
    const mutator = useCreateChatMutation();
    const form = useForm<CreateChatMutationVariables>();

    const chats = (query.isLoading ? [] : query.data?.project.chats) as Chat[];

    const onSend = async () => {
        const data: CreateChatMutationVariables = {
            content: form.getValues('content'),
            project_id: id as string,
            task_id: taskId
        };
        await mutator.mutateAsync(data);
        form.setValue('content', '');
        await queryClient.resetQueries([
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
