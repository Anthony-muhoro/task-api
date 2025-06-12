-- CreateTable
CREATE TABLE "tasks" (
    "mytask_id" TEXT NOT NULL,
    "task_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "completed_task" BOOLEAN NOT NULL DEFAULT false,
    "Deleted_task" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("mytask_id")
);
