import React from "react";
import Link from "next/link";

const links = [
  { href: "", label: "Champion" },
  { href: "", label: "Mode" },
  { href: "", label: "Runes" },
  { href: "", label: "Items" },
  { href: "", label: "Spell" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/b/be/Wild_Rift_icon.png/revision/latest?cb=20191018194406" />
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: #02212f;
      }
      nav {
        text-align: center;
        background-color: #1a2e37;
      }
      ul {
        margin-top: 0px;
        display: flex;
        align-items: center;
      }
      li {
        display: flex;
        height: 50px;
        align-items: center;
        padding: 0px 10px;
      }
      li:hover {
        background: #003e58;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
      }
      img {
        width: 50px;
      }
    `}</style>
  </nav>
);

export default Nav;
