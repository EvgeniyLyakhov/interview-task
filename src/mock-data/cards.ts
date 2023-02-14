// AKA Fragment
export type BeCardType = {
  id: string;
  title: string;
  description: string;
  status: { slug: string; name: string };
  image: string;
  owner: { id: string; name: string };
};

export const cards: BeCardType[] = [
  {
    id: "1",
    title: "Card 1",
    description: "Description 1",
    status: { slug: "todo", name: "To Do" },
    image: "https://picsum.photos/200/300",
    owner: { id: "1", name: "owner name 1" },
  },
  {
    id: "2",
    title: "Card 2",
    description: "Description 2",
    status: { slug: "inProgress", name: "In Progress" },
    image: "https://picsum.photos/200/300",
    owner: { id: "2", name: "owner name 2" },
  },
  {
    id: "3",
    title: "Card 3",
    description: "Description 3",
    status: { slug: "inProgress", name: "In Progress" },
    image: "https://picsum.photos/200/300",
    owner: { id: "2", name: "owner name 2" },
  },
  {
    id: "4",
    title: "Card 4",
    description: "Description 4",
    status: { slug: "done", name: "Done" },
    image: "https://picsum.photos/200/300",
    owner: { id: "1", name: "owner name 1" },
  },
  {
    id: "5",
    title: "Card 5",
    description: "Description 5",
    status: { slug: "done", name: "Done" },
    image: "https://picsum.photos/200/300",
    owner: { id: "3", name: "owner name 3" },
  },
  {
    id: "6",
    title: "Card 6",
    description: "Description 6",
    status: { slug: "todo", name: "To Do" },
    image: "https://picsum.photos/200/300",
    owner: { id: "3", name: "owner name 3" },
  },
];
