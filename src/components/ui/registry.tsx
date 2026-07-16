"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const c = createCache({ key: "css" });
    c.compat = true;
    return c;
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (!names.length) return null;
    const styles = names.reduce((acc, name) => {
      if (typeof cache.inserted[name] !== "boolean") {
        acc += cache.inserted[name];
      }
      return acc;
    }, "");
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}