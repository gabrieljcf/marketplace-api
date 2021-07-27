interface ISaveUserDocument {
  name: string;
  nameSearch?: string;
  email: string;
  password: string;
  isActive?: boolean;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ISaveUserDocument };
