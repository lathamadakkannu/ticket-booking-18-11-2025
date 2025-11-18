"use client";

import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// Change prepend from true to false
const clientSideEmotionCache = createCache({ 
  key: "css", 
  prepend: false // ✅ Changed from true to false
});

export default function EmotionCacheProvider({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>;
}