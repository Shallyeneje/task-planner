import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Navbar() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatarUrl: "",
  };

  const getInitials = (fullName: string) => {
    const [first = "", second = ""] = fullName.split(" ");
    return (first[0] || "") + (second[0] || "");
  };

  return (
    <nav className="w-full border-b border-gray-700 bg-[#0f172a] text-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Left: Logo + App Name */}
        <div className="flex items-center gap-3">
          <img
            src="/FAvicon.png"
            alt="Logo"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <h1 className="text-xl font-bold tracking-tight">My Todo App</h1>
        </div>

        {/* Center: Navigation (optional for later use) */}
        {/* <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/taskplanner" className="hover:text-gray-300 transition-colors">
            Task Planner
          </a>
          <a href="/about" className="hover:text-gray-300 transition-colors">
            About
          </a>
        </div> */}

        {/* Right: User Info */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-[#cbd5e1] text-[#0f172a] font-semibold">
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="font-medium text-[15px]">{user.name}</p>
            <p className="text-gray-400 text-xs">{user.email}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
