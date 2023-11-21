import Button from "../common/button";

const links = ["Home page", "Generator", "Pricing-plan", "Blog - news"];
const otherLinks = ["About us", "Features", "Collection-2023", "Career"];

const Header = () => {
  return (
    <nav className="lg:px-32 px-8 py-8 flex items-start justify-between">
      <h1 className="font-bold text-lg tracking-wide">AIPatrn</h1>
      <div className="flex gap-x-12 xl:gap-x-24 2xl:gap-x-48 leading-relaxed">
        <ul className="tracking-wider text-black/60 hidden lg:block">
          {links.map((link) => (
            <li key={link}>
              <a
                className="link"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <ul className="tracking-wider text-black/60 hidden lg:block">
          {otherLinks.map((link) => (
            <li key={link}>
              <a
                className="link"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <Button icon="caret">Menu</Button>
      </div>
    </nav>
  );
};

export default Header;
