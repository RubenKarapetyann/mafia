import styles from "./Logo.module.css"
import logo from "@/public/logo.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div className={styles.container}>
        <Image
            src={logo}
            width={600}
        />
    </div>
  )
}
