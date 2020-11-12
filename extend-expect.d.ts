import { ReactTestInstance } from 'react-test-renderer';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toContainElement(element: ReactTestInstance | null): R;
      toBeEmpty(): R;
      toHaveProp(attr: string, value?: any): R;
      toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
      toHaveStyle(style: object[] | object): R;
    }
  }
}
