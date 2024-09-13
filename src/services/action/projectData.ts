"use server";
const project = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/project`, {
    cache: "no-cache",
  });
  return res.json();
};
export default project;
