"use client";

import Router from "next/router";
import React, { useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = 101255897;

interface MetrikaProps {
  enabled: boolean;
}

export default function Metrika({ enabled }: MetrikaProps)  {
  const hit = useCallback((url: string) => {
    if (enabled) {
      ym("hit", url);
    } else {
      console.log(`%c[YM](HIT)`, `color: orange`, url);
    }
  }, [enabled]);

  useEffect(() => {
    const handleRouteChange = (url: string) => hit(url);

    hit(window.location.pathname + window.location.search);
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [hit]);

  if (!enabled) return null;

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};
