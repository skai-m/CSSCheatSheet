import "./TableComponent";
import TableComponent from "./TableComponent";

const sections = [
  {
    name: "Color",
    text: "There are a wide range of CSS options available to customize the colors on an html page. These colors can be applied to text, backgrounds, links, buttons, and much more. Colors can be further customized using hex, rgb(), and hsla() values.",
  },
  {
    name: "Text",
    text: "The style of font elements can be modified with CSS too! These properties can add specific styling attributes to text such as underlinine or bold. They can also be used to import custom fonts from around the web and APIs like Google Fonts.",
  },
  {
    name: "Size and Position",
    text: "Page elements can be ordered and resized with a variety of properties specifically designed to give developers more control over the organization of a web page. Sizing properties include code that adjust the margins between objects as well as their width and height.",
  },
  {
    name: "Responsive Layouts",
    text: "Grids, flexboxes, and media elements allow you to accurately and reliably lay out webpages on a variety of screen sizes.",
  },
];

function Section(props) {
  let sectionCategory = "";
  let sectionDescription = "";

  let section = sections.find((item) => item.name === props.name);
  if (section != null) {
    sectionCategory = section.name;
    sectionDescription = section.text;
  }

  return (
    <section className="container">
      <h3>{sectionCategory}</h3>
      <p>{sectionDescription}</p>
      <TableComponent category={sectionCategory}></TableComponent>
    </section>
  );
}

export default Section;
