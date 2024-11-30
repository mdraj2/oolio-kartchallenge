import ShoppingCartIcon from "./components/ShoppingCartIcon";

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

  return (
    <div className="mx-auto grid grid-cols-[1fr_minmax(270px,850px)_400px_1fr] gap-x-5 bg-[#FCF8F5] py-20">
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
                  <img src={image.image.desktop} className="rounded" />
                  <div className="absolute bottom-0 left-[50%] flex -translate-y-[-50%] translate-x-[-50%] items-center whitespace-nowrap rounded-3xl border-[1px] border-[#B8A1A2] bg-white px-7 py-3">
                    <span className="mr-2 inline-block h-6 w-6 -translate-y-1">
                      <ShoppingCartIcon color="fill-red-500" />
                    </span>
                    <p className="font-inter font-semibold text-[#766F6D]">
                      Add to Cart
                    </p>
                  </div>
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
    </div>
  );
}

export default App;
