import CarbonNeutralIcon from "./CarbonNeutralIcon";
import CancelIcon from "./CancelIcon";
import EmptyCartIcon from "./EmptyCartIcon";
import { useMemo } from "react";

function Cart({ cart, openModal, removeItemFromCart, totalCartValue }) {
  const totalCartQuantity = useMemo(
    () =>
      cart.reduce((currentQuantity, item) => {
        return item.quantity + currentQuantity;
      }, 0),
    [cart],
  );

  return (
    <div>
      <div className="flex min-h-[300px] grow-0 flex-col bg-white p-6">
        <p className="text-light-brown text-2xl font-semibold">
          Your Cart ({totalCartQuantity})
        </p>

        {cart.length ? (
          <CartList openModal={openModal} totalCartValue={totalCartValue}>
            {cart.map((cartItem) => {
              return (
                <li key={cartItem.id} className="relative border-b py-3">
                  <p className="text-normal-brown mb-3 text-sm font-semibold">
                    {cartItem.name}
                  </p>
                  <p className="font-semibold">
                    <span className="text-light-brown pr-5 text-base">
                      {cartItem.quantity}x
                    </span>
                    <span className="text-normal-grey text-sm">
                      @${cartItem.price.toFixed(2)}
                      <span className="pl-5">
                        ${(cartItem.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </span>
                  </p>
                  <button
                    onClick={() => removeItemFromCart(cartItem.id)}
                    className="border-light-brown absolute right-0 top-[50%] flex h-5 w-5 translate-y-[-50%] items-center justify-center rounded-full border"
                  >
                    <CancelIcon />
                  </button>
                </li>
              );
            })}
          </CartList>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}

function CartList({ children, totalCartValue, openModal }) {
  return (
    <>
      <ul className="pb-10 pt-3">{children}</ul>
      <p className="text-normal-brown flex items-center justify-between text-sm font-semibold">
        Order Total
        <span className="text-dark-brown text-2xl">${totalCartValue}</span>
      </p>
      <p className="text-normal-brown bg-light-white my-4 rounded-md py-4 text-center text-sm">
        <span className="mr-2 inline-block translate-y-1">
          <CarbonNeutralIcon />
        </span>
        This is a&nbsp;
        <span className="text-dark-brown font-medium">
          carbon-neutral&nbsp;
        </span>
        delivery
      </p>
      <button onClick={openModal} className="btn btn-red text-base">
        Confirm Order
      </button>
    </>
  );
}

function EmptyCart() {
  return (
    <>
      <div className="mb-7 mt-8 self-center">
        <EmptyCartIcon />
      </div>
      <p className="text-normal-brown self-center text-sm font-semibold">
        Your added items will appear here
      </p>
    </>
  );
}

export default Cart;
