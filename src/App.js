import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CardComponent from "./Card"
import NavbarComponent from "./Navbar"
import { Search } from "./Search"
import Filters from "./Filters"
function App() {
  const cards = [
    <CardComponent
      key="0"
      title="shirt"
      description="awesome shirt. Must buy! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="25"
      size="34"
    />,
    <CardComponent
      key="1"
      title="t-shirt"
      description="awesome t-shirt. Must buy!  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="15"
      size="36"
    />,
    <CardComponent
      key="2"
      title="trouser"
      description="awesome trouser. Must buy! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="30"
      size="34"
    />,
    <CardComponent
      key="3"
      title="jeans"
      description="awesome jeans. Must buy! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="20"
      size="40"
    />,
    <CardComponent
      key="4"
      title="coat"
      description="awesome coat. Must buy! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="55"
      size="36"
    />,
    <CardComponent
      key="5"
      title="hoodie"
      description="awesome hoodie. Must buy! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et"
      price="5"
      size="38"
    />,
  ]
  const [filteredCards, setFilteredCards] = useState([cards])
  function getSizes(sizes) {
    console.log(sizes)
    if (sizes.length > 0)
      setFilteredCards(cards.filter((e) => sizes.includes(e.props.size)))
    else setFilteredCards(cards)
  }
  function searchProducts(text) {
    const regex = new RegExp(text, "gi")
    setFilteredCards(cards.filter((e) => e.props.title.match(regex, "gi")))
  }
  function getPrice(price) {
    if (price) {
      if (price === "under25") {
        setFilteredCards(cards.filter((e) => parseInt(e.props.price) < 25))
      } else if (price === "25to50") {
        setFilteredCards(
          cards.filter(
            (e) => parseInt(e.props.price) > 25 && parseInt(e.props.price) < 50
          )
        )
      } else if (price === "50to100") {
        setFilteredCards(
          cards.filter(
            (e) => parseInt(e.props.price) > 50 && parseInt(e.props.price) < 100
          )
        )
      } else if (price === "100to200") {
        setFilteredCards(
          cards.filter(
            (e) =>
              parseInt(e.props.price) > 100 && parseInt(e.props.price) < 200
          )
        )
      } else if (price === "above200") {
        setFilteredCards(cards.filter((e) => parseInt(e.props.price) > 200))
      }
    }
  }
  function clearAll() {
    //uncheck all radio buttons
  }
  return (
    <div className="App">
      <NavbarComponent />
      <Search searchProducts={searchProducts} />

      <div className="d-flex flex-wrap p-5 w-100 justify-content-between align-items-start ">
        <Filters getSizes={getSizes} getPrice={getPrice} clearAll={clearAll} />
        <div className="d-flex flex-wrap w-75 justify-content-center">
          {filteredCards.map((e) => e)}
        </div>
      </div>
    </div>
  )
}

export default App
