import { useEffect, useState } from "react";
import { api } from "../services/api";

type UseAuthProps = {
  code: string;
};

export function useAuth({ code }: UseAuthProps) {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const res = await api.post("/spotify/auth", { code });

        console.log(res);

        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      } catch (err) {
        console.error(err);
      }
    }

    fetch();
  }, [code]);
}
