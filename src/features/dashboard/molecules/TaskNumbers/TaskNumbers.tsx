import './TaskNumbers.scoped.scss';

import { NumberOfTask } from '../../atoms/NumberOfTask';

export type TaskNumbersProps = {
    className?: string;
    tasks: number;
    completed: number;
};
TaskNumbers.defaultProps = {
    className: ''
};

export function TaskNumbers({ className, tasks, completed }: TaskNumbersProps) {
    return (
        <div className={`TaskNumbers ${className}`}>
            {tasks ? (
                <>
                    <NumberOfTask fill n={completed} />
                    <NumberOfTask n={tasks - completed} />
                </>
            ) : (
                ''
            )}
        </div>
    );
}
