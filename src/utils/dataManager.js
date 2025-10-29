import { jeopardyData } from '../data/jeopardyData';

const STORAGE_KEY = 'jeopardyCustomData';

export const getJeopardyData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading custom data:', error);
  }
  return jeopardyData;
};

export const saveCustomData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving custom data:', error);
    return false;
  }
};

export const clearCustomData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing custom data:', error);
    return false;
  }
};

export const hasCustomData = () => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};

