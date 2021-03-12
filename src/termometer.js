import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

function toCelsiusfromF(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toCelsiusfromK(kelvin) {
  return (kelvin - 273.15);
}

function toFahrenheitfromC(celsius) {
  return (celsius * 9 / 5) + 32;
}
function toFahrenheitfromK(kelvin) {
  return (kelvin * 1.8) - 459,67;
}

function toKelvinfromC(celsius) {
  return (celsius + 273.15);
}
function toKelvinfromF(fahrenheit) {
  return (fahrenheit + 459,67) / 1.8;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleKelvinChange = this.handleKelvinChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  handleKelvinChange(temperature) {
    this.setState({
      scale: 'k',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsiusfromF) : temperature;
    const celsius2 = scale === 'k' ? tryConvert(temperature, toCelsiusfromK) : temperature;

    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const kelvin = scale === 'c' ? tryConvert(temperature, toKelvin) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);


// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;}
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Войти
//     </button>);
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Выйти
//     </button>);
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false}; //отработка от отрицательного сценария, т е по умолчанию стоит false-значение
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>);
//   }
// }
//
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );







// ReactDOM.render(   //рендер по условиям
//   // Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('root'));



// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('По ссылке кликнули.');
//   }
//   return (
//     <a href="#" onClick={handleClick}>
//       Нажми на меня
//     </a>); //функция пишется кемел-кейсом
// }
//
//
// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('root')
// );
