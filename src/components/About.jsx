import { motion } from "framer-motion";

export default function () {
  const contentData = [
    {
      title: "NeoCity",
      body: "SciFi City to compete with players and get exciting rewards.",
    },
    {
      title: "NeoCine",
      body: "Explore a futuristic cinema experience.",
    },
    {
      title: "NFT Market",
      body: "Trade unique NFTs and build your collection.",
    },
  ];

  return (
    <div className="text-center h-full w-full flex items-center justify-center" id="quests">
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl font-bold mb-10">
          {["Elevate Your Web3 Experience", "with NFT Gaming"].map((item, index) => (
            <p key={index} className="mb-3">{item}</p>
          ))}
        </h2>
        <p className="tracking-wide mb-20">
          Together with other DeFi products, Elevate NeoX is a platform that
          <br />
          provides an experience for gamers to interact with NFTs.
        </p>
        <div className="flex items-center justify-center gap-24">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              className="h-72 w-80 flex items-center justify-center relative p-8"
              style={{
                backgroundImage: `url("/images/bigPlank.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
            >
              <p className="p-4 font-semibold text-lg">{item.body}</p>
              <span
                className="absolute h-60 w-60 flex items-center justify-center -translate-x-24 -translate-y-32 -rotate-[20deg]"
                style={{
                  backgroundImage: "url('/images/hangPlank.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <span className="absolute font-bold tracking-wider text-xl translate-y-7 -translate-x-2">
                  {item.title}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
