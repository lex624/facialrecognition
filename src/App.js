// import './App.css';
// import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
// import Particles from 'react-particles-js';
// import React, { Component } from 'react';
// import Clarifai from 'clarifai';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '1d1e2c6d2a51415392e8562b40bb3651'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

// class App extends Component {
  
//   constructor ()  {
//     super ();
//     this.state = {
//       input: '',
//     }
//   }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  // calculateFaceLocation = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width),
  //     bottomRow: height - (clarifaiFace.bottom_row * height)
  //   }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    //console.log ('click');
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input,
    // 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    //console.log ('click'),
    // URL
    // 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190517091107-08-unusual-landscapes-travel.jpg'
    // "https://samples.clarifai.com/metro-north.jpg",
    // '1d1e2c6d2a51415392e8562b40bb3651',
    // '53e1df302c079b3db8a0a36033ed2d15',
)
.then
(function(response) {
    // console.log(response.output[0].data.regions[0].region_info.bounding_box);
    //console.log(response);
    console.log(response.output[0].data.regions[0]);
    },
      function(err) {'err'}
);
  }

  render() {
  return (
    <div className="App">

      <Particles className='particles' params={{particlesOptions}} />
      <Navigation/>
      <Logo/>
      <ImageLinkForm
      onInputChange = {this.onInputChange} 
      onButtonSubmit = {this.onButtonSubmit} />
      <Rank/>
      <FaceRecognition
      imageUrl = {this.state.imageUrl}/>
      {/* <p>{this.state.imageUrl !== null}</p> */}
       
    </div>
    );
  }
}

export default App;
