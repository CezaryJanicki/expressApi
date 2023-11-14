const { describe, it, expect } = require('@jest/globals');
import { calculateDaysBetweenDates } from './test';

describe('calculateDaysBetweenDates', () => {
  it('should return 0 when the same date is passed twice', () => {
    const date = new Date();
    const diffDays = calculateDaysBetweenDates(date, date);
    expect(diffDays).toBe(0);
  });

  it('should return the correct number of days between two dates', () => {
    const date1 = '2022-01-01';
    const date2 = '2022-01-05';
    const diffDays = calculateDaysBetweenDates(date1, date2);
    expect(diffDays).toBe(4);
  });

  it('should return the correct number of days when the second date is before the first', () => {
    const date1 = '2022-01-05';
    const date2 = '2022-01-01';
    const diffDays = calculateDaysBetweenDates(date1, date2);
    expect(diffDays).toBe(4);
  });
});


