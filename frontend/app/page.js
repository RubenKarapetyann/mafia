import Logo from "@/components/global/Logo/Logo"
import "./globals.css"
import styles from "./page.module.css"
import MainButton from "@/components/global/MainButton/MainButton"
import endpoints from "@/endpoints/client-endpoints"

export default function Home() {
  return (
    <div className="main">
      <div className={styles.homeContainer}>
        <Logo
         styles={{
          marginTop : "100px"
         }}
        />
        <br/>
        <MainButton
          text={"PLAY"}
          link={endpoints().rooms}
        />
      </div>
    </div>
  )
}
