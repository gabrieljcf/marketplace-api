declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      _id: string;
      isAdmin: boolean;
    };
  }
}
