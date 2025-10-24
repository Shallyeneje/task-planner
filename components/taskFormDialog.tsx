// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "../components/ui/dialog";
// import { Button } from "../components/ui/button";
// import TaskForm from "./tasksForm";
// import type { Task } from "../types/types";
// import { useState } from "react";

// export default function TaskFormDialog() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleAddTask = (task: Omit<Task, "_id">) => {
//     console.log("Task added:", task);
//     setIsOpen(false); // close after submit
//   };

//   const handleCancel = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="p-6">
//       {/* Button to open dialog */}
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="bg-[#0f172a] text-[#cbd5e1] hover:bg-[#1e293b]"
//       >
//         Add New Task
//       </Button>

//       {/* ShadCN Dialog */}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent
//           className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 rounded-lg shadow-lg"
//           showCloseButton
//         >
//           <DialogHeader>
//             <DialogTitle className="text-xl font-semibold text-center">
//               Create New Task
//             </DialogTitle>
//             <DialogDescription className="text-center text-gray-500">
//               Fill in the form below to add a new task.  
//               Click outside or press Esc to close.
//             </DialogDescription>
//           </DialogHeader>

//           {/* Form inside dialog */}
//           <TaskForm
//             onSubmit={handleAddTask}
//             onCancel={handleCancel}
//             defaultDate={new Date().toISOString().slice(0, 10)}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
