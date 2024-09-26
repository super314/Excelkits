import { AddTodo } from "@/components/addTodo";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/get");
  const { data } = await response.json();

  return (
    <div>
      <p>Todo Items</p>
      <ul>
        {data.map((r: any) => (
          <li key={r["id"]}>{r["title"]}</li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
};

export default Home;
