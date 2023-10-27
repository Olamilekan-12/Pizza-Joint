import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [pizza, setPizza] = useState({
    base: "",
    toppings: [],
  });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addToppings = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }

    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        pizza={pizza}
        setPizza={setPizza}
      />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base pizza={pizza} addBase={addBase} />}
          />
          <Route
            path="/toppings"
            element={<Toppings pizza={pizza} addToppings={addToppings} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
