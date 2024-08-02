import React, { useState } from "react";

type userType = {
  name: string;
  email: string;
  phone: string;
};
function LoginCheck() {
  //   const [user, setUser] = useState<userType | null>(null);
  const [user, setUser] = useState<userType | null>({} as userType); // null yerine boş obje gelirse patlamaması için as userType ekleyerek obje tanımlanır.
  const handleLogin = () => {
    setUser({
      name: "büşra",
      email: "b.b.b.bb.com",
      phone: "123456",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Giriş</button>
      <button onClick={handleLogout}>Çıkış</button>
      <div>
        <p>{user?.name}</p>
      </div>
    </div>
  );
}

export default LoginCheck;
