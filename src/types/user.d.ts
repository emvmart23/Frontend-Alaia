interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address?: string;
  dni: string;
  profilePicture: string;
  phoneNumber: string;
  birthDate: Date | null;
}