"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
