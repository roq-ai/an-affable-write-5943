const mapping: Record<string, string> = {
  authors: 'author',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
