import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function FollowUs() {
  return (
    <section >
      <div className="flex justify-end items-center mt-4 text-slate-300">
        <span className="mr-4">FOLLOW US</span>
        <ul className="flex gap-4">
          <li>
            <a href="#">
              <FaInstagram className="hover:text-red-400"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube className="hover:text-red-400"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook className="hover:text-red-400"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter className="hover:text-red-400"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FollowUs;
