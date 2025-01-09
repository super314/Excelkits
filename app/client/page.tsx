"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/ssr/client";

const ClientComponent = () => {
  const supabase = createClient();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async function () {
      const {
        data: { session },
        error: authError,
      } = await supabase.auth.getSession();

      if (authError) {
        window.alert(authError.message);
        return;
      }

      console.log(session);

      const { data, error } = await supabase.from("todo").select();

      if (error) {
        window.alert(error.message);
        return;
      }

      setData(data);
    })();
  }, []);

  return (
    <div>
      <ul>
        {data.map((r: any) => (
          <li key={r["id"]}>{r["title"]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientComponent;
