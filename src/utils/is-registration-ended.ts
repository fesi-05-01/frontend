// true = 마감됨, false = 아직 안 지남

export function isRegistrationEnded(registrationEnd: string): boolean {
  const endDate = new Date(registrationEnd);
  const now = new Date();
  return endDate <= now;
}
