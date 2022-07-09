import "../App.css";

const useConfirm = (message="", onConfirm, onCancel) => {
  if (!onConfirm || (typeof onConfirm !== "function")){
    return;
  }
  if (!onCancel || (typeof onCancel !== "function")){
    return;
  }
  const confirmAction = () =>{
    if(confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return confirmAction 
};

const useConfirmApp = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const ConfirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={ConfirmDelete}>Delete the world</button>
    </div>
  );
};

export default useConfirmApp;