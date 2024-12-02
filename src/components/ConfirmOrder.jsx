import SuccessIcon from "./SuccessIcon";
import { useRef, useEffect } from "react";

function ConfirmOrder({
  cart,
  orderConfirmed,
  resetCart,
  closeModal,
  totalCartValue,
}) {
  const ref = useRef();

  useEffect(() => {
    orderConfirmed && ref.current?.showModal();
  }, [orderConfirmed]);

  return (
    <dialog
      ref={ref}
      className="w-[650px] rounded-md p-10 font-semibold backdrop:bg-black/50"
    >
      <div className="mb-5 h-8 w-9">
        <SuccessIcon />
      </div>
      <h2 className="mb-2 text-3xl text-black">Order Confirmed</h2>
      <p className="text-soft-stone mb-5 text-xs">
        We hope you enjoyed your food!
      </p>
      <div className="bg-pale-silk mb-6 rounded-md p-5 pb-6">
        <ul className="mb-8">
          {cart.map((cartItem) => {
            return (
              <li
                key={cartItem.id}
                className="relative flex gap-3 border-b py-3"
              >
                <img src={cartItem.thumbnail} className="h-14" />
                <div>
                  <p className="text-warm-taup mb-3 text-sm">{cartItem.name}</p>
                  <p>
                    <span className="text-terra-cotta pr-5 text-sm">
                      {cartItem.quantity}X
                    </span>
                    <span className="text-soft-stone text-sm">
                      @${cartItem.price.toFixed(2)}
                    </span>
                  </p>
                </div>
                <p className="text-warm-taup ml-auto self-center text-base">
                  ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="text-soft-stone flex items-center justify-between text-base">
          Order Total
          <span className="text-dark-wood text-4xl">${totalCartValue}</span>
        </p>
      </div>
      <button
        onClick={() => {
          ref.current?.close();
          resetCart();
          closeModal();
        }}
        className="btn-base btn-red py-3 text-base"
      >
        Start New Order
      </button>
    </dialog>
  );
}

export default ConfirmOrder;
