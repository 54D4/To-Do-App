import PropTypes from "prop-types";

const Todos = ({ name, id, deleteFunction }) => {
  return (
    <div
      className="flex justify-between w-[364px] px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white  text-lg rounded-xl my-7 shadow-md"
      id={id}
    >
      <h1>{name}</h1>
      <button onClick={() => deleteFunction()}>delete</button>
    </div>
  );
};

Todos.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  deleteFunction: PropTypes.func,
};

export default Todos;
