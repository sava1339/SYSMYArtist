import './App.css';

function App() {

  return (
    <>
      <section className="mt-4">
        <img className="h-[180px] mx-auto" src="kiss.png" alt="" />
        <h1 
          className=" text-blue-400 text-center text-[24px]"
        >
          ABOUT ME
        </h1>
        <div className="flex flex-col border-1 border-white mt-2 mx-16 rounded-xl px-3 py-2">
          <h2 
            className="text-blue-400 text-[18px]"
          >Hi  I am SYSMY</h2>
          <h3
            className="text-white text-[14px]"
          >
            2d Furry Artist
          </h3>
        </div>
        <div className="flex flex-col border-1 border-white mt-2 mx-16 rounded-xl px-3 py-2">
          <h2 
            className="text-blue-400 text-[18px]"
          >Commission status:</h2>
          <h3
            className="text-[21px]
            font-bold text-lime-400"
          >
            OPEN
          </h3>
        </div>
        <h1 
          className=" text-blue-400 text-center text-[24px] my-4"
        >
          SOCIAL
        </h1>
        <div className="social">
          <a href="https://x.com/YakimovSaveliy" target="_blank">
            <div 
            className="flex flex-col border-1 border-white  rounded-xl px-3 py-2 hover:bg-gray-800">
              <h2 
                className="text-blue-400 text-[18px]"
              >Twitter</h2>
              <h3
                className="text-[14px]
                font-bold text-white"
              >
                @YakimovSaveliy
              </h3>
            </div>
          </a>
          <a href="https://bsky.app/profile/sysmy.bsky.social" target="_blank">
            <div 
            className="flex flex-col border-1 border-white  rounded-xl px-3 py-2 hover:bg-gray-800">
              <h2 
                className="text-blue-400 text-[18px]"
              >Bluesky</h2>
              <h3
                className="text-[14px]
                font-bold text-white"
              >
                @sysmy.bsky.social
              </h3>
            </div>
          </a>
          <a href="https://www.furaffinity.net/user/sysmysaveliy" target="_blank">
            <div 
            className="flex flex-col border-1 border-white rounded-xl px-3 py-2 hover:bg-gray-800">
              <h2 
                className="text-blue-400 text-[18px]"
              >Furaffinity</h2>
              <h3
                className="text-[14px]
                font-bold text-white"
              >
                sysmysaveliy
              </h3>
            </div>
          </a>
          <a href="https://www.tiktok.com/@sysmyfurry" target="_blank">
            <div 
            className="flex flex-col border-1 border-white rounded-xl px-3 py-2 hover:bg-gray-800">
              <h2 
                className="text-blue-400 text-[18px]"
              >TikTok</h2>
              <h3
                className="text-[14px]
                font-bold text-white"
              >
                sysmyfurry
              </h3>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default App
