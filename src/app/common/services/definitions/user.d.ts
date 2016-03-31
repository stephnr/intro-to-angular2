interface UserServiceInterface {
  attemptAuth(type: string, formData: Object): void;
  announceErrors(errors: Object): void;
}
