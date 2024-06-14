import refreshAccessToken from "@/app/actions/auth/refreshAccessToken";
import axios from "@/app/src/utils/axios";

const Page = async () => {
  try {
    const { data } = await axios.get("auth/protected");
  } catch (error) {
    if (error.response.status === 401) {
      const { data } = refreshAccessToken();
    }
  }

  return <div>Dashboard Page</div>;
};

export default Page;
