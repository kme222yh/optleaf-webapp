/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './TeamAccessRestrictionModal.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    TeamQueryVariables,
    UpdateTeamMutationVariables,
    useTeamQuery,
    useUpdateTeamMutation
} from '@/graphql/generated';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { RoundedButton } from '../../atoms/RoundedButton';

export type TeamAccessRestrictionModalProps = {
    className?: string;
};
TeamAccessRestrictionModal.defaultProps = {
    className: ''
};

export function TeamAccessRestrictionModal({
    className
}: TeamAccessRestrictionModalProps) {
    const { teamId } = useParams();
    const teamQuery = useTeamQuery({ id: teamId as string });
    const teamMutator = useUpdateTeamMutation();
    const queryClient = useQueryClient();
    const [restriction, setRestriction] = useState<
        'owner' | 'administrators' | ''
    >('');
    const [waiting, setWaiting] = useState(false);
    const modal = useModalManageStore();

    useEffect(() => {
        if (teamQuery.isLoading) return;
        if (!teamQuery.data) return;
        const { team } = teamQuery.data;
        setRestriction(
            team.permission_level as 'owner' | 'administrators' | ''
        );
    }, [teamQuery.isLoading, teamQuery.data]);

    const updateFn = async () => {
        if (teamQuery.isLoading) return;
        setWaiting(true);
        const data = {
            id: teamId,
            permission_level: restriction
        } as UpdateTeamMutationVariables;
        await teamMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'team',
            { id: teamId } as TeamQueryVariables
        ]);
        modal.close();
        setWaiting(false);
    };

    return (
        <div className={`TeamAccessRestrictionModal ${className}`}>
            <ScreenSpinner visible={waiting} />
            <div className="TeamAccessRestrictionModal-body">
                <p className="TeamAccessRestrictionModal-title">
                    Change access restriction
                </p>
                <ul className="TeamAccessRestrictionModal-list">
                    <li
                        className={`TeamAccessRestrictionModal-item ${
                            restriction === 'owner' ? 'selected' : ''
                        }`}
                        onClick={() => setRestriction('owner')}
                    >
                        <p className="TeamAccessRestrictionModal-name">owner</p>
                        <p className="TeamAccessRestrictionModal-text">
                            team edit : owner only
                        </p>
                    </li>
                    <li
                        className={`TeamAccessRestrictionModal-item ${
                            restriction === 'administrators' ? 'selected' : ''
                        }`}
                        onClick={() => setRestriction('administrators')}
                    >
                        <p className="TeamAccessRestrictionModal-name">admin</p>
                        <p className="TeamAccessRestrictionModal-text">
                            team edit : admin or above
                        </p>
                    </li>
                </ul>
                <RoundedButton text="confirm" onClick={updateFn} />
            </div>
        </div>
    );
}
