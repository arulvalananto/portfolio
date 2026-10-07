import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTotalExperience(
  startDate: Date | string,
  currentDate = new Date(),
) {
  const started = new Date(startDate);
  const today = new Date(currentDate);

  const years = today.getFullYear() - started.getFullYear();
  const months = today.getMonth() - started.getMonth();
  const days = today.getDate() - started.getDate();

  if (months === 0 && days === 0) {
    return years;
  } else {
    return years + "+";
  }
}

export function formatExperienceYears(startDate: Date | string) {
  return `${calculateTotalExperience(startDate)} years`;
}
