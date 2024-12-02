import { useCallback, useMemo, useState } from "react";

import ConfirmOrder from "./components/ConfirmOrder";
import Cart from "./components/Cart";
import MenuDisplay from "./components/MenuDisplay";

function App() {
  const menu = [
    {
      id: "1",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-waffle-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-waffle-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-waffle-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    {
      id: "2",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-creme-brulee-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-creme-brulee-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-creme-brulee-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-creme-brulee-desktop.jpg",
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7,
    },
    {
      id: "3",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-macaron-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-macaron-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-macaron-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-macaron-desktop.jpg",
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8,
    },
    {
      id: "4",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-tiramisu-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-tiramisu-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-tiramisu-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-tiramisu-desktop.jpg",
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
    },
    {
      id: "5",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-baklava-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-baklava-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-baklava-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-baklava-desktop.jpg",
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4,
    },
    {
      id: "6",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-meringue-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-meringue-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-meringue-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-meringue-desktop.jpg",
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5,
    },
    {
      id: "7",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-cake-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-cake-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-cake-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-cake-desktop.jpg",
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
    },
    {
      id: "8",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-brownie-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-brownie-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-brownie-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-brownie-desktop.jpg",
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
    },
    {
      id: "9",
      image: {
        thumbnail:
          "https://orderfoodonline.deno.dev/public/images/image-panna-cotta-thumbnail.jpg",
        mobile:
          "https://orderfoodonline.deno.dev/public/images/image-panna-cotta-mobile.jpg",
        tablet:
          "https://orderfoodonline.deno.dev/public/images/image-panna-cotta-tablet.jpg",
        desktop:
          "https://orderfoodonline.deno.dev/public/images/image-panna-cotta-desktop.jpg",
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
    },
  ];

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

  // Modal state and update methods
  const [modalOpen, setModalOpenState] = useState(false);
  const openModal = useCallback(
    () => setModalOpenState(true),
    [setModalOpenState],
  );
  const closeModal = useCallback(
    () => setModalOpenState(false),
    [setModalOpenState],
  );

  return (
    <div className="bg-light-white mx-auto grid grid-cols-[1fr_minmax(270px,850px)_400px_1fr] gap-x-8 py-20">
      <MenuDisplay
        cart={cart}
        menu={menu}
        addNewItemToCart={addNewItemToCart}
        increaseItemQuantityInCart={increaseItemQuantityInCart}
        reduceItemQuantityCart={reduceItemQuantityCart}
      />
      <Cart
        openModal={openModal}
        cart={cart}
        removeItemFromCart={removeItemFromCart}
        totalCartValue={totalCartValue}
      />
      <ConfirmOrder
        cart={cart}
        modalOpen={modalOpen}
        resetCart={resetCart}
        closeModal={closeModal}
        totalCartValue={totalCartValue}
      />
    </div>
  );
}

export default App;
