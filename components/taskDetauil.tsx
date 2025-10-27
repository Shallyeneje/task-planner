"use client";
import { useParams, useRouter } from "next/navigation";
import { useGetTasks, useUpdateTask } from "../api/data";
import type { Task, TaskPriority, TaskStatus } from "../types/types";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function TaskDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const router = useRouter();
  const { data: tasks = [] } = useGetTasks();
  const { mutate: updateTask } = useUpdateTask();

  const task = tasks.find((t: Task) => t.id === id);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState<{
  name: string;
  description: string;
  start: string | null;
  end: string | null;
  duration: number | null;
  priority: TaskPriority;
  status: TaskStatus;
  archived: boolean;
  isDefault: boolean | null;
  parentId: string | null;
  children: string;
  owner: string | null;
  tags: string | null;
  completedAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}>({
  name: "",
  description: "",
  start: null,
  end: null,
  duration: null,
  priority: "LOW",
  status: "TODO",
  archived: false,
  isDefault: null,
  parentId: null,
  children: "",
  owner: null,
  tags: null,
  completedAt: null,
  createdAt: null,
  updatedAt: null,
});

  if (!task) return <p className="p-4">Task not found</p>;

  const startEditing = () => {
    setFormData({
      name: task.name,
      description: task.description ?? "",
      start: task.start,
      end: task.end,
      duration: task.duration,
      priority: task.priority,
      status: task.status,
      archived: task.archived,
      isDefault: task.isDefault,
      parentId: task.parentId,
      children: task.children,
      owner: task.owner,
      tags: task.tags,
      completedAt: task.completedAt,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    });
    setIsEditing(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    updateTask({ id, updates: formData });
    setIsEditing(false);
  };

  return (
    <div className="p-4 text-[#0f172a] space-y-4">
      <Button
        onClick={() => router.back()}
        className="bg-gray-200 text-[#0f172a] px-3 py-1 rounded-[5px] hover:bg-gray-300"
      >
        ← Back
      </Button>

      <div className="space-y-2">
        {!isEditing ? (
          <>
            <h2 className="text-2xl font-bold "> {task.name}</h2>
           < div className="grid grid-cols-2 md:grid-cols-1 p-4 bg-white shadow rounded ">
            <p className="text-sm text-gray-700"><strong>Task Description: </strong>{task.description}</p>
            <p > <strong> Start Time: </strong>{task.start}</p>
            <p>
              <strong>End Time:</strong> {task.end}
            </p>
            <p>
              <strong>Duration:</strong> {task.duration}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
            <p>
              <strong>Owner</strong> {task.owner}

            </p>
            <p>
              <strong>Tags</strong> {task.tags}
            </p>
            <p>
              <strong>Parent ID:</strong> {task.parentId}
            </p>
            <p>
              <strong>Children IDs:</strong> {task.children}
            </p>
            <p>
              <strong>created At:</strong> {task.createdAt}
            </p>
            <p>
              <strong>Completed At:</strong> {task.completedAt}
            </p>
            <p>
              <strong>Updated At:</strong> {task.updatedAt}
            </p>
            </div>
            <Button
              onClick={startEditing}
              className="bg-[#0f172a] text-[#cbd5e1] px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col text-sm">
                Status:
                <select
                  name="status"
                  value={formData.status || "TODO"}
                  onChange={handleInputChange}
                  className="border p-2 rounded"
                >
                  <option value="TODO">TODO</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </label>

              <label className="flex flex-col text-sm">
                Priority:
                <select
                  name="priority"
                  value={formData.priority || "LOW"}
                  onChange={handleInputChange}
                  className="border p-2 rounded"
                >
                  <option value="LOW">LOW</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="HIGH">HIGH</option>
                </select>
              </label>
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="bg-[#0f172a] text-[#ffffff] px-4 py-2">
                Save
              </Button>
              <Button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-[#8b0000] text-[#ffffff] px-4 py-2"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
