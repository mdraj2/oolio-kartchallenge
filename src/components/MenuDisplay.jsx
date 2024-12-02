import ShoppingCartIcon from "./ShoppingCartIcon";
import ReduceQuantityIcon from "./ReduceQuantityIcon";
import IncreaseQuantityIcon from "./IncreaseQuantityIcon";

function MenuDisplay({
  menu,
  cart,
  addNewItemToCart,
  increaseItemQuantityInCart,
  reduceItemQuantityCart,
}) {
  return (
    <div className="col-start-2 col-end-3">
      <h1 className="text-dark-wood mb-8 font-inter text-4xl font-semibold">
        Desserts
      </h1>
      <div className="grid grid-cols-3 gap-x-6 gap-y-9">
        {menu.map((menuItem) => {
          const menuItemInCart = cart.some((item) => item.id === menuItem.id);
          const itemQuantity = menuItemInCart
            ? cart.find((item) => item.id == menuItem.id).quantity
            : 0;

          return (
            <div key={menuItem.id}>
              <div className="relative mb-9">
                {!menuItemInCart ? (
                  <>
                    <img src={menuItem.image.desktop} className={"rounded"} />
                    <button
                      onClick={() => addNewItemToCart(menuItem)}
                      className="btn-base btn-menu border-terra-cotta justify-center border bg-white"
                    >
                      <span className="mr-2 inline-block h-6 w-6 -translate-y-1">
                        <ShoppingCartIcon />
                      </span>
                      <p className="text-warm-taup font-inter font-semibold">
                        Add to Cart
                      </p>
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={menuItem.image.desktop}
                      className={"border-brick-red rounded border-2"}
                    />
                    <div className="btn-base btn-menu border-brick-red bg-burnt-sienna justify-between px-3">
                      <button
                        className="inline-block h-6 w-6"
                        onClick={() => reduceItemQuantityCart(menuItem)}
                      >
                        <ReduceQuantityIcon />
                      </button>

                      <span className="text-soft-clay">{itemQuantity}</span>
                      <button
                        className="inline-block h-6 w-6"
                        onClick={() => increaseItemQuantityInCart(menuItem)}
                      >
                        <IncreaseQuantityIcon />
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-soft-stone font-inter text-xs font-semibold">
                  {menuItem.category}
                </p>
                <p className="text-warm-taup font-inter text-sm font-semibold">
                  {menuItem.name}
                </p>
                <p className="text-terra-cotta font-inter text-sm font-semibold">
                  ${menuItem.price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuDisplay;
