import { formatDistance } from "date-fns";

export function formatDate(date) {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

export function formatDateDistance(date) {
  const formattedDate = formatDistance(date, new Date(), {
    addSuffix: true,
  });
  return formattedDate;
}











//=============================

export const testComments = [
  {
    user: "Mahamed Atef",
    attachment: "https://i.pravatar.cc/150?img=2",
    message:
      "This was supported in chrome almost a decade ago, and I don't see this as being a game changer unless you're leaning on a project dependency specifically for their dialog.",
    likes: 50,
    created_at: "2024-07-14T07:43:06.000000Z",
  },
  {
    user: "Mahamed Ayman",
    attachment: "https://i.pravatar.cc/150?img=21",

    message:
      "The only misstep in my opinion is that there should be a HTML-only way to open the dialog, in addition to being able to close it.",
    likes: 35,
    created_at: "2020-07-04T07:43:06.000000Z",
  },
  {
    user: "Saeed Ayman",
    attachment: "https://i.pravatar.cc/150?img=3",
    message:
      "Thanks for the article. Even though I can't read through the end of the article because I am not a member, but this makes me wonder and I realize that map() send all the parameter to the function it tries to execute..",
    likes: 48,
    created_at: "2022-09-04T07:43:06.000000Z",
  },

  {
    user: "Abdo Mohamed",
    attachment: "https://i.pravatar.cc/150?img=4",
    message:
      "This was supported in chrome almost a decade ago, and I don't see this as being a game changer unless you're leaning on a project dependency specifically for their dialog.",
    likes: 96,
    created_at: "2023-01-04T07:43:06.000000Z",
  },
];
