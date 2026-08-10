import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DataBinding from './Data-Biniding'
import Demo from './Demo'
import Chart from './Chart'
import BindingObject from './BindingObject'
import DateTime from './DateAndTime'
import RegularExp from './RegularExp'
import Flipkart from './flipkart/Flipkart'
import InoxMovies from './inox/InoxMovies'
import EventLoop from './ReactBinding/EventLoop'
import EventBinding from './ReactBinding/Event-Binding'
import TwoWayBinding from './ReactBinding/Two-Way-Binding'
import MouseEvent from './mouseEvent/Mouse-Event'
import MouseAnimation from './mouseEvent/mouse-animation'
import KeyEvents from './mouseEvent/Key-Events'
import ElementState from './ReactBinding/Element-State'
import DebounceDemo from './Timer-event/DebounceDemo'
import ThrottleDemo from './Timer-event/Throttle-Demo'
import CarouselDemo from './carousel/Carousel-demp'
import ConditonalRendering from './Conditional-rendering/Conditional-Rendering'
import Home from './controlled-component/Home'
import { ContextDemo } from './contextDemo/context-dem-'
import ReactForm from './react-form/React-form'
import FormUseFormik from './react-form/FormUseFormik'
import ReactFormDemo from './react-form/react-form-demo'
import FakeStoreIndex from './fake-store/FakeStore-Index'
import TodoHome from './todo-list/Todo-home'
import TodoIndex from './todo-list/todo-index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div >
      <ToastContainer />
      {/* <h1>Hello World</h1> */}
      {/* <DataBinding /> */}
      {/* <Demo /> */}
      {/* <Chart /> */}
      {/* <BindingObject /> */}
      {/* <DateTime /> */}
      {/* <RegularExp /> */}
      {/* <Flipkart /> */}
      {/* <InoxMovies /> */}
      {/* <EventLoop /> */}
      {/* <EventBinding /> */}
      {/* <TwoWayBinding /> */}
      {/* <MouseEvent /> */}
      {/* <MouseAnimation /> */}
      {/* <KeyEvents /> */}
      {/* <ElementState /> */}
      {/* <DebounceDemo /> */}
      {/* <ThrottleDemo /> */}
      {/* <CarouselDemo /> */}
      {/* <ConditonalRendering /> */}
      {/* <Home /> */}
      {/* <ContextDemo /> */}
      {/* <ReactForm /> */}
      {/* <FormUseFormik /> */}
      {/* <ReactFormDemo /> */}
      {/* <FakeStoreIndex /> */}
      {/* <TodoHome /> */}
      <TodoIndex />
    </div>
  )
}

export default App
