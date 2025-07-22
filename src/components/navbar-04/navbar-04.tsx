import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

const Navbar04Page = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-end justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="" />

          <div className="flex  gap-3">



          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
