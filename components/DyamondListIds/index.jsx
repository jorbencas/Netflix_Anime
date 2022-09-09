export default function DyamondListIds({ list, changeList }) {
  if (list.length > 0) {
    return undefined;
  }
  return (
    <>
      {list.map((element) => {
        return (
          <div class="list_element" onclick={changeList(element.id)}>
            <img className="img" src={element.src} alt={element.num} />
            <div class="info">{element.num}</div>
          </div>
        );
      })}
    </>
  );
}
