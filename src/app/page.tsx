import Image from "next/image";
import PasswordInput from "./components/Auth/Login";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <PasswordInput>
        
      </PasswordInput>
     </div>
    </main>
  );
}
