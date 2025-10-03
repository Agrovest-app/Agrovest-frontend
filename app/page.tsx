import Image from "next/image";


export default function Home() {

  return (
    <> 
    <div className="relative flex flex-col justify-center w-full items-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-70">
      </div>

        <div className="absolute z-20 w-11/12 mx-auto flex items-center justify-between mt-9">
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

    <section className="my-20">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-end justify-around text-center">
      <div className="flex flex-col items-center w-5/12">
            <Image src={"/imgs/mission.png"} 
            alt="mission"
            width={4000}
            height={4000}
            className="w-22 h-auto"
            />
        <h2 className="text-4xl text-center font-medium mt-3">Our Mission</h2>
        <p className="text-center mt-5 text-xl">To strengthen the agricultural value chain by training farmers, leveraging decentralized logistics, and using data to align produce with demand, ensuring efficiency, profitability, and food security across Africa and beyond.</p>
      </div>
      <div className="flex flex-col items-center w-5/12">
            <Image src={"/imgs/vision.png"} 
            alt="mission"
            width={1600}
            height={1024}
            className="w-22 h-auto pb-3"
            />
        <h2 className="text-4xl text-center font-medium mt-3">Our Vision</h2>
        <p className="text-center mt-5 text-xl">To position Africa at the heart of global agricultural innovation, empowering farmers, optimizing food systems, and driving sustainable, data-driven solutions that connect produce to people across the world.</p>
      </div>
      </div>
    </section>

 <section className="flex flex-col md:flex-row my-20">
      {/* Left Side (Sticky Text) */}
      <div className="md:w-1/2 p-8 md:sticky md:top-0 md:h-screen flex flex-col justify-center">
        <h2 className="text-6xl font-medium mb-8 text-gray-900">Our Services & Solutions</h2>
        <p className="mb-6 text-lg text-gray-900">
          Discover our comprehensive range of agriculture solutions designed for
          performance, sustainability, and scale:
        </p>

      </div>

      {/* Right Side (Scrolling Content) */}
      <div className="md:w-4/6 space-y-8 p-6">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/Agriculture_Training3.jpg"
            alt="Strategic Agriculture Training"
            width={800}
            height={450}
            className="object-cover w-full h-[65vh]"
          />
           <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-1/12 left-6 text-white">
            <h3 className="text-3xl font-semibold">Strategic Agriculture Training</h3>
          <p className="mt-3 w-3/4 text-gray-100 font-light">We equip farmers with the modern techniques and practical knowledge they need to thrive. From soil to market, we help them grow more, waste less, and earn better.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/Data_Driven_Marketing.jpg"
            alt="Advanced Irrigation Systems"
            width={800}
            height={450}
            className="object-cover w-full h-[65vh]"
          />
           <div className="absolute inset-0 bg-black/50" />
 <div className="absolute bottom-1/12 left-6 text-white">
            <h3 className="text-3xl font-semibold">Data-Driven Marketing</h3>
          <p className="mt-3 w-3/4 text-gray-100 font-light">We equip farmers with the modern techniques and practical knowledge they need to thrive. From soil to market, we help them grow more, waste less, and earn better.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/imgs/Produce_Delivery2.jpg"
            alt="Smart Drone Monitoring"
            width={800}
            height={450}
            className="object-cover w-full h-[65vh]"
          />
           <div className="absolute inset-0 bg-black/50" />
<div className="absolute bottom-1/12 left-6 text-white">
            <h3 className="text-3xl font-semibold">Optimal Produce Delivery</h3>
          <p className="mt-3 w-3/4 text-gray-100 font-light">We equip farmers with the modern techniques and practical knowledge they need to thrive. From soil to market, we help them grow more, waste less, and earn better.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-20">
      <h2 className="text-5xl text-center font-medium mt-3 text-gray-900">Why Agrovest?</h2>
      <p className="text-center mt-8 w-2/4 mx-auto text-lg text-gray-800">We blend innovation with proven agronomic knowledge to help your agribusiness thrive in a rapidly evolving landscape.</p>
      
       <div className="flex flex-col lg:flex-row">
      <div className="w-1/3 p-8 flex flex-col items-center bg-white shadow-lg">
        <Image src={"/imgs/innovation.png"} 
            width={20}
            height={20}
            alt="mission" />
            </div>
       </div>
    </section>
    </>
  );
}