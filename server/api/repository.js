import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { input, text, title } = await readBody(event);

  const { data } = await client
    .from("repository")
    .upsert({ regex: input, text: text, title: title });
  return { repository: data };
});
