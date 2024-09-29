// "use client";

// import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";

// const Game = () => {
//   const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
//     loaderUrl: "/build/myunityapp.loader.js",
//     dataUrl: "/build/myunityapp.data",
//     frameworkUrl: "/build/myunityapp.framework.js",
//     codeUrl: "/build/myunityapp.wasm",
//   });

//   const loadingPercentage = Math.round(loadingProgression * 100);

//   return (
//     <div className="relative w-[800px] h-[600px]" style={{
//       backgroundImage: `url("/images/homeBg2.png")`,
//     }} >
//       {!isLoaded && (
//         <div className="absolute top-0 left-0 w-full h-full bg-gray-500 flex justify-center items-center">
//           <p>Loading... ({loadingPercentage}%)</p>
//         </div>
//       )}
//       <Unity className="w-full h-full" unityProvider={unityProvider} />
//     </div>
//   );
// };

// export default Game;

const page = () => {
  return (
    <div>page</div>
  )
}

export default page