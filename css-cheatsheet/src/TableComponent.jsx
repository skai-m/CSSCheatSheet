import "./Property";
import tableData from "./data/tableData.json";
import Property from "./Property";

/* Main code begins below */

function TableComponent(props) {
  let properties;
  const filteredData = tableData.filter(
    (item) => item.category === props.category
  );

  properties = filteredData.map((item, i) => (
    <Property
      name={item.property}
      css={item.css}
      description={item.description}
      key={item.name + `${i}`}
    ></Property>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>CSS</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{properties}</tbody>
    </table>
  );
}

export default TableComponent;
