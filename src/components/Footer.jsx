import Link from "next/link"
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Elevate NeoX</h3>
            <p className="text-sm text-gray-400">
              Elevate your Web3 experience with NFT gaming and DeFi products.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/game"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Play Game
                </Link>
              </li>
              <li>
                <Link
                  href="/nft-market"
                  className="hover:text-yellow-400 transition-colors"
                >
                  NFT Market
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Elevate NeoX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
