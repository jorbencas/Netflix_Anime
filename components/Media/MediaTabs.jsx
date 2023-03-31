import ImputKindsFilters from "../InputsFilters/index";

export default function MediaTabs({ kind, changeKind }) {
  return (
    <>
      <ImputKindsFilters
        type="radio"
        key="1"
        changeKing={(e, t) => {
          changeKind(e.value);
        }}
        ischecked={kind === "banner"}
        value="banner"
        label="banner"
        i="banner"
      />

      <ImputKindsFilters
        type="radio"
        key="2"
        changeKing={(e) => changeKind(e.value)}
        ischecked={kind === "portada"}
        value="portada"
        label="portada"
        i="portada"
      />
    </>
  );
}
