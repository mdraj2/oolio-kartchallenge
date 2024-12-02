import { useCallback, useMemo, useState } from "react";
import ConfirmOrder from "./components/ConfirmOrder";
import Cart from "./components/Cart";
import MenuDisplay from "./components/MenuDisplay";
import menu from "./data";

function App() {
  // Cart state and update methods
  const [cart, setCartState] = useState([]);

  const totalCartValue = useMemo(
    () =>
      cart
        .reduce((currentValue, item) => {
          return item.price * item.quantity + currentValue;
        }, 0)
        .toFixed(2),
    [cart],
  );

  const addNewItemToCart = useCallback(
    (menuItem) => {
      setCartState((prev) => [
        ...prev,
        {
          id: menuItem.id,
          price: menuItem.price,
          name: menuItem.name,
          category: menuItem.category,
          thumbnail: menuItem.image.thumbnail,
          quantity: 1,
        },
      ]);
    },
    [setCartState],
  );

  const increaseItemQuantityInCart = useCallback(
    (menuItem) => {
      setCartState((prev) => {
        return prev.flatMap((cartItem) => {
          if (cartItem.id !== menuItem.id) {
            return [cartItem];
          }

          const quantity = cartItem.quantity + 1;
          return [{ ...cartItem, quantity }];
        });
      });
    },
    [setCartState],
  );

  const reduceItemQuantityCart = useCallback(
    (menuItem) => {
      setCartState((prev) => {
        return prev.flatMap((cartItem) => {
          if (cartItem.id !== menuItem.id) {
            return [cartItem];
          }

          const quantity = cartItem.quantity - 1;
          if (quantity === 0) {
            return [];
          } else {
            return [{ ...cartItem, quantity }];
          }
        });
      });
    },
    [setCartState],
  );

  const removeItemFromCart = useCallback(
    (id) => {
      setCartState((prev) =>
        prev.flatMap((item) => (id !== item.id ? [item] : [])),
      );
    },
    [setCartState],
  );

  const resetCart = useCallback(() => setCartState([]), [setCartState]);

  // Confirmed state and update methods
  const [orderConfirmed, setOrderConfirmedState] = useState(false);
  const openModal = useCallback(
    () => setOrderConfirmedState(true),
    [setOrderConfirmedState],
  );
  const closeModal = useCallback(
    () => setOrderConfirmedState(false),
    [setOrderConfirmedState],
  );

  return (
    <div className="bg-pale-silk mx-auto grid grid-cols-[1fr_minmax(270px,850px)_400px_1fr] gap-x-8 py-20">
      <MenuDisplay
        cart={cart}
        menu={menu}
        addNewItemToCart={addNewItemToCart}
        increaseItemQuantityInCart={increaseItemQuantityInCart}
        reduceItemQuantityCart={reduceItemQuantityCart}
      />
      <Cart
        cart={cart}
        totalCartValue={totalCartValue}
        removeItemFromCart={removeItemFromCart}
        openModal={openModal}
      />
      <ConfirmOrder
        cart={cart}
        orderConfirmed={orderConfirmed}
        totalCartValue={totalCartValue}
        resetCart={resetCart}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
