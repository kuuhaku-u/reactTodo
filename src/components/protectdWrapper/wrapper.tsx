export default function ProtectWrapper({ children }: any) {


    if (localStorage.getItem("token") !== "AUTH") return <p>USER MUST BE AUTHORIZED</p>
    return <>{children}</>

}