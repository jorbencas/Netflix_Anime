import ImputKindsFilters from "../InputsFilters/index";

export default function ListFilters({ kind, listOriginal, list, onchange }) {
  if (list.length == 0) return `No hay ${kind}`;
  const changeValues = (value, id) => {
    let k = id.split("_");
    onchange(value, k[1]);
  };
  return (
    <div className={styles.concret}>
      <p> {kind}: </p>
      <div className={styles.input_group + " " + styles.checkbox}>
        {list.map(({ code, tittle }, i) => (
          <ImputKindsFilters
            type="checkbox"
            key={i}
            changeKing={({ value, id }) => {
              changeValues(value, id);
            }}
            ischecked={listOriginal.includes(code.trim())}
            value={code}
            label={tittle}
            i={i + "_" + kind}
          />
        ))}
      </div>
    </div>
  );
};
