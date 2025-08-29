function Property(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <span className="monospaced">{props.css}</span>
      </td>
      <td className="description">{props.description}</td>
    </tr>
  );
}

export default Property;
