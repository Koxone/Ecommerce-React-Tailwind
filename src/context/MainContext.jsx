import { createContext, useContext, useState } from "react";

// Crear el contexto
const MainContext = createContext();

// Provider principal que envolverá tu app en main.jsx o App.jsx
export function MainContextProvider({ children }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <MainContext.Provider
      value={{
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        quantity,
        setQuantity,
        activeTab,
        setActiveTab,
        isWishlisted,
        setIsWishlisted,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
