interface ModalProps{
    modalOpen: boolean;
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode

}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
<div className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box">
    <label 
      onClick = {() => setModalOpen(false)}
      htmlFor="my_modal_6" className="btn btn-sm btn-circle absolute right-2 top-2 ml-6">x
    </label>
    {children}
  </div>
</div>
  )
}

export default Modal