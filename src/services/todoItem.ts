import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface TodoItem {
  id: string;
  text: string;
  createdAt?: string;
  checked: boolean;
}
// Define a service using a base URL and expected endpoints
export const todoItemApi = createApi({
  reducerPath: "todoItemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3055/" }),
  endpoints: (builder) => ({
    getAllTodoItems: builder.query({
      query: () => `todolist`,
    }),
    addTodoItem: builder.mutation({
      query: (todoItem) => ({
        url: "/todolist",
        method: "POST",
        // Include the entire post object as the body of the request
        body: todoItem,
      }),
    }),
    deleteTodoItem: builder.mutation({
      query: (id) => ({
        url: "/todolist/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodoItemsQuery,
  useAddTodoItemMutation,
  useDeleteTodoItemMutation,
} = todoItemApi;
