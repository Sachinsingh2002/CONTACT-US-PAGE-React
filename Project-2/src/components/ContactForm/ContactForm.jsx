import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdDisplaySettings, MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"
import { HiMail } from "react-icons/hi";


const ContactForm = () => {

  const onViaCallSubmit = () => {
    console.log("i am from call!");
  };


  


  












  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          
          <div className={styles.top_btn}>

          
          
          <Button text="VIA SUPPORT CHAT" /> 
          <Button onClick={onViaCallSubmit}  text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>

          </div>

          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>

          
          <form>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name= "name" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name= "email" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name= "text" rows="8"/>
            </div>
          </form>

          
          <div style={{
            display: "flex",
            justifyContent: "end",
          }
          }>
          <Button text="SUBMIT"/>
          </div>


          
 

        </div>

        <div className={styles.conatct_image}>
            <img src="contact.svg" alt="conatct-image" />
          
        </div>
    </section>
  )
}

export default ContactForm



