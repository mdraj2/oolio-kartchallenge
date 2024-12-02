import SuccessIcon from "./SuccessIcon";
import { useRef, useEffect } from "react";

function ConfirmOrder({
  cart,
  modalOpen,
  resetCart,
  closeModal,
  totalCartValue,
}) {
  const ref = useRef();

  useEffect(() => {
    modalOpen && ref.current?.showModal();
  }, [modalOpen]);

  return (
    <dialog
      ref={ref}
      className="w-[650px] rounded-md p-10 font-semibold backdrop:bg-black/50"
    >
      <div className="mb-5 h-8 w-9">
        <SuccessIcon />
      </div>
      <h2 className="mb-2 text-3xl text-black">Order Confirmed</h2>
      <p className="text-normal-grey mb-5 text-xs">
        We hope you enjoyed your food!
      </p>
      <div className="bg-light-white mb-6 rounded-md p-5 pb-6">
        <ul className="mb-8">
          {cart.map((cartItem) => {
            return (
              <li
                key={cartItem.id}
                className="relative flex gap-3 border-b py-3"
              >
                <img src={cartItem.thumbnail} className="h-14" />
                <div>
                  <p className="text-normal-brown mb-3 text-sm">
                    {cartItem.name}
                  </p>
                  <p>
                    <span className="text-light-brown pr-5 text-sm">
                      {cartItem.quantity}X
                    </span>
                    <span className="text-normal-grey text-sm">
                      @${cartItem.price.toFixed(2)}
                    </span>
                  </p>
                </div>
                <p className="text-normal-brown ml-auto self-center text-base">
                  ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="text-normal-grey flex items-center justify-between text-base">
          Order Total
          <span className="text-dark-brown text-4xl">${totalCartValue}</span>
        </p>
      </div>
      <button
        onClick={() => {
          ref.current?.close();
          resetCart();
          closeModal();
        }}
        className="btn btn-red text-base"
      >
        Start New Order
      </button>
    </dialog>
  );
}

export default ConfirmOrder;
