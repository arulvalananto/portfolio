import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function calculateTotalExperience(
    startDate: Date,
    currentDate = new Date()
) {
    const started = new Date(startDate);
    const today = new Date(currentDate);

    let years = today.getFullYear() - started.getFullYear();
    let months = today.getMonth() - started.getMonth();
    let days = today.getDate() - started.getDate();

    if (months === 0 && days === 0) {
        return years;
    } else {
        return years + '+';
    }
}
