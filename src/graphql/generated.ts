import { fetchParams } from '@/graphql/config';
import {
    useMutation,
    useQuery,
    UseMutationOptions,
    UseQueryOptions
} from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
    return async (): Promise<TData> => {
        const res = await fetch(import.meta.env.VITE_GRAPHQL_API as string, {
            method: 'POST',
            ...fetchParams,
            body: JSON.stringify({ query, variables })
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0];

            throw new Error(message);
        }

        return json.data;
    };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
    Date: any;
    /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
    DateTime: any;
};

export type Chat = {
    __typename?: 'Chat';
    content: Scalars['String'];
    created_at: Scalars['DateTime'];
    id: Scalars['String'];
    owner: User;
    owner_id: Scalars['Int'];
    updated_at?: Maybe<Scalars['DateTime']>;
};

export type Grant = {
    __typename?: 'Grant';
    dangerZone?: Maybe<Scalars['Boolean']>;
    edit: Scalars['Boolean'];
    operateTask?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createChat?: Maybe<Chat>;
    createProject?: Maybe<Project>;
    createTask?: Maybe<Task>;
    createTeam?: Maybe<Team>;
    deleteProject?: Maybe<Project>;
    deleteTask?: Maybe<Task>;
    deleteTeam?: Maybe<Team>;
    updateProject?: Maybe<Project>;
    updateTask?: Maybe<Task>;
    updateTeam?: Maybe<Team>;
};

export type MutationCreateChatArgs = {
    content: Scalars['String'];
    project_id: Scalars['String'];
    task_id?: InputMaybe<Scalars['String']>;
};

export type MutationCreateProjectArgs = {
    description: Scalars['String'];
    name: Scalars['String'];
};

export type MutationCreateTaskArgs = {
    description: Scalars['String'];
    name: Scalars['String'];
    project_id: Scalars['String'];
    task_id?: InputMaybe<Scalars['String']>;
};

export type MutationCreateTeamArgs = {
    description: Scalars['String'];
    name: Scalars['String'];
};

export type MutationDeleteProjectArgs = {
    id: Scalars['String'];
};

export type MutationDeleteTaskArgs = {
    id: Scalars['String'];
    project_id: Scalars['String'];
};

export type MutationDeleteTeamArgs = {
    id: Scalars['String'];
};

export type MutationUpdateProjectArgs = {
    administrators?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['String'];
    menbers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    name?: InputMaybe<Scalars['String']>;
    owner?: InputMaybe<Scalars['String']>;
    pending?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    permission_level?: InputMaybe<Scalars['String']>;
    teams?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutationUpdateTaskArgs = {
    assigned_menbers?: InputMaybe<Array<Scalars['Int']>>;
    completed?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    due_date?: InputMaybe<Scalars['String']>;
    id: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    parent_id?: InputMaybe<Scalars['String']>;
    project_id: Scalars['String'];
};

export type MutationUpdateTeamArgs = {
    administrators?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['String'];
    menbers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    name?: InputMaybe<Scalars['String']>;
    owner?: InputMaybe<Scalars['String']>;
    pending?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    permission_level?: InputMaybe<Scalars['String']>;
};

export type Project = {
    __typename?: 'Project';
    administrators: Array<User>;
    chats: Array<Chat>;
    created_at: Scalars['DateTime'];
    description: Scalars['String'];
    grant: Grant;
    id: Scalars['String'];
    menbers: Array<User>;
    name: Scalars['String'];
    owner: User;
    pending: Array<User>;
    permission_level: Scalars['String'];
    tasks: Array<Task>;
    teams: Array<Team>;
    updated_at?: Maybe<Scalars['DateTime']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
    __typename?: 'Query';
    project: Project;
    projects: Array<Project>;
    task?: Maybe<Task>;
    team: Team;
    teams: Array<Team>;
    /** Find a single user by an identifying attribute. */
    user?: Maybe<User>;
    /** List multiple users. */
    users: Array<User>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryProjectArgs = {
    id: Scalars['String'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryTaskArgs = {
    id: Scalars['String'];
    project_id: Scalars['String'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryTeamArgs = {
    id: Scalars['String'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryUserArgs = {
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type QueryUsersArgs = {
    name?: InputMaybe<Scalars['String']>;
};

export type Task = {
    __typename?: 'Task';
    assigned_menbers: Array<User>;
    chats: Array<Chat>;
    children: Array<Task>;
    completed: Scalars['Boolean'];
    created_at: Scalars['DateTime'];
    description: Scalars['String'];
    due_date: Scalars['String'];
    has_child: Scalars['Boolean'];
    id: Scalars['String'];
    name: Scalars['String'];
    owner: User;
    parent?: Maybe<Task>;
    tree: Array<Scalars['String']>;
    updated_at?: Maybe<Scalars['DateTime']>;
};

export type Team = {
    __typename?: 'Team';
    administrators: Array<User>;
    created_at: Scalars['DateTime'];
    description: Scalars['String'];
    grant: Grant;
    id: Scalars['String'];
    menbers: Array<User>;
    name: Scalars['String'];
    owner: User;
    pending: Array<User>;
    permission_level: Scalars['String'];
    updated_at?: Maybe<Scalars['DateTime']>;
};

/** Account of a person who utilizes this application. */
export type User = {
    __typename?: 'User';
    ID: Scalars['Int'];
    /** When the account was created. */
    created_at: Scalars['DateTime'];
    /** Unique email address. */
    email: Scalars['String'];
    /** When the email was verified. */
    email_verified_at?: Maybe<Scalars['DateTime']>;
    icon_image: Scalars['String'];
    /** Unique primary key. */
    id: Scalars['ID'];
    /** Non-unique name. */
    name: Scalars['String'];
    /** When the account was last updated. */
    updated_at: Scalars['DateTime'];
};

export type CreateChatMutationVariables = Exact<{
    project_id: Scalars['String'];
    task_id?: InputMaybe<Scalars['String']>;
    content: Scalars['String'];
}>;

export type CreateChatMutation = {
    __typename?: 'Mutation';
    createChat?: { __typename?: 'Chat'; id: string } | null;
};

export type ProjectQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type ProjectQuery = {
    __typename?: 'Query';
    project: {
        __typename?: 'Project';
        id: string;
        name: string;
        description: string;
        created_at: any;
        permission_level: string;
        owner: {
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        };
        administrators: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        menbers: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        pending: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        teams: Array<{ __typename?: 'Team'; id: string; name: string }>;
        tasks: Array<{
            __typename?: 'Task';
            id: string;
            name: string;
            completed: boolean;
            has_child: boolean;
        }>;
        chats: Array<{
            __typename?: 'Chat';
            id: string;
            content: string;
            created_at: any;
            owner: { __typename?: 'User'; name: string; icon_image: string };
        }>;
        grant: {
            __typename?: 'Grant';
            dangerZone?: boolean | null;
            edit: boolean;
            operateTask?: boolean | null;
        };
    };
};

export type CreateProjectMutationVariables = Exact<{
    name: Scalars['String'];
    description: Scalars['String'];
}>;

export type CreateProjectMutation = {
    __typename?: 'Mutation';
    createProject?: { __typename?: 'Project'; id: string } | null;
};

export type UpdateProjectMutationVariables = Exact<{
    id: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    menbers?: InputMaybe<
        Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>
    >;
    administrators?: InputMaybe<
        Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>
    >;
    teams?: InputMaybe<
        Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
    >;
    permission_level?: InputMaybe<Scalars['String']>;
}>;

export type UpdateProjectMutation = {
    __typename?: 'Mutation';
    updateProject?: {
        __typename?: 'Project';
        name: string;
        description: string;
        menbers: Array<{ __typename?: 'User'; ID: number; name: string }>;
        administrators: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
        }>;
        teams: Array<{ __typename?: 'Team'; id: string; name: string }>;
    } | null;
};

export type DeleteProjectMutationVariables = Exact<{
    id: Scalars['String'];
}>;

export type DeleteProjectMutation = {
    __typename?: 'Mutation';
    deleteProject?: { __typename?: 'Project'; id: string } | null;
};

export type TaskQueryVariables = Exact<{
    project_id: Scalars['String'];
    id: Scalars['String'];
}>;

export type TaskQuery = {
    __typename?: 'Query';
    task?: {
        __typename?: 'Task';
        id: string;
        name: string;
        description: string;
        completed: boolean;
        due_date: string;
        created_at: any;
        updated_at?: any | null;
        tree: Array<string>;
        owner: { __typename?: 'User'; ID: number; name: string };
        assigned_menbers: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
        }>;
        parent?: { __typename?: 'Task'; id: string } | null;
        children: Array<{
            __typename?: 'Task';
            id: string;
            name: string;
            completed: boolean;
            has_child: boolean;
        }>;
        chats: Array<{
            __typename?: 'Chat';
            id: string;
            content: string;
            created_at: any;
            owner: { __typename?: 'User'; name: string; icon_image: string };
        }>;
    } | null;
};

export type CreateTaskMutationVariables = Exact<{
    project_id: Scalars['String'];
    task_id?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    description: Scalars['String'];
}>;

export type CreateTaskMutation = {
    __typename?: 'Mutation';
    createTask?: { __typename?: 'Task'; id: string } | null;
};

export type UpdateTaskMutationVariables = Exact<{
    project_id: Scalars['String'];
    id: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    completed?: InputMaybe<Scalars['Boolean']>;
    due_date?: InputMaybe<Scalars['String']>;
    assigned_menbers?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
    parent_id?: InputMaybe<Scalars['String']>;
}>;

export type UpdateTaskMutation = {
    __typename?: 'Mutation';
    updateTask?: {
        __typename?: 'Task';
        id: string;
        parent?: { __typename?: 'Task'; id: string } | null;
    } | null;
};

export type DeleteTaskMutationVariables = Exact<{
    project_id: Scalars['String'];
    id: Scalars['String'];
}>;

export type DeleteTaskMutation = {
    __typename?: 'Mutation';
    deleteTask?: { __typename?: 'Task'; id: string } | null;
};

export type TeamQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type TeamQuery = {
    __typename?: 'Query';
    team: {
        __typename?: 'Team';
        id: string;
        name: string;
        description: string;
        created_at: any;
        permission_level: string;
        owner: {
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        };
        administrators: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        menbers: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        pending: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
            icon_image: string;
        }>;
        grant: {
            __typename?: 'Grant';
            dangerZone?: boolean | null;
            edit: boolean;
        };
    };
};

export type CreateTeamMutationVariables = Exact<{
    name: Scalars['String'];
    description: Scalars['String'];
}>;

export type CreateTeamMutation = {
    __typename?: 'Mutation';
    createTeam?: {
        __typename?: 'Team';
        id: string;
        name: string;
        description: string;
        owner: { __typename?: 'User'; ID: number; name: string };
        menbers: Array<{ __typename?: 'User'; ID: number; name: string }>;
        administrators: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
        }>;
    } | null;
};

export type UpdateTeamMutationVariables = Exact<{
    id: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    menbers?: InputMaybe<
        Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>
    >;
    administrators?: InputMaybe<
        Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>
    >;
    permission_level?: InputMaybe<Scalars['String']>;
}>;

export type UpdateTeamMutation = {
    __typename?: 'Mutation';
    updateTeam?: {
        __typename?: 'Team';
        id: string;
        name: string;
        description: string;
        owner: { __typename?: 'User'; ID: number; name: string };
        menbers: Array<{ __typename?: 'User'; ID: number; name: string }>;
        administrators: Array<{
            __typename?: 'User';
            ID: number;
            name: string;
        }>;
    } | null;
};

export type DeleteTeamMutationVariables = Exact<{
    id: Scalars['String'];
}>;

export type DeleteTeamMutation = {
    __typename?: 'Mutation';
    deleteTeam?: { __typename?: 'Team'; id: string } | null;
};

export type DashboardTopQueryVariables = Exact<{ [key: string]: never }>;

export type DashboardTopQuery = {
    __typename?: 'Query';
    projects: Array<{
        __typename?: 'Project';
        id: string;
        name: string;
        description: string;
        owner: { __typename?: 'User'; icon_image: string };
        administrators: Array<{ __typename?: 'User'; icon_image: string }>;
        menbers: Array<{ __typename?: 'User'; icon_image: string }>;
    }>;
    teams: Array<{
        __typename?: 'Team';
        id: string;
        name: string;
        description: string;
        owner: { __typename?: 'User'; icon_image: string };
        administrators: Array<{ __typename?: 'User'; icon_image: string }>;
        menbers: Array<{ __typename?: 'User'; icon_image: string }>;
    }>;
};

export const CreateChatDocument = `
    mutation createChat($project_id: String!, $task_id: String, $content: String!) {
  createChat(project_id: $project_id, task_id: $task_id, content: $content) {
    id
  }
}
    `;
export const useCreateChatMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        CreateChatMutation,
        TError,
        CreateChatMutationVariables,
        TContext
    >
) =>
    useMutation<
        CreateChatMutation,
        TError,
        CreateChatMutationVariables,
        TContext
    >(
        ['createChat'],
        (variables?: CreateChatMutationVariables) =>
            fetcher<CreateChatMutation, CreateChatMutationVariables>(
                CreateChatDocument,
                variables
            )(),
        options
    );
export const ProjectDocument = `
    query project($id: String!) {
  project(id: $id) {
    id
    name
    description
    owner {
      ID
      name
      icon_image
    }
    administrators {
      ID
      name
      icon_image
    }
    menbers {
      ID
      name
      icon_image
    }
    pending {
      ID
      name
      icon_image
    }
    teams {
      id
      name
    }
    tasks {
      id
      name
      completed
      has_child
    }
    chats {
      id
      content
      owner {
        name
        icon_image
      }
      created_at
    }
    created_at
    permission_level
    grant {
      dangerZone
      edit
      operateTask
    }
  }
}
    `;
export const useProjectQuery = <TData = ProjectQuery, TError = unknown>(
    variables: ProjectQueryVariables,
    options?: UseQueryOptions<ProjectQuery, TError, TData>
) =>
    useQuery<ProjectQuery, TError, TData>(
        ['project', variables],
        fetcher<ProjectQuery, ProjectQueryVariables>(
            ProjectDocument,
            variables
        ),
        options
    );
export const CreateProjectDocument = `
    mutation createProject($name: String!, $description: String!) {
  createProject(name: $name, description: $description) {
    id
  }
}
    `;
export const useCreateProjectMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        CreateProjectMutation,
        TError,
        CreateProjectMutationVariables,
        TContext
    >
) =>
    useMutation<
        CreateProjectMutation,
        TError,
        CreateProjectMutationVariables,
        TContext
    >(
        ['createProject'],
        (variables?: CreateProjectMutationVariables) =>
            fetcher<CreateProjectMutation, CreateProjectMutationVariables>(
                CreateProjectDocument,
                variables
            )(),
        options
    );
export const UpdateProjectDocument = `
    mutation updateProject($id: String!, $name: String, $description: String, $menbers: [Int], $administrators: [Int], $teams: [String], $permission_level: String) {
  updateProject(
    id: $id
    name: $name
    description: $description
    menbers: $menbers
    administrators: $administrators
    teams: $teams
    permission_level: $permission_level
  ) {
    name
    description
    menbers {
      ID
      name
    }
    administrators {
      ID
      name
    }
    teams {
      id
      name
    }
  }
}
    `;
export const useUpdateProjectMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        UpdateProjectMutation,
        TError,
        UpdateProjectMutationVariables,
        TContext
    >
) =>
    useMutation<
        UpdateProjectMutation,
        TError,
        UpdateProjectMutationVariables,
        TContext
    >(
        ['updateProject'],
        (variables?: UpdateProjectMutationVariables) =>
            fetcher<UpdateProjectMutation, UpdateProjectMutationVariables>(
                UpdateProjectDocument,
                variables
            )(),
        options
    );
export const DeleteProjectDocument = `
    mutation deleteProject($id: String!) {
  deleteProject(id: $id) {
    id
  }
}
    `;
export const useDeleteProjectMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        DeleteProjectMutation,
        TError,
        DeleteProjectMutationVariables,
        TContext
    >
) =>
    useMutation<
        DeleteProjectMutation,
        TError,
        DeleteProjectMutationVariables,
        TContext
    >(
        ['deleteProject'],
        (variables?: DeleteProjectMutationVariables) =>
            fetcher<DeleteProjectMutation, DeleteProjectMutationVariables>(
                DeleteProjectDocument,
                variables
            )(),
        options
    );
export const TaskDocument = `
    query task($project_id: String!, $id: String!) {
  task(project_id: $project_id, id: $id) {
    id
    name
    description
    completed
    due_date
    owner {
      ID
      name
    }
    assigned_menbers {
      ID
      name
    }
    parent {
      id
    }
    children {
      id
      name
      completed
      has_child
    }
    chats {
      id
      content
      owner {
        name
        icon_image
      }
      created_at
    }
    created_at
    updated_at
    tree
  }
}
    `;
export const useTaskQuery = <TData = TaskQuery, TError = unknown>(
    variables: TaskQueryVariables,
    options?: UseQueryOptions<TaskQuery, TError, TData>
) =>
    useQuery<TaskQuery, TError, TData>(
        ['task', variables],
        fetcher<TaskQuery, TaskQueryVariables>(TaskDocument, variables),
        options
    );
export const CreateTaskDocument = `
    mutation createTask($project_id: String!, $task_id: String, $name: String!, $description: String!) {
  createTask(
    project_id: $project_id
    task_id: $task_id
    name: $name
    description: $description
  ) {
    id
  }
}
    `;
export const useCreateTaskMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        CreateTaskMutation,
        TError,
        CreateTaskMutationVariables,
        TContext
    >
) =>
    useMutation<
        CreateTaskMutation,
        TError,
        CreateTaskMutationVariables,
        TContext
    >(
        ['createTask'],
        (variables?: CreateTaskMutationVariables) =>
            fetcher<CreateTaskMutation, CreateTaskMutationVariables>(
                CreateTaskDocument,
                variables
            )(),
        options
    );
export const UpdateTaskDocument = `
    mutation updateTask($project_id: String!, $id: String!, $name: String, $description: String, $completed: Boolean, $due_date: String, $assigned_menbers: [Int!], $parent_id: String) {
  updateTask(
    project_id: $project_id
    id: $id
    name: $name
    description: $description
    completed: $completed
    due_date: $due_date
    assigned_menbers: $assigned_menbers
    parent_id: $parent_id
  ) {
    id
    parent {
      id
    }
  }
}
    `;
export const useUpdateTaskMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        UpdateTaskMutation,
        TError,
        UpdateTaskMutationVariables,
        TContext
    >
) =>
    useMutation<
        UpdateTaskMutation,
        TError,
        UpdateTaskMutationVariables,
        TContext
    >(
        ['updateTask'],
        (variables?: UpdateTaskMutationVariables) =>
            fetcher<UpdateTaskMutation, UpdateTaskMutationVariables>(
                UpdateTaskDocument,
                variables
            )(),
        options
    );
export const DeleteTaskDocument = `
    mutation deleteTask($project_id: String!, $id: String!) {
  deleteTask(project_id: $project_id, id: $id) {
    id
  }
}
    `;
export const useDeleteTaskMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        DeleteTaskMutation,
        TError,
        DeleteTaskMutationVariables,
        TContext
    >
) =>
    useMutation<
        DeleteTaskMutation,
        TError,
        DeleteTaskMutationVariables,
        TContext
    >(
        ['deleteTask'],
        (variables?: DeleteTaskMutationVariables) =>
            fetcher<DeleteTaskMutation, DeleteTaskMutationVariables>(
                DeleteTaskDocument,
                variables
            )(),
        options
    );
export const TeamDocument = `
    query team($id: String!) {
  team(id: $id) {
    id
    name
    description
    owner {
      ID
      name
      icon_image
    }
    administrators {
      ID
      name
      icon_image
    }
    menbers {
      ID
      name
      icon_image
    }
    pending {
      ID
      name
      icon_image
    }
    created_at
    permission_level
    grant {
      dangerZone
      edit
    }
  }
}
    `;
export const useTeamQuery = <TData = TeamQuery, TError = unknown>(
    variables: TeamQueryVariables,
    options?: UseQueryOptions<TeamQuery, TError, TData>
) =>
    useQuery<TeamQuery, TError, TData>(
        ['team', variables],
        fetcher<TeamQuery, TeamQueryVariables>(TeamDocument, variables),
        options
    );
export const CreateTeamDocument = `
    mutation createTeam($name: String!, $description: String!) {
  createTeam(name: $name, description: $description) {
    id
    name
    description
    owner {
      ID
      name
    }
    menbers {
      ID
      name
    }
    administrators {
      ID
      name
    }
  }
}
    `;
export const useCreateTeamMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        CreateTeamMutation,
        TError,
        CreateTeamMutationVariables,
        TContext
    >
) =>
    useMutation<
        CreateTeamMutation,
        TError,
        CreateTeamMutationVariables,
        TContext
    >(
        ['createTeam'],
        (variables?: CreateTeamMutationVariables) =>
            fetcher<CreateTeamMutation, CreateTeamMutationVariables>(
                CreateTeamDocument,
                variables
            )(),
        options
    );
export const UpdateTeamDocument = `
    mutation updateTeam($id: String!, $name: String, $description: String, $menbers: [Int], $administrators: [Int], $permission_level: String) {
  updateTeam(
    id: $id
    name: $name
    description: $description
    menbers: $menbers
    administrators: $administrators
    permission_level: $permission_level
  ) {
    id
    name
    description
    owner {
      ID
      name
    }
    menbers {
      ID
      name
    }
    administrators {
      ID
      name
    }
  }
}
    `;
export const useUpdateTeamMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        UpdateTeamMutation,
        TError,
        UpdateTeamMutationVariables,
        TContext
    >
) =>
    useMutation<
        UpdateTeamMutation,
        TError,
        UpdateTeamMutationVariables,
        TContext
    >(
        ['updateTeam'],
        (variables?: UpdateTeamMutationVariables) =>
            fetcher<UpdateTeamMutation, UpdateTeamMutationVariables>(
                UpdateTeamDocument,
                variables
            )(),
        options
    );
export const DeleteTeamDocument = `
    mutation deleteTeam($id: String!) {
  deleteTeam(id: $id) {
    id
  }
}
    `;
export const useDeleteTeamMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        DeleteTeamMutation,
        TError,
        DeleteTeamMutationVariables,
        TContext
    >
) =>
    useMutation<
        DeleteTeamMutation,
        TError,
        DeleteTeamMutationVariables,
        TContext
    >(
        ['deleteTeam'],
        (variables?: DeleteTeamMutationVariables) =>
            fetcher<DeleteTeamMutation, DeleteTeamMutationVariables>(
                DeleteTeamDocument,
                variables
            )(),
        options
    );
export const DashboardTopDocument = `
    query dashboardTop {
  projects {
    id
    name
    description
    owner {
      icon_image
    }
    administrators {
      icon_image
    }
    menbers {
      icon_image
    }
  }
  teams {
    id
    name
    description
    owner {
      icon_image
    }
    administrators {
      icon_image
    }
    menbers {
      icon_image
    }
  }
}
    `;
export const useDashboardTopQuery = <
    TData = DashboardTopQuery,
    TError = unknown
>(
    variables?: DashboardTopQueryVariables,
    options?: UseQueryOptions<DashboardTopQuery, TError, TData>
) =>
    useQuery<DashboardTopQuery, TError, TData>(
        variables === undefined
            ? ['dashboardTop']
            : ['dashboardTop', variables],
        fetcher<DashboardTopQuery, DashboardTopQueryVariables>(
            DashboardTopDocument,
            variables
        ),
        options
    );
