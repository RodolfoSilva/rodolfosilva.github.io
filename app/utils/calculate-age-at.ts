export default function calculateAgeAt(birthday: Date, at: Date) {
  const epochYear = 1970;
  const milisecondsFromEpoch = new Date(at.getTime() - birthday.getTime());
  const age = Math.abs(milisecondsFromEpoch.getUTCFullYear() - epochYear);
  return age;
}
