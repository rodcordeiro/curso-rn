import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string;
      subtitle: string;
      text: string;
      quote: string;
      background: string;
      button: string;
      buttonText: string;
    };
    font: {
      title: string;
      subtitle: string;
      text: string;
      quote: string;
    };
    fontSize: {
      title: string;
      subtitle: string;
      text: string;
      quote: string;
    };
  }
}
