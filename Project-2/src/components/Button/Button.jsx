// import { MdMessage } from "react-icons/md";
// import styles from "./Button.module.css";
// const Button = (props) => {
//   return (
//     <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
//         <MdMessage />
//         {props.icon}
//         {props.text}
    
//     </button>
//   );
// };

// export default Button



import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
