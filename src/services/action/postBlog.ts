import { FieldValues } from "react-hook-form";

export const postBlog = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/create_blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return await res.json();
  } catch (error) {
    console.error("Error during Post Blog:", error);
    throw error;
  }
};
