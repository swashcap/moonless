import { useMemo } from 'react';

let id = 0;

export const useId = (prefix?: string) =>
  useMemo(() => `${prefix}${++id}`, [prefix]);
