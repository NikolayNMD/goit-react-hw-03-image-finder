import { Component } from 'react';
import { AppContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <AppContainer>
        <Searchbar />
      </AppContainer>
    );
  }
}
