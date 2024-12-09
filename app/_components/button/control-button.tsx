export default function ControlButton(props: {
  text: string;
  onClick: () => void;
  unclickable?: boolean;
}) {
  const click = props.unclickable ? "pointer-events-none" : "";
  const borderColor = props.unclickable ? "border-stone-500" : "border-[#2f75af]";
  const textColor = props.unclickable ? "text-stone-500" : "text-white";
  const backgroundColor = props.unclickable ? "" : "bg-[#2f75af]";

  return (
    <button
      className={`${borderColor} ${backgroundColor} border rounded-full ${textColor} font-medium py-3 px-4 text-l ${click}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
