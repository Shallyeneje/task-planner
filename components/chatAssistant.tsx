// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";

// export default function ChatAssistant() {
//   const [message, setMessage] = useState("");
//   const [reply, setReply] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!message.trim()) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/ai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message }),
//       });

//       const data = await res.json();
//       setReply(data.reply);
//     } catch (error) {
//       console.error("AI error:", error);
//       setReply("Something went wrong. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card className="max-w-md mx-auto p-4 bg-slate-50 border border-slate-200 shadow-md">
//       <CardContent>
//         <h2 className="text-lg font-semibold mb-2 text-slate-800">AI Assistant 🤖</h2>
//         <div className="space-y-3">
//           <Input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Ask the AI something..."
//             className="w-full"
//           />
//           <Button onClick={sendMessage} disabled={loading}>
//             {loading ? "Thinking..." : "Send"}
//           </Button>
//           {reply && (
//             <div className="mt-3 p-3 bg-white border border-slate-200 rounded text-slate-700">
//               {reply}
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
