// "use client";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   getDoc,
//   query,
//   orderBy,
//   onSnapshot,
// } from "firebase/firestore";
// // import { db } from "@/lib/firebase";
// import type { Task } from "@/types/types";

// // Firestore collection reference
// const tasksCollection = collection(db, "tasks");

// // 🟩 Get all tasks (real-time)
// export const useGetTasks = () => {
//   return useQuery<Task[]>({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const snapshot = await getDocs(query(tasksCollection, orderBy("createdAt", "desc")));
//       return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Task));
//     },
//   });
// };

// // 🟩 Create a task
// export const useCreateTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (task: Omit<Task, "id">) => {
//       const docRef = await addDoc(tasksCollection, {
//         ...task,
//         createdAt: new Date().toISOString(),
//       });
//       return { id: docRef.id, ...task } as Task;
//     },
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
//   });
// };

// // 🟩 Update a task
// export const useUpdateTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async ({ id, updates }: { id: string; updates: Partial<Task> }) => {
//       const docRef = doc(db, "tasks", id);
//       await updateDoc(docRef, updates);
//     },
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
//   });
// };

// // 🟩 Delete a task
// export const useDeleteTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (id: string) => {
//       const docRef = doc(db, "tasks", id);
//       await deleteDoc(docRef);
//     },
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
//   });
// };

// // 🟩 Get a single task
// export const useGetTask = (id: string) => {
//   return useQuery({
//     queryKey: ["task", id],
//     queryFn: async () => {
//       const docRef = doc(db, "tasks", id);
//       const snapshot = await getDoc(docRef);
//       if (!snapshot.exists()) throw new Error("Task not found");
//       return { id: snapshot.id, ...snapshot.data() } as Task;
//     },
//     enabled: !!id,
//   });
// };
