export const pipe = (arg: any, ...fns: Array<Function>) => fns.reduce((prev, fn) => fn(prev), arg);
export const generateRoute = (route: string) => `/${route}`;
