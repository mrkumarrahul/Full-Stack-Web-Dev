function AddTodo() {
  return (<div class="row kg-row">
  <div class="col-6">
    <input type="text" placeholder="Input TODO Here"/>
    </div>
  <div class="col-4">
    <input type="Date" />
  </div>
  <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
</div>
  );
}
export default AddTodo;