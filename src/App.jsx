import { useState } from "react";
import EmptyCartIcon from "./components/EmptyCartIcon";
import ShoppingCartIcon from "./components/ShoppingCartIcon";
import ReduceQuantityIcon from "./components/ReduceQuantityIcon";
import IncreaseQuantityIcon from "./components/IncreaseQuantityIcon";
import CarbonNeutralIcon from "./components/CarbonNeutralIcon";
import CancelIcon from "./components/CancelIcon";

function App() {
  const imagesLocations = [
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

  // Add to cart behaviour. If not in cart the ui should show the first ui card. If the number increases then it should become a different button.
  // you cannot go to 0. When zero the cart should it should show the original button
  // you also need to fix the coloring aswell i.e not 0 means a border needs to be applied
  // I will need to add a hover aswell when item count is 0

  //I wonder if the key will need a count and id congugated together. I would not want to keep fetching the images on every rerender. Maybe its not a problem
  const [cart, setCartState] = useState([]);

  return (
    <div className="mx-auto grid grid-cols-[1fr_minmax(270px,850px)_400px_1fr] gap-x-8 bg-[#FCF8F5] py-20">
      <div className="col-start-2 col-end-3">
        <h1 className="mb-8 font-inter text-4xl font-semibold text-[#3F2D28]">
          Desserts
        </h1>
        <div className="grid grid-cols-3 gap-x-6 gap-y-9">
          {/* Get images now */}
          {imagesLocations.map((image) => {
            return (
              <div key={image.id}>
                <div className="relative mb-9">
                  <img
                    src={image.image.desktop}
                    className={`rounded ${cart.some((item) => item.id === image.id) && "border-2 border-[#B94825]"}`}
                  />
                  {!cart.some((item) => item.id === image.id) ? (
                    <button
                      onClick={() => {
                        // you want to push the items. Because it of closure it should be fine like this
                        setCartState((prev) => [
                          ...prev,
                          {
                            id: image.id,
                            price: image.price,
                            name: image.name,
                            category: image.category,
                            quantity: 1,
                          },
                        ]);
                      }}
                      className="absolute bottom-0 left-[50%] flex h-12 w-40 -translate-y-[-50%] translate-x-[-50%] items-center justify-center whitespace-nowrap rounded-3xl border-[1px] border-[#B8A1A2] bg-white"
                    >
                      <span className="mr-2 inline-block h-6 w-6 -translate-y-1">
                        <ShoppingCartIcon color="fill-red-500" />
                      </span>
                      <p className="font-inter font-semibold text-[#766F6D]">
                        Add to Cart
                      </p>
                    </button>
                  ) : (
                    <div className="absolute bottom-0 left-[50%] flex h-12 w-40 -translate-y-[-50%] translate-x-[-50%] items-center justify-between whitespace-nowrap rounded-3xl border-[1px] border-[#B94825] bg-red-600 px-3">
                      <button
                        className="inline-block h-6 w-6"
                        onClick={() => {
                          // reduce quantity
                          setCartState((prev) => {
                            return prev.flatMap((item) => {
                              if (item.id !== image.id) {
                                return [item];
                              }
                              const quantity = item.quantity - 1;

                              if (quantity === 0) {
                                return [];
                              } else {
                                return [{ ...item, quantity }];
                              }
                            });
                          });
                        }}
                      >
                        <ReduceQuantityIcon />
                      </button>

                      <span className="text-[#EAB096]">
                        {cart.find((item) => item.id == image.id).quantity}
                      </span>
                      <button
                        className="inline-block h-6 w-6"
                        onClick={() => {
                          // increase quantity
                          setCartState((prev) => {
                            return prev.flatMap((item) => {
                              if (item.id !== image.id) {
                                return [item];
                              }
                              const quantity = item.quantity + 1;
                              return [{ ...item, quantity }];
                            });
                          });
                        }}
                      >
                        <IncreaseQuantityIcon />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-inter text-xs font-semibold text-[#ACA09C]">
                    {image.category}
                  </p>
                  <p className="font-inter text-sm font-semibold text-[#6E6461]">
                    {image.name}
                  </p>
                  <p className="font-inter text-sm font-semibold text-[#BC7863]">
                    &#36;{image.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex min-h-[305px] grow-0 flex-col bg-white p-6">
          <p className="font-inter text-2xl font-semibold text-[#C66C50]">
            Your Cart (
            {cart.reduce((currentQuantity, item) => {
              return item.quantity + currentQuantity;
            }, 0)}
            )
          </p>

          {cart.length == 0 ? (
            <>
              <div className="mb-7 mt-8 self-center">
                <EmptyCartIcon />
              </div>
              <p className="self-center font-inter text-sm font-semibold text-[#988A87]">
                Your added items will appear here
              </p>
            </>
          ) : (
            <>
              <ul className="pb-10 pt-3">
                {cart.map((cartItem) => {
                  return (
                    <li key={cartItem.id} className="relative border-b py-3">
                      <p className="font-inter text-sm font-semibold">
                        {cartItem.name}
                      </p>
                      <p className="font-inter font-semibold">
                        <span className="pr-5 text-base text-[#C08778]">
                          {cartItem.quantity}X
                        </span>
                        <span className="text-sm text-[#B2A8A6]">
                          @&#36;{cartItem.price.toFixed(2)}
                          <span className="pl-5">
                            &#36;{cartItem.price * cartItem.quantity}
                          </span>
                        </span>
                      </p>
                      <button
                        onClick={() => {
                          setCartState((prev) => {
                            return prev.flatMap((item) => {
                              if (item.id !== cartItem.id) {
                                return [item];
                              } else {
                                return [];
                              }
                            });
                          });
                        }}
                        className="absolute right-0 top-[50%] flex h-5 w-5 translate-y-[-50%] items-center justify-center rounded-full border border-[#AD8A85]"
                      >
                        <CancelIcon />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="flex items-center justify-between font-inter text-sm font-semibold text-[#928D8B]">
                Order Total
                <span className="text-2xl text-[#483A37]">
                  &#36;
                  {cart.reduce((currentValue, item) => {
                    return item.price * item.quantity + currentValue;
                  }, 0)}
                </span>
              </p>
              <p className="my-4 rounded-md bg-[#FBF7F4] py-4 text-center text-sm text-[#958C89]">
                <span className="mr-2 inline-block translate-y-1">
                  <CarbonNeutralIcon />
                </span>
                This is a&nbsp;
                <span className="font-medium text-[#837975]">
                  carbon-neutral&nbsp;
                </span>
                delivery
              </p>
              <button className="rounded-3xl border border-[#B94825] bg-red-600 py-3 text-base text-[#E7AB91]">
                Confirm Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
