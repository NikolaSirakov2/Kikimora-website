import { Button } from "../ui/button";

const Header = () => {
  const handleLoginClick = () => {
    // Handle login click
  };

  const handleRegisterClick = () => {
    // Handle register click
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black px-6 py-4 opacity-100 backdrop-blur-sm duration-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <img
              src="/assets/kikimora_text_logo.png"
              alt="Kikimora Logo"
              className="h-16 w-auto"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={handleLoginClick}>
              Login
            </Button>
            <Button onClick={handleRegisterClick}>Sign Up</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
