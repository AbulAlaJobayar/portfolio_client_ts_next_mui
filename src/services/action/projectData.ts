"use server";
const project = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/project`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export default project;
