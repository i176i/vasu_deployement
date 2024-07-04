// import React from "react";
// import vennInfoGraphic from "../../assets/images/media_sample_venn2.png";

// function InfoGraphicsSection() {
//   return (
//     <div className="">
//       <div className="grid grid-cols-2 ">
//         <div className=" max-w-full p-12">
//           <img
//             src={vennInfoGraphic}
//             className="h-auto bg-cover"
//             alt="Vite logo"
//           />
//         </div>
//         <div className=" w-full flex flex-col">
//           <div className=" min-h-4/5 my-auto pr-12 pl-3 overflow-hidden">
//             <h1 className="text-7xl">
//               Your all in one growth agency that actually executes
//             </h1>
//             <div className="mr-8">
//               <p className="text-md pt-8">
//                 Profitable growth happens when you bring together media buying,
//                 creative, landing pages and Email/SMS.
//               </p>
//               <p className="text-md pt-8">
//                 We work seamlessly across each key lever: analyzing data, making
//                 creative, building landing pages, running Email/SMS campaigns -
//                 We do all this utilizing our in house AI growth system that has
//                 proven to generate over $50 million + in revenue for our DTC
//                 clients.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoGraphicsSection;



import React from "react";
import vennInfoGraphic from "../../assets/images/media_sample_venn2.png";

function InfoGraphicsSection() {
  return (
    <div className="p-5 md:p-12 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10">
        <div className="max-w-full">
          <img
            src={vennInfoGraphic}
            className="max-w-full mx-auto sm:h-full bg-cover my-[-30px]"
            alt="Vite logo"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="min-h-4/5 my-auto pr-3 md:pr-12 pl-3 overflow-hidden">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb">
              Your all in one growth agency that actually executes
            </h1>
            <div className="mr-8">
              <p className="text-md md:text-md lg:text-lg pt-4 md:pt-8">
                Profitable growth happens when you bring together media buying,
                creative, landing pages and Email/SMS.
              </p>
              <p className="text-md md:text-md lg:text-lg pt-4 md:pt-8">
                We work seamlessly across each key lever: analyzing data, making
                creative, building landing pages, running Email/SMS campaigns -
                We do all this utilizing our in house AI growth system that has
                proven to generate over $50 million + in revenue for our DTC
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoGraphicsSection;
