// export default function middleware(request) {
//   console.log(request);
// }

import { auth } from "./lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/user/settings"],
};
