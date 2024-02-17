"use client";
import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoPaperAirplane } from "react-icons/go";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const FooterEn = () => {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/he") || pathname.startsWith("/ar")) {
    return null;
  }
  const handleSubscribe = async () => {
    if (email === "") {
      return;
    } else {
      try {
        setLoading(true);
        const data = JSON.stringify({
          email: email,
          lang: "en",
        });

        const res = await axios.post("/api/email/email_subscription", data);

        if (res.status === 200) {
          return toast({
            variant: "success",
            title: "Successfully subscribed",
            description: "You have successfully subscribed to our newsletter",
          });
        } else {
          return toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }
      } catch (error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <footer className=" px-4 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-start">
        <div className="col-span-1">
          <label className="font-bold">Subscribe to our newsletter</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe to our newsletter"
            className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
          />
          <Button className="mt-5" onClick={handleSubscribe} disabled={loading}>
            Submit <GoPaperAirplane className="h-3 w-3 ml-4" />
          </Button>
        </div>

        <div className="col-span-1">
          <label className="font-bold">Contact</label>
          <Link href="mailto:info@qpmatrix.tech">
            <p className="hover:text-gray-200 cursor-pointer">
              info@qpmatrix.tech
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
            <Image
              src="/QPM.LOGO.svg"
              alt="Quantum Pinnacle Matrix"
              width={200}
              height={200}
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
