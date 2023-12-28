import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
