import "./menu.css";

export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          SKILLS
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          LANGUAGES
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          PROJECTS
        </a>
      </li>
    </ul>
  );
}
