import React from 'react';
import { render } from '@testing-library/react';

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  CheckIcon,
  ClearIcon,
  EditIcon,
  InfoIcon,
  MapPinIcon,
  MenuIcon,
  MinusIcon,
  PlusIcon,
  SuccessIcon,
  TagIcon,
  WarningIcon,
  XIcon,
} from './Icon';

describe('Icon', () => {
  describe.each([
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CaretDownIcon,
    CaretLeftIcon,
    CaretRightIcon,
    CaretUpIcon,
    CheckIcon,
    ClearIcon,
    EditIcon,
    InfoIcon,
    MapPinIcon,
    MenuIcon,
    MinusIcon,
    PlusIcon,
    SuccessIcon,
    TagIcon,
    WarningIcon,
    XIcon,
  ])('%o', (Component) => {
    test('It should render.', () => {
      const { container } = render(<Component />);

      expect(container.querySelector('svg')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });

    test('It should pass className property.', () => {
      const { container } = render(<Component className="test" />);

      expect(container.querySelector('svg')).toHaveClass('test');
    });
  });
});
