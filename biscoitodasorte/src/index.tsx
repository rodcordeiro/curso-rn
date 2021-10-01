import React, { useCallback, useEffect, useState, useContext } from 'react';
import SplashScreen from 'react-native-splash-screen';

import styled, {
  DefaultTheme,
  ThemeProvider,
  ThemeContext,
} from 'styled-components/native';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import biscoito from './assets/biscoito.png';
import biscoitoAberto from './assets/biscoitoAberto.png';

import usePersistedState from './utils/usePersistedState';
import {
  Image,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
  `,
  Quote = styled.Text`
    color: ${(props) => props.theme.colors.quote};
    font-family: ${(props) => props.theme.font.quote};
    font-size: ${(props) => props.theme.fontSize.quote};
    font-style: italic;
    margin-top: 15px;
    width: 80%;
    text-align: center;
  `,
  ButtonArea = styled.View`
    background-color: ${(props) => props.theme.colors.button};
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 50px;
    font-size: 20px;
  `,
  ButtonText = styled.Text`
    font-size: 20px;
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.buttonText};
  `;
const Button = ({ text, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <ButtonArea>
        <ButtonText>{text}</ButtonText>
      </ButtonArea>
    </TouchableOpacity>
  );
};

const App = () => {
  const CurrentTheme = useColorScheme() === 'dark' ? dark : light;

  const [theme, setTheme] = useState<DefaultTheme>(light);

  const [image, setImage] = useState<string>(biscoito);
  const [text, setText] = useState<string>('Abrir biscoito');
  const [quote, setQuote] = useState<string>('');

  const [timer, setTimer] = useState<Timeout>(null);

  const getQuote = useCallback(async () => {
    const quotes = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
    ];
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(q);
    setImage(biscoitoAberto);
    setTimer(
      setTimeout(() => {
        setQuote('');
        setText('Abrir biscoito');
        setImage(biscoito);
      }, 10000),
    );
    clearTimeout(timer);
    setText('Abrir novo biscoito?');
  }, [timer]);

  useEffect(async () => {
    const getTheme = async () =>
      (await useColorScheme()) === 'dark' ? dark : light;
    const t = await getTheme()
      .then((response) => response)
      .catch((err) => err);
    console.log({ t });
    setTheme(t === dark ? dark : light);
  }, [theme, quote, CurrentTheme]);

  SplashScreen.hide();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={
          useColorScheme() === 'light' ? 'light-content' : 'dark-content'
        }
      />
      <Container>
        <Image style={styles.image} source={image} />
        <Quote>{quote ? `" ${quote} "` : ''}</Quote>
        <Button text={text} onPress={getQuote} />
      </Container>
    </ThemeProvider>
  );
};

export default React.memo(App);

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
