import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Task } from "../types/types";

const BASE_URL = "https://api.oluwasetemi.dev/tasks";

// ✅ Generic API response type
type ApiResponse<T> = {
  data: T;
  message?: string;
  success?: boolean;
};

// 🟩 Get all tasks
export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async (): Promise<Task[]> => {
      const res = await axios.get<ApiResponse<Task[]>>(BASE_URL);
      return res.data.data;
    },
  });
};

// 🟩 Create a task
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: Task) => {
      const res = await axios.post<ApiResponse<Task>>(BASE_URL, task);
      return res.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// 🟩 Update a task
type UpdateTaskPayload = {
  id: string;
  updates: Partial<Task>;
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, updates }: UpdateTaskPayload) => {
      const res = await axios.patch<ApiResponse<Task>>(`${BASE_URL}/${id}`, updates);
      return res.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// 🟩 Delete a task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${BASE_URL}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// 🟩 Get a single task
export const useGetTask = (id: string) => {
  return useQuery({
    queryKey: ["task", id],
    queryFn: async (): Promise<Task> => {
      const res = await axios.get<ApiResponse<Task>>(`${BASE_URL}/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });
};

// 🟩 Get child tasks
export const useGetChildrenTasks = (id: string) => {
  return useQuery({
    queryKey: ["task", id, "children"],
    queryFn: async (): Promise<Task[]> => {
      const res = await axios.get<ApiResponse<Task[]>>(`${BASE_URL}/${id}/children`);
      return res.data.data;
    },
    enabled: !!id,
  });
};
