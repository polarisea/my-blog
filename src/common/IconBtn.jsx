import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Component({ onClick, icon, color }) {
  return (
    <button
      onClick={onClick}
      className={`block bg-transparent border-solid border-[2px] p-3 rounded-full border-red-500 hover:border-[rgba(255,0,0,0.5)] active:border-[rgba(255,0,0,1)]`}
    >
      <FontAwesomeIcon icon={icon} className={`text-red-500`} />
    </button>
  );
}

export default Component;
