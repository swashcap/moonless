import { renderHook } from '@testing-library/react-hooks';

import { useId } from './useId';

describe('useId', () => {
  test('It should return an identifier.', () => {
    const {
      result: { current: current1 },
    } = renderHook(() => useId());
    const {
      result: { current: current2 },
    } = renderHook(() => useId());

    expect(current1).toBeTruthy();
    expect(current2).toBeTruthy();
    expect(current1).not.toEqual(current2);
  });

  test('It should add a prefix.', () => {
    const { result } = renderHook(() => useId('prefix'));

    expect(result.current).toMatch(/^prefix/);
  });
});
