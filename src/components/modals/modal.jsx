import InfoModal from "./info";
import DeleteModal from "./delete";
import EditModal from "./edit";

export const MainModal = ({ modal, toggle, id, reCall }) => {
  return (
    <>
      {modal.status && modal.type === "delete" && (
        <DeleteModal modal={modal} toggle={toggle} id={id} reCall={reCall} />
      )}
      {modal.status && modal.type === "edit" && (
        <EditModal modal={modal} toggle={toggle} id={id} reCall={reCall} />
      )}
      {modal.status && modal.type === "info" && (
        <InfoModal modal={modal} toggle={toggle} id={id} />
      )}
    </>
  );
};
