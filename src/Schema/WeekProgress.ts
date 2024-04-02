enum TaskStatus {
    Completed = "Completed",
    NotCompleted = "Not Completed",
    Pending = "Pending"
}

type DateProgress = {
    date: string,
    status: TaskStatus
};

type TaskProgress = {
    taskName: string,
    progress: DateProgress[]
};

type ThisWeekProgress = TaskProgress[];

export { ThisWeekProgress, TaskStatus, DateProgress, TaskProgress}