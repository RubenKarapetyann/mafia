import styles from "./Logo.module.css"
import logo from "@/public/logo.png"
import Image from "next/image"

export default function Logo({ styles }) {
  return (
    <div className={styles.container} style={styles}>
        <Image
            src={logo}
            width={600}
        />
    </div>
  )
}
