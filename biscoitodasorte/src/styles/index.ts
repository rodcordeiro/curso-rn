import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;

}
body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}
`;
