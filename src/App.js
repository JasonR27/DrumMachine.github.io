import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      Hello World!     
    </div>
  )
}

class AppWrapper extends React.Component {
  render() {
    return (
      <section id="AppWrapper">
        <App />
      </section>
    );
  }
}


export default AppWrapper