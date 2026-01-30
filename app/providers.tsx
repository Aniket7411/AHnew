"use client";

import { HomeProvider } from "@/components/contextManager/homecontext";
import { ScrollProvider } from "@/components/reactcomponents/scrollContext";
import ScrollToTop from "@/components/reactcomponents/scrollToTop/ScrollToTop";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HomeProvider>
      <ScrollProvider>
        <ScrollToTop />
        {children}
      </ScrollProvider>
    </HomeProvider>
  );
}
