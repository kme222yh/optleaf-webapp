import { Project, Task, User, Chat } from '@/graphql/generated';

export const user: User = {
    ID: '1',
    name: 'testUser',
    icon_image: '',

    // ??????
    email: 'test@optleaf.site',
    created_at: '2022/22/22',
    updated_at: undefined,
    id: 'mqu4trfm4wqr'
};

export const chat: Chat = {
    content:
        'This is dammy chat data. This is dammy chat data.This is dammy chat data.This is dammy chat data.This is dammy chat data.',
    created_at: '2022/12/12',
    id: 'mqu4trfm4wqr',
    owner: user,
    owner_id: 1
};

export const chats: Chat[] = [];
for (let i = 0; i < 10; i += 1) {
    chats.push({
        ...chat,
        id: `${chat.id}${i},`
    });
}

export const task: any = {
    assigned_menbers: [],
    chats,
    children: [],
    completed: false,
    created_at: '2022/22/22',
    description: 'This is test task. This is test task. This is test task. This is test task. This is test task. This is test task.',
    due_date: '2022/22/22',
    has_child: false,
    id: 'root',
    name: 'test task',
    owner: user,
};

export const sub1Task: any = {
    ...task,
    id: 'sub1',
    children: [],
    parent: {
        id: task.id,
    },
};
for (let i = 0; i < 5; i += 1) {
    task.children.push({
        id: `${sub1Task.id}${i},`,
        name: sub1Task.name,
        completed: false,
        has_child: false,
    });
}

export const sub2Task: any = {
    ...task,
    id: 'sub2',
    children: [],
    parent: {
        id: sub1Task.id,
    },
};
for (let i = 0; i < 5; i += 1) {
    sub1Task.children.push({
        id: `${sub2Task.id}${i},`,
        name: sub2Task.name,
        completed: false,
        has_child: false,
    });
}

export const tasks: Task[] = [];
for (let i = 0; i < 10; i += 1) {
    tasks.push({
        ...task,
        id: `${task.id}${i},`
    });
}

export const project: Project = {
    id: 'm0c25utmc23ut',
    name: 'Test Project',
    description:
        'This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. This is test data. ',
    owner: user,
    created_at: '2022/12/2',
    menbers: [],
    administrators: [],
    pending: [],
    teams: [],
    permission_level: 'owner',
    chats,
    tasks,
    grant: {
        dangerZone: true,
        edit: true,
        operateTask: true
    }
};