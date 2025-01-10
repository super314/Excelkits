"use client";

export const AddTodo = () => {
  const onAdd = async () => {
    const response = await fetch("/api/add");
    const { data } = await response.json();
    console.log(data);
  };

  return (
    <div>
      <button className="bg-green-600 px-2 py-0.5 border text-sm text-white" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};
