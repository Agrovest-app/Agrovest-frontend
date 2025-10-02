
export default function Home() {

  return (
    <> 
    <div className="relative flex flex-col justify-center w-full items-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-70">
      </div>

      
        <div className="absolute z-30 w-11/12 mx-auto flex items-center justify-between mt-9">
         <h1 className="text-7xl text-white font-medium w-6/12">
Empowering Africa’s Farmers. Feeding the World.</h1>
        <div className="w-4/12">
        <p className=" text-white text-2xl font-medium">
At Agrovest, we’re transforming agriculture with strategic training, smart logistics, and data-driven solutions, connecting African farmers to global markets.</p>
        <div className="flex items-center gap-3 mt-8">
        <button className="bg-[#8cbb37] text-black rounded-lg px-8 py-4 font-medium uppercase text-sm transition-all duration-500 cursor-pointer ease-in-out hover:scale-90 hover:bg-white">Join as a Farmer</button> <br />
        <button className="text-white border rounded-lg px-8 py-4 font-medium uppercase text-sm bg-white/10 hover:bg-white transition-all duration-500 cursor-pointer ease-in-out hover:text-black hover:scale-90">Join as a Buyer</button>
        </div> </div>
        </div>
      <video className="w-full" src="/videos/vid.mp4" loop autoPlay muted playsInline></video>
    </div>
    </>
  );
}
