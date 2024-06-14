const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-6 overflow-y-scroll">
      <div className="col-span-4 bg-red-200">Image</div>
      <div className="col-span-2 flex items-center justify-center">{children}</div>
    </div>
  );
};
export default Layout;
