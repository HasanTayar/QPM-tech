import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoPaperAirplane } from "react-icons/go";

const FooterEn = () => {
  return (
    <footer className=" px-4 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-start">
        <div className="col-span-1">
          <label className="font-bold">Subscribe to our newsletter</label>
          <Input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
          />
          <Button className="mt-5">
            Submit <GoPaperAirplane className="h-3 w-3 ml-4" />
          </Button>
        </div>

        <div className="col-span-1">
          <label className="font-bold">Contact</label>
          <Link href="mailto:info@quantumpinnaclematrix.tech">
            <p className="hover:text-gray-200 cursor-pointer">
              info@quantumpinnaclematrix.tech
            </p>
          </Link>
          <Link href="tel:+972524802045">(+972)-524802045</Link>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold">Social Media</h1>
          <div className="flex space-x-4">
            <FaYoutube className="w-8 h-8 hover:text-red-500 cursor-pointer" />
            <FaInstagram className="w-8 h-8 hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="w-8 h-8 hover:text-blue-500 cursor-pointer" />
            <FaFacebook className="w-8 h-8 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <Link href="/">
            <img
              src="/QPM.LOGO.svg"
              alt="Quantum Pinnacle Matrix"
              className="w-32 h-auto"
            />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2024 Quantum Pinnacle Matrix. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterEn;
