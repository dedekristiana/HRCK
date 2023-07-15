function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-20 text-5xl font-bold text-green-800/60">HRCK</h1>
            <div className=" flex flex-col">
              <a className="" href="https://www.google.com">
                <button className="mb-5 btn w-48 font-bold">SHOPEE FOOD</button>
              </a>
              <a className="" href="https://www.google.com">
                <button className="mb-5 btn w-48 font-bold">GRAB FOOD</button>
              </a>
              <a href="https://www.google.com">
                <button className="mb-5 btn w-48 font-bold">GO FOOD</button>
              </a>
              <a href="https://www.google.com">
                <button className="mb-5 btn w-48 font-bold">WHATSAPP</button>
              </a>
            </div>
            <footer className="footer footer-center p-4 font-bold mt-32 text-green-900 ">
              <div>
                <p>HRCK Hot Chicken</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
