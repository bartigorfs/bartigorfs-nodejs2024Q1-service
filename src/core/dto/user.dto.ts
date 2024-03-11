export interface CreateUserDto {
  login: string;
  password: string;
}

interface UpdatePasswordDto {
  oldPassword: string; // previous password
  newPassword: string; // new password
}
