import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashoard</p>
      {children}
    </div>
  );
};

export default Layout;
