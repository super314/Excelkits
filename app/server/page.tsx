import { createClient } from "@/lib/supabase/ssr/server";

const ServerComponent = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("todo").select();

  return (
    <div>
      {error && <div className="mb-4 text-red-300">{error.message}</div>}
      <ul>
        {data!.map((r: any) => (
          <li key={r["id"]}>{r["title"]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComponent;
