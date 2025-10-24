export const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
};
