import Head from "next/head";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const checkAvailabilityRef = useRef(null);

  useEffect(() => {
    const { current } = checkAvailabilityRef;
    //@ts-ignore
    current.addEventListener(
      "myCustomEvent",
      //@ts-ignore
      (event) => {
        if (event.detail.isAvailable) {
          router.push("/available");
        } else {
          router.push("/unavailable");
        }
      }
    );
    //@ts-ignore
    return () => current.removeEventListener("myCustomEvent", () => {});
  }, [router]);

  return (
    <div>
      {/* @ts-ignore */}
      <address-card ref={checkAvailabilityRef}></address-card>
    </div>
  );
};

export default Home;
