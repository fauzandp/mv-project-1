import { NextScript } from "next/document";
import Menu from "../../components/menu";

export default function Layout({ children }: any) {
  return (
    <>
      <Menu />
      <div className="container">
        <main> {children} </main>
      </div>
    </>
  );
}
